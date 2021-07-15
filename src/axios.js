import axios from "axios";

const instance = axios.create({
  base_URL: "https://www.googleapis.com/youtube/v3/",
});

export default instance;
