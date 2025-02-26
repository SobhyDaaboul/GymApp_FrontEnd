import { useState, useEffect } from "react";
import axios from "axios";
import classes from "../../CSS/PaymentForm.module.css";

function PaymentForm({ userData }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [ccv, setCcv] = useState("");
  const [membershipDetails, setMembershipDetails] = useState(null);
  const [showInvoice, setShowInvoice] = useState(false);

  useEffect(() => {
    const fetchMembershipDetails = async () => {
      try {
        if (!userData[0]) return;

        const queryParams = new URLSearchParams({
          userInfo: userData[0],
        }).toString();

        const response = await axios.get(
          `http://localhost:5000/api/membership/getMembershipInfo?${queryParams}`
        );

        if (response.data.membership.length > 0) {
          setMembershipDetails(response.data.membership[0]); // ✅ Fix: Access first object in array
        }
      } catch (error) {
        console.error("Error fetching membership details:", error);
      }
    };

    fetchMembershipDetails();
  }, [userData]);

  console.log("Membership Details:", membershipDetails);

  // ✅ Fix: Ensure expected payment date is set correctly
  const expectedPaymentDate =
    membershipDetails && membershipDetails.startDate
      ? new Date(
          new Date(membershipDetails.startDate).setDate(
            new Date(membershipDetails.startDate).getDate() + 3
          )
        ).toISOString()
      : null;

  // Handle payment method selection
  const handlePaymentMethodChange = (event) => {
    const method = event.target.value;
    setPaymentMethod(method);

    if (method === "cash") {
      setShowInvoice(true); // Show invoice immediately for cash payments
    } else {
      setShowInvoice(false); // Wait for credit payment confirmation
    }
  };

  // ✅ Fix: Ensure paymentData is logged correctly before submitting
  const handlePayment = async () => {
    if (!membershipDetails) {
      alert("Membership details are missing.");
      return;
    }

    const formatDateForMySQL = (date) => {
      return new Date(date).toISOString().slice(0, 19).replace("T", " ");
    };
    const paymentData = {
      membershipId: membershipDetails.idmembership,
      amount: membershipDetails.cost,
      effectiveDate: formatDateForMySQL(new Date()),
      expectedDate: expectedPaymentDate
        ? formatDateForMySQL(expectedPaymentDate)
        : null,
      paymentMethodCode: paymentMethod === "cash" ? "CH" : "CC",
    };

    console.log("Payment Data before sending:", paymentData);

    try {
      await axios.post("http://localhost:5000/api/payment/create", paymentData);
      console.log("Payment successfully sent to DB:", paymentData);
      alert("Payment recorded successfully!");
    } catch (error) {
      console.error("Error submitting payment:", error.response?.data || error);
      alert("Failed to process payment. Please try again.");
    }
  };

  // Handle payment submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!paymentMethod) return alert("Please select a payment method");

    if (paymentMethod === "credit" && (!creditCardNumber || !ccv)) {
      return alert("Please enter credit card details.");
    }

    handlePayment();

    if (paymentMethod === "credit") {
      setShowInvoice(true);
    }
  };

  // Render payment input fields
  const renderPaymentDetails = () => {
    if (!membershipDetails) {
      return <p>Loading membership details...</p>;
    }

    if (paymentMethod === "cash") {
      return <div className={classes.paymentDetails}>{renderInvoice()}</div>;
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
            <input
              type="text"
              placeholder="CCV"
              maxLength="3"
              value={ccv}
              onChange={(e) => setCcv(e.target.value)}
            />
          </div>
          <div className={classes.actions}>
            <button type="submit">Confirm Payment</button>
          </div>
        </div>
      );
    }
    return null;
  };

  // Render invoice
  // Render invoice
  const renderInvoice = () => {
    if (!showInvoice || !membershipDetails) return null;
    console.log("Membership Details in Invoice:", membershipDetails);

    return (
      <div className={classes.paymentDetails}>
        <h3>Invoice</h3>
        <div className={classes.details}>
          <div className={classes.detailItem}>
            <span>User ID:</span>
            <span>{userData[0]}</span>
          </div>
          <div className={classes.detailItem}>
            <span>Username:</span>
            <span>{userData[1]}</span>
          </div>
          <div className={classes.detailItem}>
            <span>Membership Type:</span>
            <span>{membershipDetails.membershipType || "N/A"}</span>
          </div>
          <div className={classes.detailItem}>
            <span>Total Cost:</span>
            <span>${membershipDetails.cost}</span>
          </div>
          <div className={classes.detailItem}>
            <span>Payment Method:</span>
            <span>{paymentMethod === "cash" ? "Cash" : "Credit Card"}</span>
          </div>

          {/* ✅ Show credit card number if payment is credit */}
          {paymentMethod === "credit" && (
            <div className={classes.detailItem}>
              <span>Credit Card Number:</span>
              <span>**** **** **** {creditCardNumber.slice(-4)}</span>
            </div>
          )}

          {paymentMethod === "cash" && (
            <div className={classes.detailItem}>
              <span>Expected Payment Date:</span>
              <span>
                {expectedPaymentDate
                  ? new Date(expectedPaymentDate).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>
          )}
        </div>
        {paymentMethod === "cash" && (
          <button
            className={classes.okButton}
            onClick={() => (window.location.href = "/")}
          >
            OK
          </button>
        )}
      </div>
    );
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
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="cash">Cash</label>
          </div>
          <div className={classes.radioOption}>
            <input
              type="radio"
              name="paymentMethod"
              value="credit"
              id="credit"
              onChange={handlePaymentMethodChange}
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
