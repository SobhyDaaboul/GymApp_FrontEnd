import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logosmall.png";
import classes from "../../CSS/NavigationBar.module.css";

function NavigationBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/home-page">
          <img src={Logo} alt="Gym Logo" />
        </Link>
      </div>
      <nav>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link className={classes.navLink} to="/create-membership">
              Create Membership
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link className={classes.navLink} to="/Classes">
              Classes
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link className={classes.navLink} to="/MyWorkout">
              MyWorkout
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link className={classes.navLink} to="/PtSessions">
              PtSessions
            </Link>
          </li>
        </ul>
        <button className={classes.NavSignUp}>SignUp</button>
      </nav>
    </header>
  );
}

export default NavigationBar;

/* hi */
