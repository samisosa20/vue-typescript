// String
import useStrings from "@/string";

const useGeneralMutations = () => {
  const { useGeneralTypes } = useStrings();
  const { FOOTER, INCREMENT } = useGeneralTypes();
  const footer = {
    namespaced: true,
    state: {
      count: 0,
    },
    getters: {
        count: (state: any) => state.count
    },
    actions: {
      like({ commit }, payload: object) {
          commit(INCREMENT, payload);
      },
      setFooter({ commit }, id: number) {
        commit(FOOTER, id);
    }
  },
    mutations: {
      [FOOTER](state: any, payload: any) {
       console.log(state, payload)
      },
      [INCREMENT](state: any, payload: any) {
        if(state.count + payload.amount >= 0) {
          state.count += payload.amount;
        }
      },
    },
  };
  return { footer };
};

export default useGeneralMutations;
