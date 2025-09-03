import axios, { AxiosInstance } from "axios"

// Create a reusable Axios instance
const axi = axios.create({
    baseURL: "http://34.100.235.255:2707/api/v1",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        withCredentials: true
    },
})

export default axi