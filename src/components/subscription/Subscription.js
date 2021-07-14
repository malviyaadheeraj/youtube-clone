import React from "react";
import "./Subscription.scss";

const Subscription = ({ subscriber }) => {
  return (
    <li className="subscription">
      <img
        src={subscriber.profilePicture}
        alt=""
        className="subscriptionProfile"
      />
      <span className="subscriptionTitle">{subscriber.username}</span>
    </li>
  );
};

export default Subscription;
