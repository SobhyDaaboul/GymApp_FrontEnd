import classes from './Footer.module.css';
import Footerimage from "../assets/images/Footerimage.jpg";

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerimage}>
                <img src={Footerimage} alt="Gym Footer"/>
            </div>
        </footer>
    )
}

export default Footer;