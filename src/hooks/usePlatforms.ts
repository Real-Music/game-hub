// import useData from "./useData";

import platform from "../data/platform";

interface Platform {
	id: number;
	name: string;
	slug: string;
}

const endpoint = '/platforms/lists/parents'
// const usePlatform = () => useData<Platform>(endpoint);
const usePlatform = () => ({ data: platform, isLoading: false, error: null })

export default usePlatform