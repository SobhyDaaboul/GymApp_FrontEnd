import { useState } from 'react';
import classes from '../../CSS/ClassCard.module.css'; 

function ClassCard(props){
    const [isBooked, setIsBooked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleBooking = (e) => {
        e.stopPropagation(); // Prevent card from collapsing when booking
        setIsBooked(true);
        setShowPopup(true);
        
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const handleCardClick = () => {
        setIsExpanded(!isExpanded);
    };

    const cardClasses = `${classes.cardContainer} ${classes[props.classType]} 
        ${showPopup ? classes.transparent : ''} 
        ${isExpanded ? classes.expanded : ''}
        ${isExpanded && props.backgroundImage ? classes.withBackground : ''}`;

    return (
        <div 
            className={cardClasses} 
            onClick={handleCardClick}
            style={isExpanded && props.backgroundImage ? {
                backgroundImage: `url(${props.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } : {}}
        >
            {showPopup && (
                <div className={classes.popup}>
                    Class Successfully Booked!
                </div>
            )}
            <div className={classes.cardHeader}>
                <h1 className={classes.cardTitle}>{props.title}</h1>
            </div>
            <div className={`${classes.cardContent} ${isExpanded ? classes.show : ''}`}>
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
            <div className={`${classes.buttonWrapper} ${isExpanded ? classes.show : ''}`}>
                <button 
                    className={`${classes.bookButton} ${isBooked ? classes.booked : ''}`} 
                    onClick={handleBooking}
                    disabled={isBooked}
                >
                    {isBooked ? 'Booked' : 'Book Class'}
                </button>
            </div>
        </div>
    );
}

export default ClassCard;