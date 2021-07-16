import React from "react";
import "./Subs.scss";
import { Posts } from "../../dummyData";
import VideoCard from "../../components/videocard/VideoCard";

const Subs = () => {
  return (
    <div className="subs">
      <h2 className="subsHeading">Today</h2>
      <div className="subsTop">
        {Posts.map((post) => (
          <VideoCard key={post.id} post={post} />
        ))}
      </div>
      <div className="subsHr"></div>
      <h2 className="subsHeading">Yesterday</h2>
      <div className="subsBottom">
          {Posts.map((post) => (
          <VideoCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Subs;
