import axios from 'axios';
// Create a common Axios instance
const instance = axios.create();

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 400 && error.response.data.includes('Invalid Token')) {

      window.location.href = '/login';
      return Promise.resolve({});
    }

    return Promise.reject(error);
  }
);

export default instance;
