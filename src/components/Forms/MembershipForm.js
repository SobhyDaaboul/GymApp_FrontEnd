import classes from "../../CSS/MembershipForm.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import PaymentForm from "./PaymentForm";

function MembershipForm() {
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    membershipType: "",
    memberId: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setFormData((prevData) => ({
          ...prevData,
          username: decoded.name,
          email: decoded.email,
          memberId: decoded.id,
        }));
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.membershipType) {
      alert("Please select a membership type.");
      return;
    }

    const startDate = new Date().toISOString().split("T")[0];
    const endDate = new Date();
    const cost = formData.membershipType === "Monthly" ? 30 : 260;

    if (formData.membershipType === "Monthly") {
      endDate.setMonth(endDate.getMonth() + 1);
    } else {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    const membershipData = {
      memberId: formData.memberId,
      membershipType: formData.membershipType,
      startDate,
      endDate: endDate.toISOString().split("T")[0],
      cost,
      status: "active",
    };

    console.log(membershipData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/membership/create",
        membershipData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setShowPayment(true);
      }
    } catch (error) {
      console.error(
        "Error creating membership:",
        error.response?.data || error
      );
      alert("Failed to create membership.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (showPayment) return <PaymentForm userData={formData} />;

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.header}>Membership</h1>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={formData.username} readOnly />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} readOnly />
        </div>
        <div className={`${classes.control} ${classes.radioGroup}`}>
          <div className={classes.radioOption}>
            <input
              type="radio"
              name="membershipType"
              value="Monthly"
              id="monthly"
              onChange={handleInputChange}
            />
            <label htmlFor="monthly">Monthly</label>
          </div>
          <div className={classes.radioOption}>
            <input
              type="radio"
              name="membershipType"
              value="Yearly"
              id="yearly"
              onChange={handleInputChange}
            />
            <label htmlFor="yearly">Yearly (Get a 30% Discount!)</label>
          </div>
        </div>
        <div className={classes.actions}>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default MembershipForm;
