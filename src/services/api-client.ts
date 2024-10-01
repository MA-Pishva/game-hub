import axios from 'axios';

export default axios.create({
    baseURL: "https:/api.rawg.io/api",
    params: {
        key: "c3cf23ba77514ea2bda211254be2c9f5"
    }
})