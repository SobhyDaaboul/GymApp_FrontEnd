import { Link } from 'react-router-dom';
import classes from '../../CSS/NavigationBar.module.css';
import Logo from "../../assets/icons/Logosmall.png";

function NavigationBar(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={Logo} alt='Gym Logo'/>
            </div>
            <nav>
                <ul className={classes.navList}>
                    <li className={classes.navItem}>
                        <Link to='/Create-Membership'>
                        <span className={classes.navLink}>Create Membership</span>
                        </Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link className={classes.navLink} to='/Classes'>Classes</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link className={classes.navLink} to='/MyWorkout'>MyWorkout</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link className={classes.navLink} to='/PtSessions'>PtSessions</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavigationBar;