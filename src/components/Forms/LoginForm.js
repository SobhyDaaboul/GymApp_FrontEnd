import axios from "axios";
import { useState } from "react";

import classes from "../../CSS/LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(emailValue));
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail || !password)
      return setErrorMessage("Please enter a valid email and password.");

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

        navigate("/");
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Invalid email or password."
      );
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes["form-box"]}>
          <h2 className={classes.animation} style={{ "--i": 0, "--j": 21 }}>
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div
              className={`${classes["input-box"]} ${classes.animation}`}
              style={{ "--i": 1, "--j": 22 }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                style={{ borderColor: !isValidEmail && email ? "red" : "" }}
              />
              {!isValidEmail && email && (
                <small style={{ color: "red" }}>
                  Email must be valid (e.g., user@example.com)
                </small>
              )}
              <label>Email</label>
            </div>
            <div
              className={classes["input-box"]}
              style={{ position: "relative" }}
            >
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <label>Password</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  background: "transparent",
                  border: "none",
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button type="submit" className={classes.btn}>
              Login
            </button>
            <div className={classes["login-register"]}>
              <p>
                Don't have an account?
                <Link to="/SignUp" className={classes["register-link"]}>
                  Register
                </Link>
              </p>
            </div>
          </form>

          {errorMessage && (
            <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
