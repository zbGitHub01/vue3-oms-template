
const state = {
  details: {},
};

const mutations = {
  SET_DETAILS: (state, value) => {
    state.details = value;
  },
};

const actions = {
  setDetails({ commit }, value) {
    commit('SET_DETAILS', value);
  },
};


export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
