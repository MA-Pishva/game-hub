import axios from 'axios';

export default axios.create({
    baseURL: "https:/api.rawg.io/api",
    params: {
        key: "a9445c2c49ab4c1480eedb4fc1b9bebf"
    }
})