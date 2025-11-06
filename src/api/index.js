import axios from "axios";
import { API_BASE_URL, API_KEY } from "../constants/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    params: {api_key: API_KEY}
});

export default api;