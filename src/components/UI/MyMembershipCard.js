import classes from "../../CSS/MyMembershipCard.module.css";
import { useState } from "react";

function MyMembershipCard() {
  // Dummy data - replace with actual database fetch later
  const dummyUserData = {
    userId: "USR123",
    username: "JohnDoe",
    membershipEndDate: "December 31, 2024",
    isActive: true,
  };

  const [userData, setUserData] = useState(dummyUserData);

  return (
    <div className={classes.card}>
      <h1 className={classes.title}>My Membership</h1>
      <div className={classes.userInfo}>
        <p>User ID: {userData.userId}</p>
        <p>Username: {userData.username}</p>
      </div>
      {userData.isActive ? (
        <p className={classes.status}>
          Membership <span className={classes.active}>active</span> till -{" "}
          {userData.membershipEndDate}
        </p>
      ) : (
        <p className={classes.status}>No Active Membership</p>
      )}
      <button className={classes.cancelMembershipbutton}>
        Cancel Membership
      </button>
    </div>
  );
}

export default MyMembershipCard;
