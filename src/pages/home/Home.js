import React from "react";
import "./Home.scss";
import { PlayCircleOutline } from "@material-ui/icons";

const Home = () => {
  return (
    <div className="home">
      <div className="homeHeader">
        <span className="homeHeaderTitle">All</span>
        <span className="homeHeaderTitle">CSS</span>
        <span className="homeHeaderTitle">Angular</span>
        <span className="homeHeaderTitle">Python</span>
        <span className="homeHeaderTitle">Sales</span>
        <span className="homeHeaderTitle">English Grammer</span>
        <span className="homeHeaderTitle">User interface design</span>
        <span className="homeHeaderTitle">Akshay Kumar</span>
        <span className="homeHeaderTitle">Comedies</span>
        <span className="homeHeaderTitle">Conversation</span>
        <span className="homeHeaderTitle">Ajay Devgan</span>
        <span className="homeHeaderTitle">Blenders</span>
        <span className="homeHeaderTitle">Allu Arjun</span>
        <span className="homeHeaderTitle">Security hackers</span>
        <span className="homeHeaderTitle">Trailers</span>
        <span className="homeHeaderTitle">Superhero movies</span>
        <span className="homeHeaderTitle">Live</span>
        <span className="homeHeaderTitle">Mixes</span>
        <span className="homeHeaderTitle">Music</span>
        <span className="homeHeaderTitle">React</span>
        <span className="homeHeaderTitle">Javascript</span>
        <span className="homeHeaderTitle">Kapil sharma</span>
        <span className="homeHeaderTitle">CID</span>
        <span className="homeHeaderTitle">Computer files</span>
        <span className="homeHeaderTitle">Recently uploaded</span>
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
    </div>
  );
};

export default Home;
