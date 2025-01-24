import classes from "../../CSS/NavigationBar.module.css";
import Logo from "../../assets/icons/Logosmall.png";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className={classes.navbar}>
      <Link className={classes.logo} to="/home-page">
        <img src={Logo} alt="Gym Logo" />
      </Link>
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
      <Link to="/SignUp">
        <button className={classes.NavSignUpbtn}>SignUp</button>
      </Link>
    </nav>
  );
}

export default NavigationBar;
