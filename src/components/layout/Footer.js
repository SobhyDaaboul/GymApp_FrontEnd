import classes from '../../CSS/Footer.module.css';
import Footerimage from '../../assets/images/Footerimage.png';

function Footer() {
    return (
            <div className={classes.footer}>
                <img src={Footerimage} alt="Gym Footer" className={classes.image}/>
            </div>
    )
}

export default Footer;