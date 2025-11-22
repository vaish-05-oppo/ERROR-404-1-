import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // change if backend runs elsewhere
  timeout: 120000
});

export const analyzeCode = (formData, onUploadProgress) =>
  API.post("/analyze", formData, { onUploadProgress });

export default API;

