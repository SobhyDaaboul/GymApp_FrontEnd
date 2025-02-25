import { useState, useEffect } from "react";
import axios from "axios";
import classes from "../../CSS/PaymentForm.module.css";

function PaymentForm({ userId }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [membershipDetails, setMembershipDetails] = useState(null);
  const [showInvoice, setShowInvoice] = useState(false);

  // Fetch membership details when component mounts
  useEffect(() => {
    const fetchMembershipDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/membership`
        );
        setMembershipDetails(response.data);
      } catch (error) {
        console.error("Error fetching membership details:", error);
      }
    };

    fetchMembershipDetails();
  }, [userId]);

  // Calculate expected payment date (3 days after membership start date)
  const expectedPaymentDate = membershipDetails
    ? new Date(
        new Date(membershipDetails.startDate).setDate(
          new Date(membershipDetails.startDate).getDate() + 3
        )
      ).toISOString()
    : null;

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!paymentMethod) return alert("Please select a payment method");

    const paymentData = {
      membershipId: membershipDetails.id,
      amount: membershipDetails.totalCost,
      effectiveDate: new Date().toISOString(),
      expectedDate: expectedPaymentDate,
      paymentMethodCode: paymentMethod === "cash" ? "CH" : "CC",
    };

    try {
      await axios.post("http://localhost:5000/api/create", paymentData);
      alert("Payment recorded successfully!");
      setShowInvoice(true); // Show the invoice after payment submission
    } catch (error) {
      console.error("Error submitting payment:", error.response?.data || error);
      alert("Failed to process payment. Please try again.");
    }
  };

  const renderPaymentDetails = () => {
    if (!membershipDetails) {
      return <p>Loading membership details...</p>;
    }

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
              <span>{membershipDetails.username}</span>
            </div>
            <div className={classes.detailItem}>
              <span>Membership Type:</span>
              <span>{membershipDetails.membershipType}</span>
            </div>
            <div className={classes.detailItem}>
              <span>Total Cost:</span>
              <span>{membershipDetails.totalCost}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button type="submit">Confirm Payment</button>
          </div>
        </div>
      );
    } else if (paymentMethod === "credit") {
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
            <button type="submit">Pay</button>
          </div>
        </div>
      );
    }
    return null;
  };

  // Render the invoice
  const renderInvoice = () => {
    if (showInvoice) {
      return (
        <div className={classes.paymentDetails}>
          <h3>Invoice</h3>
          <div className={classes.details}>
            <div className={classes.detailItem}>
              <span>User ID:</span>
              <span>{membershipDetails.userId}</span>
            </div>
            <div className={classes.detailItem}>
              <span>Username:</span>
              <span>{membershipDetails.username}</span>
            </div>
            <div className={classes.detailItem}>
              <span>Membership Type:</span>
              <span>{membershipDetails.membershipType}</span>
            </div>
            <div className={classes.detailItem}>
              <span>Total Cost:</span>
              <span>{membershipDetails.totalCost}</span>
            </div>
            <div className={classes.detailItem}>
              <span>Payment Method:</span>
              <span>{paymentMethod === "cash" ? "Cash" : "Credit Card"}</span>
            </div>
            <div className={classes.detailItem}>
              <span>Payment Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
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
      {renderInvoice()} {/* Display invoice once payment is done */}
    </div>
  );
}

export default PaymentForm;
