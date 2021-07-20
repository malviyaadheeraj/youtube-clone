import React from "react";
import "./LikedVideos.scss";
import { Lock, MoreHorizSharp } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

const LikedVideos = () => {
  return (
    <div className="likedVideos">
      <div className="likedVideosLeft">
        <img src="https://i.ytimg.com/an_webp/-O7a9Oro1KI/mqdefault_6s.webp?du=3000&sqp=CJCYzIcG&rs=AOn4CLCcT-0xHuyIJlI-0lH7KtU_f8KJIw" className="likedVideosImage" alt="" />
        <span className="likedLeftTitle">Liked Videos</span>
        <small>No videos & No views & Updated 2 days ago</small>
        <div className="likedVideosIcons">
          <Lock className="likedIcon" fontSize="small" />
          <span className="likedVideosIconsTitle">Private</span>
        </div>
        <MoreHorizSharp className="likedMoreIcons" />
        <div className="likedVideosHr"></div>
        <div className="likedVideosProfile">
          <Avatar className="likedVideosAvatar" />
          <span className="likedVideosProfileTitle">Dheeraj Malviya</span>
        </div>
      </div>
      <div className="likedVideosRight">
        <small className="likedRightTitle">
          No videos in this playlist yet
        </small>
      </div>
    </div>
  );
};

export default LikedVideos;
