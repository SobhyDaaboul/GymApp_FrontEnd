import classes from "../../CSS/LoginForm.module.css";
import Logo from "../../assets/icons/Logo.png";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className={classes.mainclass}>
      <div className={classes.card}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <form>
          <div className={classes.formgroup}>
            <label htmlFor="EmailAddress">Email Address</label>
            <input
              type="text"
              id="emailaddress"
              name="EmailAddress"
              placeholder="Enter your email address"
            />
          </div>
          <div className={classes.formgroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <Link to="/home-page">
            <button type="submit" className={classes.loginbutton}>
              Login
            </button>
          </Link>
        </form>
        <Link to="/SignUp">
          <button className={classes.createaccountbutton}>
            Create New Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
