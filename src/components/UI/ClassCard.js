import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import classes from "../../CSS/ClassCard.module.css";

function ClassCard(props) {
  const [isBooked, setIsBooked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const classCode = props.classCode;

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          jwtDecode(token);
          setIsLoggedIn(true);
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

    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("Please log in to book a class.");

      console.log("Class Code:", classCode);

      const response = await axios.post(
        "http://localhost:5000/api/membergymclass/bookclass",
        { classCode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // If booking is successful (201) or already booked (400),
      // mark the class as booked.
      if (response.status === 201 || response.status === 400) {
        setIsBooked(true);
        if (response.status === 400) {
          alert("You have already booked this class.");
        }
      }
    } catch (error) {
      console.error("Booking failed:", error.response?.data || error.message);
      alert(`Booking failed:Already Booked`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const cardClasses = `${classes.cardContainer} 
    ${props.classType ? classes[props.classType] : ""} 
    ${isExpanded ? classes.expanded : ""} 
    ${isExpanded && props.backgroundImage ? classes.withBackground : ""}`;

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
      {/* Always display the "Already Booked!" message if isBooked is true */}
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
          onClick={(e) => {
            if (!isLoggedIn) {
              alert("Please log in to book a class.");
            } else {
              handleInitialBooking(e);
            }
          }}
          disabled={isBooked}
        >
          {isBooked ? "Booked" : "Book Class"}
        </button>
      </div>
    </div>
  );
}

export default ClassCard;
