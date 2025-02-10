import classes from "../../CSS/LoginForm.module.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [loginData, setLoginData] = useState(null);
  const [loginResponse, setLoginResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Use navigate hook to programmatically navigate

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValidEmail(emailValue.includes("@") && emailValue.includes("."));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && password) {
      setLoginData({ email, password });
    } else {
      setErrorMessage("Please enter a valid email and password.");
    }
  };

  useEffect(() => {
    if (loginData) {
      axios
        .post("http://localhost:5000/api/login", loginData)
        .then((response) => {
          setLoginResponse(response.data);
          const { token } = response.data;

          if (token) {
            // Store the token in localStorage or sessionStorage based on preference
            localStorage.setItem("token", token);

            // Navigate to the Home page after successful login
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Login Error:", error);
          setErrorMessage(
            error.response?.data?.message || "Invalid email or password"
          );
        });
    }
  }, [loginData, navigate]);

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
                  Email must contain @ and .
                </small>
              )}
              <label>Email</label>
            </div>
            <div className={classes["input-box"]}>
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
                style={{ background: "transparent", border: "none" }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button
              type="submit"
              className={classes.btn}
              disabled={!isValidEmail || !password}
            >
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

          {/* Display error message if login fails */}
          {errorMessage && (
            <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
