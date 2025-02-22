import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import classes from "../../CSS/ClassCard.module.css";

function ClassCard(props) {
  const [isBooked, setIsBooked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const className = props.title;

  console.log(props);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      console.log("Checking authentication, token:", token);
      if (token) {
        try {
          jwtDecode(token);
          console.log("idtoken", jwtDecode(token));
          setIsLoggedIn(true);
          console.log("Token is valid, user is logged in.");
        } catch (error) {
          console.error("Invalid token:", error);
          handleLogout();
        }
      }
    };
    checkAuth();
  }, []);

  const handleInitialBooking = async (e) => {
    e.stopPropagation();
    console.log("Booking class:", props.title);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to book a class.");
        console.log("No token found, user needs to log in.");
        return;
      }

      console.log("Sending request to:", "http://localhost:5000/api/bookclass");

      const response = await axios.post(
        "http://localhost:5000/api/membergymclass/bookclass",
        { className },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Booking response:", response);
      if (response.status === 200) {
        setIsBooked(true);
        setShowPopup(true);
        console.log("Booking successful.");
        setTimeout(() => setShowPopup(false), 3000);
      }
    } catch (error) {
      console.error("Full booking error:", {
        message: error.message,
        response: error.response?.data,
        request: error.request,
      });

      const errorMessage =
        error.response?.data?.details || error.response?.data?.error;
      console.log(errorMessage);
      console.log(errorMessage);
      console.log(errorMessage);

      alert(`Booking failed: ${errorMessage}`);
      console.log("Booking failed with error:", errorMessage);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    console.log("User logged out, token removed.");
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    console.log("Card clicked, expanded:", !isExpanded);
  };

  const cardClasses = `${classes.cardContainer} 
    ${props.classType ? classes[props.classType] : ""} 
    ${showPopup ? classes.transparent : ""} 
    ${isExpanded ? classes.expanded : ""} 
    ${isExpanded && props.backgroundImage ? classes.withBackground : ""}`;

  console.log("Card classes:", cardClasses);

  return (
    <div
      className={cardClasses}
      onClick={handleCardClick}
      style={
        isExpanded && props.backgroundImage
          ? {
              backgroundImage: `url(${props.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {showPopup && <div className={classes.popup}>Class Booked!</div>}
      {isBooked && <div className={classes.popup}>Already Booked!</div>}

      <div className={classes.cardHeader}>
        <h1 className={classes.cardTitle}>{props.title}</h1>
      </div>

      <div
        className={`${classes.cardContent} ${isExpanded ? classes.show : ""}`}
      >
        <div className={classes.scheduleInfo}>
          <div className={classes.detailItem}>
            <i className="far fa-clock"></i>
            <span>Schedule: {props.schedule}</span>
          </div>
          <div className={classes.detailItem}>
            <i className="far fa-hourglass"></i>
            <span>Duration: {props.duration}</span>
          </div>
          <div className={classes.detailItem}>
            <i className="fas fa-tag"></i>
            <span>Price: ${props.price}</span>
          </div>
        </div>
      </div>

      <div
        className={`${classes.buttonWrapper} ${isExpanded ? classes.show : ""}`}
      >
        <button
          className={`${classes.bookButton} ${isBooked ? classes.booked : ""}`}
          onClick={handleInitialBooking}
          disabled={isBooked || !isLoggedIn}
        >
          {!isLoggedIn ? "Login to Book" : isBooked ? "Booked" : "Book Class"}
        </button>
      </div>
    </div>
  );
}

export default ClassCard;
