import { getToken } from '@/utils/auth';

const state = {
  token: getToken('Admin-Token'),
  systemList: [],
  id: '',
  roles: [],
};

const mutations = {
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_SYSTEM_LIST: (state, systemList) => {
    state.systemList = systemList;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
