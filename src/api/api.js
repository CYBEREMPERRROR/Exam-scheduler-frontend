import axios from 'axios';

// Base URL of your backend
const api = axios.create({
  baseURL: 'https://exam-scheduler-backend-la8b.onrender.com/api',
  timeout: 5000,
});

// Function to validate the key
export const validateAccessKey = async (accessKey) => {
  return api.get('/validate-key', {
    headers: {
      'x-access-key': accessKey,
    },
  });
};

export default api;
