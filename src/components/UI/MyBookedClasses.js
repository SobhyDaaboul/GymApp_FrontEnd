import classes from "../../CSS/MyMembershipCard.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function MyBookedClasses() {
  const [userId, setUserId] = useState(null);
  const [bookedClasses, setBookedClasses] = useState([]);
  const [bookedSessions, setBookedSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get user ID from JWT token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.id); // Store user ID from decoded token
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  // Fetch booked classes & sessions
  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const [classesRes, sessionsRes] = await Promise.all([
          axios.get(`http://localhost:5000/api/getbookedclass`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            params: {
              userId: userId, // Send the userId in the query params
            },
          }),
          axios.get(`http://localhost:5000/api/getbookedsession`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            params: {
              userId: userId, // Send the userId in the query params
            },
          }),
        ]);

        setBookedClasses(classesRes.data);
        setBookedSessions(sessionsRes.data);
      } catch (err) {
        console.error("Error fetching booked data:", err);
        setError("Failed to load booked classes and sessions.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className={classes.card}>
      <h1 className={classes.title}>My Booked Classes & Sessions</h1>

      {loading ? (
        <p className={classes.status}>Loading...</p>
      ) : error ? (
        <p className={classes.status}>{error}</p>
      ) : (
        <>
          <div className={classes.userInfo}>
            <h2>Booked Classes</h2>
            {bookedClasses.length > 0 ? (
              bookedClasses.map((cls) => (
                <div key={cls.classCode} className={classes.userInfo}>
                  <p>
                    <strong>Class Name:</strong> {cls.className}
                  </p>
                  <p>
                    <strong>Schedule:</strong> {cls.schedule}
                  </p>
                  <p>
                    <strong>Duration:</strong> {cls.duration} minutes
                  </p>
                </div>
              ))
            ) : (
              <p className={classes.status}>No booked classes.</p>
            )}
          </div>

          <div className={classes.userInfo}>
            <h2>Booked Sessions</h2>
            {bookedSessions.length > 0 ? (
              bookedSessions.map((session) => (
                <div key={session.sessionId} className={classes.userInfo}>
                  <p>
                    <strong>Session Name:</strong> {session.name}
                  </p>
                  <p>
                    <strong>Schedule:</strong> {session.schedule}
                  </p>
                </div>
              ))
            ) : (
              <p className={classes.status}>No booked sessions.</p>
            )}
          </div>
        </>
      )}
      <button className={classes.cancelMembershipbutton}>Cancel Booking</button>
    </div>
  );
}

export default MyBookedClasses;
