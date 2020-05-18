import axios from 'axios';

const api = axios.create({ baseURL: 'http://apirestlaravel.test/api/'});

export default api;