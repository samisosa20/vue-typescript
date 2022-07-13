import useHome from "./home";
import useMap from "./map";
import useAbout from "./about";

const useControllersView = () => {
    return {
        useHome,
        useMap,
        useAbout,
    }
}

export default useControllersView