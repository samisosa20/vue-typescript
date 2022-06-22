import useInitialStates from "./initialStates";
import useMutations from "./mutations";

const useModels = () => {
  return {
    useMutations,
    useInitialStates,
  };
};

export default useModels;