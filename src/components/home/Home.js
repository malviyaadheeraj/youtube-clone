import React from "react";
import "./Home.scss";
import { PlayCircleOutline } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Videos } from "../../dummyData";

const Home = () => {
  return (
    <div className="home">
      <div className="homeHeader">
        <span className="homeHeaderTitle active">All</span>
        <span className="homeHeaderTitle">CSS</span>
        <span className="homeHeaderTitle">Angular</span>
        <span className="homeHeaderTitle">Python</span>
        <span className="homeHeaderTitle">Website</span>
        <span className="homeHeaderTitle">Databases</span>
        <span className="homeHeaderTitle">Happiness</span>
        <span className="homeHeaderTitle">Dubbing</span>
        <span className="homeHeaderTitle">Thrillers</span>
        <span className="homeHeaderTitle">Graphic</span>
        <span className="homeHeaderTitle">Sales</span>
        <span className="homeHeaderTitle">Comedies</span>
        <span className="homeHeaderTitle">Conversation</span>
        <span className="homeHeaderTitle">Blenders</span>
        <span className="homeHeaderTitle">Trailers</span>
        <span className="homeHeaderTitle">Shemaroo</span>
        <span className="homeHeaderTitle">SASS</span>
        <span className="homeHeaderTitle">Live</span>
        <span className="homeHeaderTitle">Mixes</span>
        <span className="homeHeaderTitle">Music</span>
        <span className="homeHeaderTitle">React</span>
        <span className="homeHeaderTitle">Javascript</span>
        <span className="homeHeaderTitle">CID</span>
        <span className="homeHeaderTitle">watched</span>
      </div>
      <div className="homeHr"></div>
      <div className="homeCenter">
        <div className="homeYoutube">
          <PlayCircleOutline className="homeYoutubeIcon" />
          <span className="homeYoutubeTitle">YouTube Music</span>
        </div>
        <h4 className="homeCenterHeading">
          Intruducing 1 month & 3 months Prepaid <br /> Plans
        </h4>
        <button className="homeCenterButton">GET IT NOW</button>
      </div>
      <div className="homeBottom">
        {Videos.map((video) => (
          <div className="homeVideoCard" key={video.id}>
            <img src={video.photo} alt="" className="homeVideoCardImage" />
            <div className="homeVideoCardTop">
              <Avatar
                src={video.profilePicture}
                className="homeVideoCardAvatar"
              />
              <span className="homeVideoCardTitle">{video.title}</span>
            </div>
            <div className="homeVideoCardBottom">
              <small className="homeVideoCardUsername">{video.username}</small>
              <small className="homeVideoCardBottomTitle">
                {video.views}Views & {video.date}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
