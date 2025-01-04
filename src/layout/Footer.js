import classes from './Footer.module.css';
import Footerimage from "../assets/images/Footerimage.jpg";

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.quotes}>
                <p>"Life Doesn't Become Easier, You Become Stronger.”</p>
                <p>"Dedication Has No Limitation."</p>
                <p>Beirut, Lebanon</p>
                <p>EST.2025</p>
            </div>
            <div className={classes.logo}>
                <img src={Footerimage} alt='Gym Logo'/>
            </div>
        </footer>
    )
}

export default Footer;