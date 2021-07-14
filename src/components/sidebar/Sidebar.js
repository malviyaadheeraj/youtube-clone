import React from "react";
import "./Sidebar.scss";
import {
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
  History,
  PersonalVideo,
  WatchLater,
  ThumbUp,
  YouTube,
  Theaters,
  VideogameAsset,
  SettingsInputAntenna,
  Face,
  EmojiObjects,
  Sports,
  Settings,
  Flag,
  Help,
  Feedback,
  ExpandMore,
} from "@material-ui/icons";
import Subscription from "../subscription/Subscription";
import { Subscribers } from "../../dummyData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        <Link to="/" className="link">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarTitle">Home</span>
          </li>
        </Link>
        <Link to="/explore" className="link">
          <li className="sidebarListItem">
            <Explore className="sidebarIcon" />
            <span className="sidebarTitle">Explore</span>
          </li>
        </Link>
        <Link to="/subscriptions" className="link">
          <li className="sidebarListItem">
            <Subscriptions className="sidebarIcon" />
            <span className="sidebarTitle">Subscriptions</span>
          </li>
        </Link>
      </ul>
      <div className="sidebarHr"></div>
      <ul className="sidebarList">
        <Link to="/library" className="link">
          <li className="sidebarListItem">
            <VideoLibrary className="sidebarIcon" />
            <span className="sidebarTitle">Library</span>
          </li>
        </Link>
        <Link to="/history" className="link">
          <li className="sidebarListItem">
            <History className="sidebarIcon" />
            <span className="sidebarTitle">History</span>
          </li>
        </Link>
        <Link to="/yourVideos" className="link">
          <li className="sidebarListItem">
            <PersonalVideo className="sidebarIcon" />
            <span className="sidebarTitle">Your videos</span>
          </li>
        </Link>
        <Link to="/watchLater" className="link">
          <li className="sidebarListItem">
            <WatchLater className="sidebarIcon" />
            <span className="sidebarTitle">Watch later</span>
          </li>
        </Link>
        <Link to="/likedVideos" className="link">
          <li className="sidebarListItem">
            <ThumbUp className="sidebarIcon" />
            <span className="sidebarTitle">Liked videos</span>
          </li>
        </Link>
      </ul>
      <div className="sidebarHr"></div>
      <ul className="sidebarList">
        <h5 className="sidebarHeading">SUBSCRIPTIONS</h5>
        {Subscribers.map((subscriber) => (
          <Subscription key={subscriber.id} subscriber={subscriber} />
        ))}
        <li className="sidebarListItem">
          <ExpandMore className="sidebarIcon" />
          <span className="sidebarTitle">See more</span>
        </li>
      </ul>
      <div className="sidebarHr"></div>
      <ul className="sidebarList">
        <h5 className="sidebarHeading">MORE FROM YOUTUBE</h5>
        <Link to="/youtubePremium" className="link">
          <li className="sidebarListItem">
            <YouTube className="sidebarIcon" />
            <span className="sidebarTitle">Youtube Premium</span>
          </li>
        </Link>
        <Link to="/movies" className="link">
          <li className="sidebarListItem">
            <Theaters className="sidebarIcon" />
            <span className="sidebarTitle">Movies</span>
          </li>
        </Link>
        <Link to="/gaming" className="link">
          <li className="sidebarListItem">
            <VideogameAsset className="sidebarIcon" />
            <span className="sidebarTitle">Gaming</span>
          </li>
        </Link>
        <Link to="/live" className="link">
          <li className="sidebarListItem">
            <SettingsInputAntenna className="sidebarIcon" />
            <span className="sidebarTitle">Live</span>
          </li>
        </Link>
        <Link to="/fashionBeauty" className="link">
          <li className="sidebarListItem">
            <Face className="sidebarIcon" />
            <span className="sidebarTitle">Fashion & Beauty</span>
          </li>
        </Link>
        <Link to="/learning" className="link">
          <li className="sidebarListItem">
            <EmojiObjects className="sidebarIcon" />
            <span className="sidebarTitle">Learning</span>
          </li>
        </Link>
        <Link to="/sports" className="link">
          <li className="sidebarListItem">
            <Sports className="sidebarIcon" />
            <span className="sidebarTitle">Sports</span>
          </li>
        </Link>
      </ul>
      <div className="sidebarHr"></div>
      <ul className="sidebarList">
        <Link to="/settings" className="link">
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarTitle">Settings</span>
          </li>
        </Link>
        <Link to="/reportHistory" className="link">
          <li className="sidebarListItem">
            <Flag className="sidebarIcon" />
            <span className="sidebarTitle">Report history</span>
          </li>
        </Link>
        <Link to="/help" className="link">
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarTitle">Help</span>
          </li>
        </Link>
        <Link to="/sendFeedback" className="link">
          <li className="sidebarListItem">
            <Feedback className="sidebarIcon" />
            <span className="sidebarTitle">Send feedback</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
