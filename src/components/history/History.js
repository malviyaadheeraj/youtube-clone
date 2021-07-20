import React from "react";
import "./History.scss";
import {
  Search,
  Delete,
  PauseCircleOutline,
  Settings,
} from "@material-ui/icons";

const History = () => {
  return (
    <div className="history">
      <div className="historyLeft">
        <h3 className="historyHeader">Watch History</h3>
        <h3 className="historyLeftHeader">Today</h3>
      </div>
      <div className="historyRight">
        <div className="historyRightInput">
          <Search className="historyRightIcon" />
          <input className="historyInput" placeholder="Search watch history" />
        </div>
        <div className="historyContainer">
          <div className="historyContainerTop">
            <small className="historyContainerTitle">History type</small>
          </div>
          <div className="historyHr"></div>
          <div className="historyContainerTop">
            <small className="historyContainerTitle">Watch history</small>
            <input type="radio" />
          </div>
          <div className="historyHr"></div>
          <div className="historyContainerTop">
            <small className="historyContainerTitle">Community</small>
            <input type="radio" />
          </div>
          <div className="historyHr"></div>
        </div>
        <div className="historyDelete">
          <Delete className="historyIcon" />
          <span className="historyDeleteTitle">CLEAR ALL WATCH HISTORY</span>
        </div>
        <div className="historyPause">
          <PauseCircleOutline className="historyIcon" />
          <span className="historyDeleteTitle">PAUSE WATCH HISTORY</span>
        </div>
        <div className="historySettings">
          <Settings className="historyIcon" />
          <span className="historyDeleteTitle">MANAGE ALL HISTORY</span>
        </div>
        <div className="historyBottom">
          <small className="historyBottomTitle">Watch and search history</small>
          <small className="historyBottomTitle">Comments</small>
          <small className="historyBottomTitle">Live chat</small>
        </div>
      </div>
    </div>
  );
};

export default History;
