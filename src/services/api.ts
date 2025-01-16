import axios from "axios";


const API_BASE_URL = "http://localhost:5000/api";

export const fetchSidebarOptions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dashboard/user`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch sidebar options:", error);
    return [];
  }
};

export const fetchlearningOptions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dashboard/learning-progress`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch sidebar options:", error);
    return [];
  }
};

export const fetchsuggestedOptions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dashboard/suggested-topics`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch sidebar options:", error);
    return [];
  }
};