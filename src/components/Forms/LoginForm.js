import classes from "../../CSS/LoginForm.module.css";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes["form-box"]}>
          <h2 className={classes.animation} style={{ "--i": 0, "--j": 21 }}>
            Login
          </h2>
          <form action="">
            <div
              className={`${classes["input-box"]} ${classes.animation}`}
              style={{ "--i": 1, "--j": 22 }}
            >
              <span className={classes.icon}>
                <IonIcon name="mail"></IonIcon>
              </span>
              <input type="email" />
              <label>Email</label>
            </div>
            <div className={classes["input-box"]}>
              <span className={classes.icon}>
                <IonIcon name="lock-closed"></IonIcon>
              </span>
              <input type="password" />
              <label>Password</label>
            </div>
            <Link to="/home-page">
              <button type="submit" className={classes.btn}>
                Login
              </button>
            </Link>
            <div className={classes["login-register"]}>
              <p>
                Don't have an account?
                <Link to="/SignUp" className={classes["register-link"]}>
                Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
