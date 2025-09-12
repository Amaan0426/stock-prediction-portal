import axios from "axios";


const baseURL = import.meta.env.VITE_BACKEND_BASE_API || 'http://
const axiosInstance = axios.create({
    baseURL: ''