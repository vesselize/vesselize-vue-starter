import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      git: 'https://github.com/vesselize/vesselize-vue-starter',
    };
  },
  mutations: {},
  actions: {},
  plugins: [],
});

export default store;
