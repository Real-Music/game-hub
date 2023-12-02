import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: { key: 'a5b7a0e99b0e4240ae3a30b2d196a697' }
})