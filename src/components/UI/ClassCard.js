import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "../../CSS/ClassCard.module.css";

function ClassCard(props) {
  const [isBooked, setIsBooked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDaySelection, setShowDaySelection] = useState(false);
  const [memberId, setMemberId] = useState(null);
  const [classCode, setClassCode] = useState(null);

  // Available days for class
  const availableDays = [
    "Monday - 9:00 AM",
    "Wednesday - 2:00 PM",
    "Friday - 5:00 PM",
    "Saturday - 10:00 AM",
  ];

  // Fetch memberId and classCode from the backend
  useEffect(() => {
    // Fetch memberId from the backend
    axios
      .get("http://localhost:5000/api/get-member-id") // Change this to your actual API endpoint
      .then((response) => {
        setMemberId(response.data.memberId); // Assuming the response contains the memberId
      })
      .catch((error) => {
        console.error("Error fetching memberId:", error);
      });

    // Fetch classCode using the classTitle passed as a prop
    axios
      .get(`http://localhost:5000/api/get-class-code/${props.classTitle}`) // Pass classTitle here
      .then((response) => {
        setClassCode(response.data.classCode); // Set classCode from the response
      })
      .catch((error) => {
        console.error("Error fetching classCode:", error);
      });
  }, [props.classTitle]); // Dependency on classTitle

  const handleInitialBooking = (e) => {
    e.stopPropagation();
    setShowDaySelection(true);
  };

  const handleDaySelection = (e, selectedDay) => {
    e.stopPropagation();
    setIsBooked(true);
    setShowDaySelection(false);
    setShowPopup(true);

    // Step 4: Call saveBookingInfo API
    if (memberId && classCode) {
      SaveBookingInfo(memberId, classCode, selectedDay);
    }

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Save booking info to backend
  const SaveBookingInfo = (memberId, classCode, selectedDay) => {
    useEffect(() => {
      if (memberId && classCode && selectedDay) {
        // Save booking info to backend
        axios
          .post("http://localhost:5000/api/save-booking", {
            memberId: memberId,
            classCode: classCode,
            selectedDay: selectedDay,
          })
          .then((response) => {
            console.log("Booking saved successfully:", response);
          })
          .catch((error) => {
            console.error("Error saving booking:", error);
          });
      }
    }, [memberId, classCode, selectedDay]);
  };

  const cardClasses = `${classes.cardContainer} ${classes[props.classType]} 
        ${showPopup ? classes.transparent : ""} 
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
      {showPopup && (
        <div className={classes.popup}>Class Successfully Booked!</div>
      )}
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
        {!showDaySelection ? (
          <button
            className={`${classes.bookButton} ${
              isBooked ? classes.booked : ""
            }`}
            onClick={handleInitialBooking}
            disabled={isBooked}
          >
            {isBooked ? "Booked" : "Book Class"}
          </button>
        ) : (
          <div className={classes.daySelectionContainer}>
            {availableDays.map((day, index) => (
              <button
                key={index}
                className={classes.bookButton}
                onClick={(e) => handleDaySelection(e, day)}
              >
                {day}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassCard;
