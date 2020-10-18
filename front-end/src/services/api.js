import axios from 'axios';

const api = axios.create({
    baseURL: 'http://0f42c8fe5461.ngrok.io',
})

export default api;