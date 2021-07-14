import React from "react";
import "./Header.scss";
import {
  Menu,
  Mic,
  Apps,
  VideoCall,
  Notifications,
  Search,
  YouTube,
} from "@material-ui/icons";
import { IconButton, Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <IconButton>
          <Menu className="headerIcon" />
        </IconButton>
        <YouTube className="headerLogoIcon" />
        <span className="headerLogoTitle">YouTube</span>
      </div>
      <div className="headerCenter">
        <div className="headerCenterLeft">
          <input
            type="text"
            placeholder="Search"
            className="headerCenterInput"
          />
          <button className="headerSearch">
            <Search
              className="headerSearchIcon"
              title="Search"
              fontSize="small"
            />
          </button>
        </div>
        <div className="headerCenterRight" style={{ marginLeft: "5px" }}>
          <IconButton>
            <Mic className="headerIcon" />
          </IconButton>
        </div>
      </div>
      <div className="headerRight">
        <div className="headerRightLeft">
          <IconButton>
            <VideoCall className="headerIcon" />
          </IconButton>
          <IconButton>
            <Apps className="headerIcon" />
          </IconButton>
          <IconButton>
            <Notifications className="headerIcon" />
          </IconButton>
        </div>
        <div className="headerRightRight">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
