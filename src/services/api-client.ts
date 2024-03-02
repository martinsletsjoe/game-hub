import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1b414102c26a49ca827f9d6bef2cb7c5"
    }
})