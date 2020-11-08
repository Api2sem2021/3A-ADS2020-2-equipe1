import axios from 'axios';

const api = axios.create({
    baseURL: 'http://a9302e38b4ac.ngrok.io',
})

export default api;