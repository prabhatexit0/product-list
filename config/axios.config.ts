import { default as axiosPackage } from 'axios';

const axios = axiosPackage.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
