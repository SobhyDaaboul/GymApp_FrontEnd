import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "../../CSS/ClassCard.module.css";

function ClassCard(props) {
  const [isBooked, setIsBooked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [classCode, setClassCode] = useState(null);
  const { member_id } = useParams(); // Ensure member_id is coming from URL
  const { class_name } = props;

  useEffect(() => {
    const fetchClassCode = async () => {
      try {
        const response = await axios.get(
          `/api/class/get-class-code/${encodeURIComponent(class_name)}`
        );
        setClassCode(response.data.class_code);
      } catch (error) {
        console.error("Error fetching class code:", error);
        setClassCode(null);
      }
    };

    if (class_name) {
      fetchClassCode();
    }
  }, [class_name]);

  const handleInitialBooking = async (e) => {
    e.stopPropagation();

    if (!classCode || !member_id) {
      console.warn("Missing required booking information", {
        member_id,
        classCode,
      });
      alert("Error: Missing required booking information");
      return;
    }

    try {
      const response = await axios.post(
        `/api/member-gymclass/${member_id}/book-class`,
        {
          classCode,
        }
      );

      if (response.status === 200) {
        setIsBooked(true);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }
    } catch (error) {
      console.error(
        "Booking failed:",
        error.response?.data?.error || error.message
      );
      alert(
        "Booking failed: " + (error.response?.data?.error || "Unknown error")
      );
    }
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const cardClasses = `${classes.cardContainer} 
    ${props.classType ? classes[props.classType] : ""} 
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

      {isBooked && (
        <div className={classes.popup}>You have already booked this class!</div>
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
        <button
          className={`${classes.bookButton} ${isBooked ? classes.booked : ""}`}
          onClick={handleInitialBooking}
          disabled={isBooked || !classCode} // Disable button if classCode is missing
        >
          {isBooked ? "Booked" : "Book Class"}
        </button>
      </div>
    </div>
  );
}

export default ClassCard;
