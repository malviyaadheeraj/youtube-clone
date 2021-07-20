import React from "react";
import "./Explore.scss";
import {
  Whatshot,
  MusicNote,
  VideogameAsset,
  SpeakerNotes,
  Theaters,
  Face,
  EmojiObjects,
  SettingsInputAntenna,
  Sports,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Videos } from "../../dummyData";

const Explore = () => {
  return (
    <div className="explore">
      <div className="exploreTop">
        <div className="exploreCard">
          <Whatshot className="exploreCardIcon" htmlColor="#ff5722" />
          <span className="exploreCardTitle">Trending</span>
        </div>
        <div className="exploreCard">
          <MusicNote className="exploreCardIcon" htmlColor="#ffd600" />
          <span className="exploreCardTitle">Music</span>
        </div>
        <div className="exploreCard">
          <VideogameAsset
            className="exploreCardIcon"
            htmlColor="rgba(204, 0, 0, 0.9)"
          />
          <span className="exploreCardTitle">Gaming</span>
        </div>
        <div className="exploreCard">
          <SpeakerNotes className="exploreCardIcon" htmlColor="#065fd4" />
          <span className="exploreCardTitle">News</span>
        </div>
        <div className="exploreCard">
          <Theaters className="exploreCardIcon" htmlColor="#7f0e7f" />
          <span className="exploreCardTitle">Movies</span>
        </div>
        <div className="exploreCard">
          <Face className="exploreCardIcon" htmlColor="rgba(62, 166, 255)" />
          <span className="exploreCardTitle">Fashion & Beauty</span>
        </div>
        <div className="exploreCard">
          <EmojiObjects className="exploreCardIcon" htmlColor="#00716c" />
          <span className="exploreCardTitle">Learning</span>
        </div>
        <div className="exploreCard">
          <SettingsInputAntenna
            className="exploreCardIcon"
            htmlColor="#d400f8"
          />
          <span className="exploreCardTitle">Live</span>
        </div>
        <div className="exploreCard">
          <Sports className="exploreCardIcon" htmlColor="#0551b4" />
          <span className="exploreCardTitle">Sports</span>
        </div>
      </div>
      <div className="exploreHr"></div>
      <h2 className="exploreBottomTitle">Trending Videos</h2>
      <div className="exploreBottom">
        {Videos.map((video) => (
          <div className="exploreVideo" key={video.id}>
            <img src={video.photo} className="exploreVideoImage" alt="" />
            <div className="exploreVideoRight">
              <h3 className="exploreVideoTitle">{video.title}</h3>
              <div className="exploreProfile">
                <Avatar src={video.profilePicture} className="exploreAvatar" />
                <span className="explorePofileTitle">{video.username}</span>
              </div>
              <small className="exploreReviews">
                {video.views} Views & {video.date}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
