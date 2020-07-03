import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mega-hack-api.herokuapp.com/'
})

export default api