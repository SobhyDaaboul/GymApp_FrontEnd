import classes from '../../CSS/Footer.module.css';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';

function Footer() {
    return (
            <div className={classes.footer}>
                <div className={classes.info}>
                    <ul className={classes.infoList}>
                        <li>
                            <img src={location} alt="location"/>
                            <p>Beirut, Lebanon</p>
                        </li>
                        <li>
                            <img src={phone} alt="phone"/>
                            <p>71 629655</p>
                        </li>
                        <li>
                            <img src={email} alt="email"/>
                            <p>bodybuildingfitnesscenter@react.com</p>
                        </li>
                    </ul>
                </div>
                <div className={classes.animatedLine}></div>
                <div className={classes.quote}>
                    <p>"The only bad workout is the one that didn't happen."</p>
                </div>
            </div>
    )
}

export default Footer;