import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10af6d3e4eb7.ngrok.io',
})

export default api;