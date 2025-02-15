import classes from "../../CSS/LoginForm.module.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState(null);
  const [signupResponse, setSignupResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", phoneNumber: "", email: "", password: "" };

    if (name.length === 0 || name.includes(" ")) {
      newErrors.name = "Please enter a valid name";
      valid = false;
    }

    if (!/^[0-9]{8}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
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
      newErrors.password = "Password must contain special character";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = { name, phoneNumber, email, password };
      setSignupData(data);
    }
  };

  useEffect(() => {
    if (signupData) {
      setIsLoading(true);
      axios
        .post("http://localhost:5000/api/signup", signupData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setSignupResponse(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            apiError:
              error.response?.data?.message || "Signup failed. Try again.",
          }));
          setIsLoading(false);
        });
    }
  }, [signupData]);

  useEffect(() => {
    if (signupResponse) {
      navigate("/"); // Redirect to home page after successful signup
    }
  }, [signupResponse, navigate]);

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
            {signupResponse && (
              <p style={{ color: "green", textAlign: "center" }}>
                Registration successful! Please log in.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
