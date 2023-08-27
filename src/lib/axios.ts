import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api',
  timeout: 5000,
})
