import { useState } from 'react';
import classes from '../../CSS/PtCard.module.css';

function PtCard(props) {
    const [isBooked, setIsBooked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showTimeSelection, setShowTimeSelection] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');

    const generateTimeSlots = () => {
        const [startTime, endTime] = props.schedule.split(' to ');
        const slots = [];
        let currentTime = new Date(`2024/01/01 ${startTime}`);
        const end = new Date(`2024/01/01 ${endTime}`);

        while (currentTime < end) {
            const timeString = currentTime.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
            const nextHour = new Date(currentTime.getTime() + 60 * 60 * 1000);
            const nextTimeString = nextHour.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
            
            slots.push(`${timeString} - ${nextTimeString}`);
            currentTime = nextHour;
        }
        return slots;
    };

    const handleBooking = (e) => {
        e.stopPropagation();
        if (!showTimeSelection) {
            setShowTimeSelection(true);
        } else if (selectedTime) {
            setIsBooked(true);
            setShowPopup(true);
            setShowTimeSelection(false);
            
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        }
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
                    Session Successfully Booked for {selectedTime}!
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
                {showTimeSelection && !isBooked && (
                    <div className={classes.timeSelection} onClick={(e) => e.stopPropagation()}>
                        <select 
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className={classes.timeSelect}
                        >
                            <option value="">Select a time slot</option>
                            {generateTimeSlots().map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <button 
                    className={`${classes.bookButton} ${isBooked ? classes.booked : ''}`} 
                    onClick={handleBooking}
                    disabled={isBooked || (showTimeSelection && !selectedTime)}
                >
                    {isBooked ? 'Booked' : showTimeSelection ? 'Confirm Booking' : 'Book Session'}
                </button>
            </div>
        </div>
    );
}

export default PtCard;
