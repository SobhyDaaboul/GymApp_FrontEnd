import classes from "../../CSS/SignUpForm.module.css";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";

function SignUpForm() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes["form-box"] + " " + classes.register}>
          <h2>Registration</h2>
          <form action="#">
            <div className={classes["input-box"]}>
              <span className={classes.icon}>
                <IonIcon name="person"></IonIcon>
              </span>
              <input type="text" />
              <label>Username</label>
            </div>
            <div className={classes["input-box"]}>
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
                Register
              </button>
            </Link>
            <div className={classes["login-register"]}>
              <p>
                Already have an account?{" "}
                <Link to="/" className={classes["login-link"]}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
