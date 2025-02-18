import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Use to extract params from the URL
import axios from "axios";
import classes from "../../CSS/ClassCard.module.css";

function ClassCard(props) {
  const [isBooked, setIsBooked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [class_code, setClassCode] = useState(null);

  const { member_id } = useParams(); // Keep for member_id if needed
  const { class_name } = props; // class_name comes from props

  useEffect(() => {
    const fetchClassCode = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/get-class-code/${class_name}`
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

  const handleInitialBooking = (e, class_code, member_id) => {
    e.stopPropagation();
    if (!class_code || !member_id) {
      console.warn("Missing class_code or member_id.");
      return;
    }

    axios
      .post("http://localhost:5000/api/book-class", {
        memberId: member_id,
        class_code: class_code,
      })
      .then((response) => {
        console.log(response);
        setIsBooked(true);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch((error) => {
        console.error("Error saving booking:", error);
      });
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
          onClick={(e) => handleInitialBooking(e, class_code, member_id)}
          disabled={isBooked}
        >
          {isBooked ? "Booked" : "Book Class"}
        </button>
      </div>
    </div>
  );
}

export default ClassCard;
