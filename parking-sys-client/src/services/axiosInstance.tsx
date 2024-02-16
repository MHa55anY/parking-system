import axios from 'axios';
import toast from 'react-hot-toast';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Your API base URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => {
    if (!(window.location.pathname === '/')) {
      toast.error("You are not authorized to view this resource! 😢")
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;