import React, { useState, useEffect } from "react";
import "./VideoCard.scss";
import { Avatar } from "@material-ui/core";

const VideoCard = ({ post }) => {
  return (
    <div className="videoCard">
      <img src={post.photo} alt="" className="videoCardImage" />
      <div className="videoCardTop">
        <Avatar src={post.profilePicture} className="videoCardAvatar" />
        <span className="videoCardTitle">{post.title}</span>
      </div>
      <span className="videoCardUsername">{post.username}</span>
      <div className="videoCardBottom">
        {post.views} Views & {post.date}
      </div>
    </div>
  );
};

export default VideoCard;
