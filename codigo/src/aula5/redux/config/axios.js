import axios from "axios";

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = "http://10.107.5.150/api";

export default axios;
