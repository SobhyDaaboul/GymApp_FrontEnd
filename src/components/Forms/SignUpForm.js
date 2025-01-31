import classes from "../../CSS/SignUpForm.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", email: "", password: "" };

    if (username.length === 0 || username.includes(" ")) {
      newErrors.username = "Please enter a valid username";
      valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[A-Za-z]/.test(password) ||
      !/[@$!%*#?&]/.test(password)
    ) {
      newErrors.password = "Please enter a valid password";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ UserName: username, Email: email, Password: password });
      // Proceed with form submission or further processing
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes["form-box"] + " " + classes.register}>
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className={classes["input-box"]}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
              {errors.username && (
                <p style={{ color: "red" }}>{errors.username}</p>
              )}
            </div>
            <div className={classes["input-box"]}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className={classes["input-box"]}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
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
