import axios, { AxiosRequestConfig } from 'axios';
interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5b1fc50d25d34f79af178ff2e534439c"
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data)
    }

    get = (id: string | number) => {
        return axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data)
    }
}

export default APIClient;