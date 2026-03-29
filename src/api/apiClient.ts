import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // 🔥 your backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // optional (if using cookies/auth)
});

export default apiClient;