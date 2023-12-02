import client from "axios";

const axios = client.create({ baseURL: process.env.REACT_APP_BASE_URL });

export default axios;
