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
    //Handle failed responses
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; 
            const refreshToken = localStorage.getItem('refreshToken');
            try{
                const response = await axiosInstance.post('/token/refresh/', {refresh: refreshToken});
                localStorage.setItem('accessToken', response.data.access);
                or

            }catch(error){
                reture false;
            }

        }
}
);
export default axiosInstance;