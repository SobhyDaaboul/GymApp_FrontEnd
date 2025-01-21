import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo.png";
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
        <ul>
          <li>
            <Link to="/create-membership">Create Membership</Link>
          </li>
          <li>
            <Link to="/Classes">Classes</Link>
          </li>
          <li>
            <Link to="/MyWorkout">MyWorkout</Link>
          </li>
          <li>
            <Link to="/PtSessions">PtSessions</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
