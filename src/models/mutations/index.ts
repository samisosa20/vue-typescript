import { createStore } from 'vuex'

import useGeneralMutations from "./general"
const {footer, } = useGeneralMutations()


export default createStore({
  modules: {
    footer
  },
});;