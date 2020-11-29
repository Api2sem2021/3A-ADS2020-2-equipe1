import axios from 'axios';

const api = axios.create({
    baseURL: 'http://e1e898935f9f.ngrok.io',
})

export default api;