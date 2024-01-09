import axios from "axios";

const api = axios.create({
  baseURL: "https://ahelios.com",
});

export default api;
