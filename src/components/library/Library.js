import React from "react";
import "./Library.scss";
import { History, PlaylistPlay, WatchLater } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Videos } from "../../dummyData";

const Library = () => {
  return (
    <div className="library">
      <div className="libraryContainer">
        <div className="libraryLeft">
          <div className="libraryLeftHeader">
            <div className="libraryIcons">
              <History className="libraryIcon" />
              <span className="libraryLeftTitle">History</span>
            </div>
            <div className="libraryBottom">
              {Videos.map((video) => (
                <div className="libraryVideoCard" key={video.id}>
                  <img
                    src={video.photo}
                    alt=""
                    className="libraryVideoCardImage"
                  />
                  <div className="libraryVideoCardTop">
                    <Avatar
                      src={video.profilePicture}
                      className="libraryVideoCardAvatar"
                    />
                    <span className="libraryVideoCardTitle">{video.title}</span>
                  </div>
                  <div className="libraryVideoCardBottom">
                    <small className="libraryVideoCardUsername">
                      {video.username}
                    </small>
                    <small className="libraryVideoCardBottomTitle">
                      {video.views}Views & {video.date}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="libraryLeftHr"></div>
          <div className="libraryLeftHeader">
            <div className="libraryIcons">
              <WatchLater className="libraryIcon" />
              <span className="libraryLeftTitle">Watch Later</span>
            </div>
          </div>
          <div className="libraryLeftHr"></div>
          <div className="libraryLeftHeader">
            <div className="libraryIcons">
              <PlaylistPlay className="libraryIcon" />
              <span className="libraryLeftTitle">Playlists</span>
            </div>
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
