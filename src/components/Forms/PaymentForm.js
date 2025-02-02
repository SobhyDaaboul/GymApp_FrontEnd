import { useState } from "react";
import classes from "../../CSS/PaymentForm.module.css";

function PaymentForm({ userData }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showCreditInvoice, setShowCreditInvoice] = useState(false);
  const [creditCardNumber, setCreditCardNumber] = useState("");

  // Mock data (replace with actual data from your database)
  const membershipDetails = {
    userId: "USR123",
    startDate: new Date().toLocaleDateString(),
    endDate:
      userData.membershipType === "Monthly"
        ? new Date(
            new Date().setMonth(new Date().getMonth() + 1)
          ).toLocaleDateString()
        : new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ).toLocaleDateString(),
    totalCost: userData.membershipType === "Monthly" ? "$29.99" : "$251.99", // 30% off yearly
  };

  const expectedPaymentDate = new Date(
    new Date().setDate(new Date().getDate() + 3)
  ).toLocaleDateString();

  const handleClose = () => {
    // Navigate to homepage
    window.location.href = "/";
  };

  const handleCreditPayment = (event) => {
    event.preventDefault();
    // Show invoice instead of direct navigation
    setShowCreditInvoice(true);
  };

  const renderPaymentDetails = () => {
    if (paymentMethod === "cash") {
      return (
        <div className={classes.paymentDetails}>
          <div className={classes.expectedDate}>
            Expected Payment Date: {expectedPaymentDate}
          </div>
          <div className={classes.details}>
            <div className={classes.detailItem}>
              <span>User ID:</span>
              <span>{membershipDetails.userId}</span>
            </div>
            <div className={classes.detailItem}>
              <span>Username:</span>
              <span>{userData.username}</span>
            </div>
            <div className={classes.detailItem}>
              <span>Membership Type:</span>
              <span>{userData.membershipType}</span>
            </div>
            <div className={classes.detailItem}>
              <span>Total Cost:</span>
              <span>{membershipDetails.totalCost}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      );
    } else if (paymentMethod === "credit") {
      if (showCreditInvoice) {
        return (
          <div className={classes.paymentDetails}>
            <div className={classes.details}>
              <div className={classes.detailItem}>
                <span>User ID:</span>
                <span>{membershipDetails.userId}</span>
              </div>
              <div className={classes.detailItem}>
                <span>Username:</span>
                <span>{userData.username}</span>
              </div>
              <div className={classes.detailItem}>
                <span>Membership Type:</span>
                <span>{userData.membershipType}</span>
              </div>
              <div className={classes.detailItem}>
                <span>Total Cost:</span>
                <span>{membershipDetails.totalCost}</span>
              </div>
              <div className={classes.detailItem}>
                <span>Payment Method:</span>
                <span>Credit Card (**** {creditCardNumber.slice(-4)})</span>
              </div>
            </div>
            <div className={classes.actions}>
              <button type="button" onClick={handleClose}>
                Go Back to Home Page
              </button>
            </div>
          </div>
        );
      }
      return (
        <div className={classes.paymentDetails}>
          <div className={classes.creditInputs}>
            <input
              type="text"
              placeholder="Credit Card Number"
              maxLength="16"
              value={creditCardNumber}
              onChange={(e) => setCreditCardNumber(e.target.value)}
            />
            <input type="text" placeholder="CCV" maxLength="3" />
          </div>
          <div className={classes.actions}>
            <button type="button" onClick={handleCreditPayment}>
              Pay
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    // Handle payment processing based on selected method
    if (paymentMethod === "cash") {
      // Process cash payment
      console.log("Processing cash payment...");
      // Add cash payment logic here
    } else if (paymentMethod === "credit") {
      // Process credit card payment
      console.log("Processing credit card payment...");
      // Add credit card payment logic here
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.header}>Payment</h1>

        <div className={`${classes.control} ${classes.radioGroup}`}>
          <div className={classes.radioOption}>
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              id="cash"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="cash">Cash</label>
          </div>
          <div className={classes.radioOption}>
            <input
              type="radio"
              name="paymentMethod"
              value="credit"
              id="credit"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="credit">Credit</label>
          </div>
        </div>

        {renderPaymentDetails()}
      </form>
    </div>
  );
}

export default PaymentForm;
