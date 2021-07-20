import React from "react";
import "./WatchLater.scss";
import { Lock, MoreHorizSharp } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

const WatchLater = () => {
  return (
    <div className="watchLater">
      <div className="watchLaterLeft">
        <img
          src="https://i.ytimg.com/an_webp/-O7a9Oro1KI/mqdefault_6s.webp?du=3000&sqp=CJCYzIcG&rs=AOn4CLCcT-0xHuyIJlI-0lH7KtU_f8KJIw"
          className="watchLaterImage"
          alt=""
        />
        <span className="watchLeftTitle">Watch Later</span>
        <small>No videos & No views & Updated 2 days ago</small>
        <div className="watchLaterIcons">
          <Lock className="watchIcon" fontSize="small" />
          <span className="watchLaterIconsTitle">Private</span>
        </div>
        <MoreHorizSharp className="watchMoreIcons" />
        <div className="watchLaterHr"></div>
        <div className="watchLaterProfile">
          <Avatar className="watchLaterAvatar" />
          <span className="watchLaterProfileTitle">Dheeraj Malviya</span>
        </div>
      </div>
      <div className="watchLaterRight">
        <small className="watchRightTitle">
          No videos in this playlist yet
        </small>
      </div>
    </div>
  );
};

export default WatchLater;
