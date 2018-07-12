import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2'
})

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response)
)

export default api
