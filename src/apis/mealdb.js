import axios from "axios";

const API_KEY = "";
const baseUrl = "https://www.themealdb.com/api/json/v1/1";

const mealdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default mealdb;
