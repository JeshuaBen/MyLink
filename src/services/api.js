import axios from 'axios'


export const key = 'da6e72e9addbd4d3ff1b67570bc9d65bd45a5587'


const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}` 
  }
})

export default api;