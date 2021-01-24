import axios from 'axios'

const api = axios.create({
    baseURL: "https://sagris.com.br/teste-front/api/last-access"
})

export default api