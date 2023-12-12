import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:8080/",
  baseURL: "https://av-ii-backend.glitch.me/",
  headers: {
    "Content-type": "application/json",
  },
});
