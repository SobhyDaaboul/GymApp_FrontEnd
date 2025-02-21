import classes from "../../CSS/LoginForm.module.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name must contain only letters and spaces";
      valid = false;
    }

    if (!/^\d{8,15}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number (8-15 digits)";
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[A-Za-z]/.test(password) ||
      !/[@$!%*#?&]/.test(password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters, include a number, a letter, and a special character";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  useEffect(() => {
    if (isLoading) {
      // You can perform a side effect or log some info here when loading is true.
      console.log("Submitting form...");
    }
  }, [isLoading]); // Effect will run when isLoading state changes.

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Send plain password to the backend. The backend will hash it.
      await axios.post("http://localhost:5000/api/signup", {
        name,
        phoneNumber,
        email,
        password, // Send plain password
      });

      alert("Signup successful! You can now log in.");
      navigate("/Login");
    } catch (error) {
      setErrors({
        apiError:
          error.response?.data?.message || "Signup failed. Please try again.",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes["form-box"]}>
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className={classes["input-box"]}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div className={classes["input-box"]}>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label>Phone Number</label>
              {errors.phoneNumber && (
                <p style={{ color: "red" }}>{errors.phoneNumber}</p>
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
            <button type="submit" className={classes.btn} disabled={isLoading}>
              {isLoading ? "Registering..." : "Register"}
            </button>
            <div className={classes["login-register"]}>
              <p>
                Already have an account?
                <Link to="/Login" className={classes["login-link"]}>
                  Login
                </Link>
              </p>
            </div>
            {errors.apiError && (
              <p style={{ color: "red", textAlign: "center" }}>
                {errors.apiError}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
