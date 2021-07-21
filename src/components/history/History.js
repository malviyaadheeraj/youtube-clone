import React from "react";
import "./History.scss";
import {
  Search,
  Delete,
  PauseCircleOutline,
  Settings,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Videos } from "../../dummyData";

const History = () => {
  return (
    <div className="history">
      <div className="historyLeft">
        <h3 className="historyHeader">Watch History</h3>
        <div className="historyTop">
          {Videos.map((video) => (
            <div className="historyCard" key={video.id}>
              <img src={video.photo} alt="" className="historyCardImage" />
              <div className="historyCardTop">
                <Avatar
                  src={video.profilePicture}
                  className="historyCardAvatar"
                />
                <span className="historyCardTitle">{video.title}</span>
              </div>
              <div className="historyCardBottom">
                <small className="historyCardUsername">{video.username}</small>
                <small className="historyCardBottomTitle">
                  {video.views}Views & {video.date}
                </small>
              </div>
            </div>
          ))}
        </div>
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
