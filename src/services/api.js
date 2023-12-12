import axios from "axios";

export default axios.create({
  baseURL: "https://av-ii-backend.glitch.me/",
  headers: {
    "Content-type": "application/json",
  },
});
