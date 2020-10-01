import { Store } from "vuex";

import search from "./modules/search";

export default new Store({
  namespaced: true,
  modules: {
    search,
  },
});
