import useData from "./useData";

interface Platform {
	id: number;
	name: string;
	slug: string;
}

const endpoint = '/platforms/lists/parents'
const usePlatform = () => useData<Platform>(endpoint);

export default usePlatform