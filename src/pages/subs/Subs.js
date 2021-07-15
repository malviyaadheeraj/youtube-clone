import React from "react";
import "./Subs.scss";

const Subs = () => {
  return (
    <div className="subs">
      <div className="subsTop">
        <h2 className="subsHeading">Today</h2>
      </div>
      <div className="subsHr"></div>
      <div className="subsBottom">
        <h2 className="subsHeading">Yesterday</h2>
      </div>
    </div>
  );
};

export default Subs;
