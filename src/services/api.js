import axios from "axios";

const api = axios.create({
    // endereco que esta nosso backend
    baseURL: 'http://localhost:3000'
})

export default api
