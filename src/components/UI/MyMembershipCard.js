import classes from "../../CSS/MyMembershipCard.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function MyMembershipCard() {
  const [userData, setUserData] = useState({
    userId: "",
    username: "",
    membershipEndDate: "",
    isActive: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch user data from token
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No authentication token found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUserData((prev) => ({
        ...prev,
        userId: decoded.id,
        username: decoded.name,
      }));
    } catch (error) {
      console.error("Invalid token:", error);
      setError("Invalid token. Please log in again.");
    }
  }, []);

  // Fetch membership details from API
  useEffect(() => {
    if (!userData.userId) return;

    const fetchMembership = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No authentication token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/membership/getInfo?userId=${userData.userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setUserData((prev) => ({
            ...prev,
            membershipEndDate: response.data.endDate,
            isActive: response.data.status === "active",
          }));
        } else {
          console.error("Unexpected response:", response);
          setError("Unexpected response from server.");
        }
      } catch (error) {
        console.error("Error fetching membership info:", error);

        if (error.response) {
          if (error.response.status === 403) {
            setError("Access forbidden. Please check your permissions.");
          } else if (error.response.status === 401) {
            setError("Unauthorized. Please log in again.");
          } else {
            setError(
              `Error: ${
                error.response.data.message ||
                "Failed to load membership details."
              }`
            );
          }
        } else {
          setError("Network error. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMembership();
  }, [userData.userId]);

  // Handle Membership Cancellation
  const handleCancelMembership = async () => {
    if (!userData.isActive) return;

    if (window.confirm("Are you sure you want to cancel your membership?")) {
      try {
        const token = localStorage.getItem("token");

        await axios.post(
          "http://localhost:5000/api/membership/cancel",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUserData((prev) => ({
          ...prev,
          isActive: false,
          membershipEndDate: "",
        }));
        alert("Membership cancelled successfully.");
      } catch (error) {
        console.error("Error cancelling membership:", error);
        alert("Failed to cancel membership.");
      }
    }
  };

  return (
    <div className={classes.card}>
      <h1 className={classes.title}>My Membership</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className={classes.error}>{error}</p>
      ) : (
        <>
          <div className={classes.userInfo}>
            <p>User ID: {userData.userId}</p>
            <p>Username: {userData.username}</p>
          </div>

          {userData.isActive ? (
            <p className={classes.status}>
              Membership <span className={classes.active}>active</span> till -{" "}
              {userData.membershipEndDate}
            </p>
          ) : (
            <p className={classes.status}>No Active Membership</p>
          )}

          {userData.isActive && (
            <button
              className={classes.cancelMembershipbutton}
              onClick={handleCancelMembership}
            >
              Cancel Membership
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default MyMembershipCard;
