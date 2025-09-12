import axios from "axios";


const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
    baseURL: baseURL,
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        console.log('Request made without auth header ', config);
        const accessToken = localStorage.getItem('accessToken');
        
        return config;
    },
)
export default axiosInstance;