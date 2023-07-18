import axios from 'axios'

const backendUrlLocal = "http://localhost:4500"
const backendUrlProd = "https://proyecto-5-udd-api.onrender.com"
const axiosClient = axios.create( {
  baseURL: backendUrlProd

} )

export default axiosClient