import useHome from "./home";
import useMap from "./map";

const useControllersView = () => {
    return {
        useHome,
        useMap,
    }
}

export default useControllersView