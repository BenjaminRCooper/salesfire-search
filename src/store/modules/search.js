const initialState = {
  results: [],
  loading: false,
};

const actions = {
  async getResults({ commit }, query = "") {
    commit("LOADING", true);
    try {
      const request = await fetch(
        `https://aix.salesfire.co.uk/api/searcha?client_id=3f32397c-21c6-47e5-9ebd-e9865ea03470&limit=50&query=${query}`
      );
      const response = await request.json();

      commit("SET_RESULTS", response.products);
    } catch (err) {
      console.log(err);
    } finally {
      commit("LOADING");
    }
  },
};

const mutations = {
  LOADING(state, flag = false) {
    state.loading = flag;
  },
  SET_RESULTS(state, results) {
    state.results = [...results];
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
