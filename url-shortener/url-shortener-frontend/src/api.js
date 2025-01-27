import axios from 'axios';

// Ensure this uses the environment variable from your .env file
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,  // This will use the variable set in .env
});

export default api;
