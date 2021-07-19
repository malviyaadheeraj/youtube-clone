import React from "react";
import "./Library.scss";
import { History, PlaylistPlay, WatchLater } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

const Library = () => {
  return (
    <div className="library">
      <div className="libraryContainer">
        <div className="libraryLeft">
          <div className="libraryLeftHeader">
            <History className="libraryIcon" />
            <span className="libraryLeftTitle">History</span>
          </div>
          <div className="libraryLeftHr"></div>
          <div className="libraryLeftHeader">
            <WatchLater className="libraryIcon" />
            <span className="libraryLeftTitle">Watch Later</span>
          </div>
          <div className="libraryLeftHr"></div>
          <div className="libraryLeftHeader">
            <PlaylistPlay className="libraryIcon" />
            <span className="libraryLeftTitle">Playlists</span>
          </div>
          <div className="libraryLeftHr"></div>
        </div>
        <div className="libraryRight">
          <Avatar className="libraryRightAvatar" />
          <h3 className="libraryContainerRightTitle">Dheeraj Malviya</h3>
          <div className="libraryRightHr"></div>
          <div className="librarySubscription">
            <span className="librarySubscriptionTitle">Subscription</span>
            <span className="librarySubscriptionBadge">38</span>
          </div>
          <div className="libraryRightHr"></div>
          <div className="librarySubscription">
            <span className="librarySubscriptionTitle">Uploads</span>
            <span className="librarySubscriptionBadge">0</span>
          </div>
          <div className="libraryRightHr"></div>
          <div className="librarySubscription">
            <span className="librarySubscriptionTitle">Likes</span>
            <span className="librarySubscriptionBadge">2</span>
          </div>
          <div className="libraryRightHr"></div>
        </div>
      </div>
    </div>
  );
};

export default Library;
