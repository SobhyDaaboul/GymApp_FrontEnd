import { useState } from 'react';
import classes from '../../CSS/PtCard.module.css';

function PtCard(props) {
    const [isBooked, setIsBooked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleBooking = (e) => {
        e.stopPropagation();
        setIsBooked(true);
        setShowPopup(true);
        
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const handleCardClick = () => {
        setIsExpanded(!isExpanded);
    };

    const cardClasses = `${classes.cardContainer} 
        ${showPopup ? classes.transparent : ''} 
        ${isExpanded ? classes.expanded : ''}`;

    return (
        <div className={cardClasses} onClick={handleCardClick}>
            {showPopup && (
                <div className={classes.popup}>
                    Session Successfully Booked!
                </div>
            )}
            <div className={classes.cardHeader}>
                <h1 className={classes.cardTitle}>{props.name}</h1>
            </div>
            <div className={`${classes.cardContent} ${isExpanded ? classes.show : ''}`}>
                <div className={classes.imageContainer}>
                    <img 
                        src={props.image} 
                        alt={props.name} 
                        className={classes.profileImage}
                    />
                </div>
                <div className={classes.scheduleInfo}>
                    <div className={classes.detailItem}>
                        <i className="fas fa-phone"></i>
                        <span>Phone: {props.phone}</span>
                    </div>
                    <div className={classes.detailItem}>
                        <i className="far fa-clock"></i>
                        <span>Schedule: {props.schedule}</span>
                    </div>
                    <div className={classes.detailItem}>
                        <i className="fas fa-tag"></i>
                        <span>Rate: ${props.rate}/hour</span>
                    </div>
                    <div className={classes.description}>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
            <div className={`${classes.buttonWrapper} ${isExpanded ? classes.show : ''}`}>
                <button 
                    className={`${classes.bookButton} ${isBooked ? classes.booked : ''}`} 
                    onClick={handleBooking}
                    disabled={isBooked}
                >
                    {isBooked ? 'Booked' : 'Book Session'}
                </button>
            </div>
        </div>
    );
}

export default PtCard;
