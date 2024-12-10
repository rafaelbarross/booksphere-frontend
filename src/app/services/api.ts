import axios from 'axios'
import { parseCookies } from 'nookies'
import { config } from 'process'

const { 'library-token': token } = parseCookies()

export const api = axios.create({
    baseURL: 'http://localhost:8000'
})

api.interceptors.request.use(config => {
    console.log('object:', config);

    return config;
})

if (token) {

    api.defaults.headers['Authorization'] = `Bearer ${token}`
    
}