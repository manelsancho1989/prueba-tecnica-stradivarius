import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:3333/'
})

export default axiosClient;