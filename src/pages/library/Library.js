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
          <div className="libraryHr"></div>
          <div className="libraryLeftHeader">
            <WatchLater className="libraryIcon" />
            <span className="libraryLeftTitle">Watch Later</span>
          </div>
          <div className="libraryHr"></div>
          <div className="libraryLeftHeader">
            <PlaylistPlay className="libraryIcon" />
            <span className="libraryLeftTitle">Playlists</span>
          </div>
          <div className="libraryHr"></div>
        </div>
        <div className="libraryRight">
          <Avatar className="libraryRightAvatar" />
          <h3 className="libraryContainerRightTitlle">Dheeraj Malviya</h3>
          <div className="libraryHr"></div>
          <div className="librarySubscription">
            <h3 className="librarySubscriptionTitle">Subscription</h3>
            <h3 className="librarySubscriptionBadge">38</h3>
          </div>
          <div className="libraryHr"></div>
          <div className="librarySubscription">
            <h3 className="librarySubscriptionTitle">Uploads</h3>
            <h3 className="librarySubscriptionBadge">0</h3>
          </div>
          <div className="libraryHr"></div>
          <div className="librarySubscription">
            <h3 className="librarySubscriptionTitle">Likes</h3>
            <h3 className="librarySubscriptionBadge">2</h3>
          </div>
          <div className="libraryHr"></div>
        </div>
      </div>
    </div>
  );
};

export default Library;
