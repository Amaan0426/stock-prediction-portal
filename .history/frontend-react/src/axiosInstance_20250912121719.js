import axios from "axios";


const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }  
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

// Response interceptor for handling 401 errors
axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
export default axiosInstance;