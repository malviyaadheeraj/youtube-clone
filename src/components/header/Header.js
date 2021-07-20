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
import { IconButton, Avatar, Tooltip } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
// import { logout, selectUser } from "../../features/userSlice";
// import { auth } from "../../firebase";

const Header = () => {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  const handleLogout = () => {
    // auth.signOut().then(() => {
    //   dispatch(logout());
    // });
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Tooltip title="Menu">
          <IconButton>
            <Menu className="headerIcon" />
          </IconButton>
        </Tooltip>
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
          <Tooltip title="Search">
            <button className="headerSearch">
              <Search
                className="headerSearchIcon"
                title="Search"
                fontSize="small"
              />
            </button>
          </Tooltip>
        </div>
        <div className="headerCenterRight" style={{ marginLeft: "5px" }}>
          <Tooltip title="Search with your voice">
            <IconButton>
              <Mic className="headerIcon" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="headerRight">
        <div className="headerRightLeft">
          <Tooltip title="Create">
            <IconButton>
              <VideoCall className="headerIcon" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Youtube apps">
            <IconButton>
              <Apps className="headerIcon" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notification">
            <IconButton>
              <Notifications className="headerIcon" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="headerRightRight">
          <Avatar onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Header;
