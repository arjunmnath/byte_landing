import axios, { AxiosInstance } from "axios"

// Create a reusable Axios instance
const axi = axios.create({
    baseURL: "https://api.byteapp.tech/api/v1",
    timeout: 5000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Client-Type": "web",
    },
})

export default axi
