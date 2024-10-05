import axios from 'axios';
export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5b1fc50d25d34f79af178ff2e534439c"
    }
})