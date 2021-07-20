import React from "react";
import "./Subs.scss";
import { Avatar } from "@material-ui/core";
import { Subscribers } from "../../dummyData";

const Subs = () => {
  return (
    <div className="subs">
      <h2 className="subsHeading">Subscription</h2>
      <div className="subsContainer">
        {Subscribers.map((subscriber) => (
          <div className="subsItem" key={subscriber.id}>
            <Avatar src={subscriber.profilePicture} className="subsAvatar" />
            <span className="subsItemTitle">{subscriber.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subs;
