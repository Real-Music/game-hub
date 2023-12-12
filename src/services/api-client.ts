import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
	next: string | null;
	results: T[]
}

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: { key: 'a5b7a0e99b0e4240ae3a30b2d196a697' }
})

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig) => {
		return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
	}
}

export default APIClient
