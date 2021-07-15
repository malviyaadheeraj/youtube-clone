import React, { useState, useEffect } from "react";
import "./VideoCard.scss";
import { Avatar } from "@material-ui/core";
import axios from "../../axios";

const VideoCard = ({ video }) => {
  console.log(video);
  // const {
  //   id,
  //   snippet: {
  //     // channelId,
  //     // channelTitle,
  //     // title,
  //     // publishedAt,
  //     thumbnails: { medium },
  //   },
  // } = video;
  // const [video, setVideo] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(fetchUrl);
  //     setVideo(request.data.results);
  //     return request;
  //   }

  //   fetchData();
  // }, [fetchUrl]);

  // console.log(video);

  return (
    <div className="videoCard">
      <h1>{video.snippet.channelTitle}</h1>
      {/* <img src="" alt="" className="videoCardImage" />
      <div className="videoCardTop">
        <Avatar src="" className="videoCardAvatar" />
        <span className="videoCardTitle"></span>
      </div>
      <span className="videoCardUsername"></span>
      <div className="videoCardBottom"></div> */}
    </div>
  );
};

export default VideoCard;
