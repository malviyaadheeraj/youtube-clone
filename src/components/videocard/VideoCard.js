import React from "react";
import "./VideoCard.scss";
import { Avatar } from "@material-ui/core";

const VideoCard = ({ video }) => {
  return (
    <div className="videoCard">
      <img src={video.photo} alt="" className="videoCardImage" />
      <div className="videoCardTop">
        <Avatar src={video.profilePicture} className="videoCardAvatar" />
        <span className="videoCardTitle">{video.title}</span>
      </div>
      <div className="videoCardBottom">
        <small className="videoCardUsername">{video.username}</small>
        <small className="videoCardBottomTitle">
          {video.views}Views & {video.date}
        </small>
      </div>
    </div>
  );
};

export default VideoCard;
