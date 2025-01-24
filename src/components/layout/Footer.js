import classes from '../../CSS/Footer.module.css';
import location from '../../assets/icons/location.png';

function Footer() {
    return (
            <div className={classes.footer}>
                <div className={classes.info}>
                    <ul>
                        <li>
                        <img src={location} alt="location"/>
                        <p>Beirut, Lebanon</p>
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
                <div className={classes.quote}>

                </div>
            </div>
    )
}

export default Footer;