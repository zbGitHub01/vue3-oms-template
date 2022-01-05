import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
// import * as filters from './filters'; // 全局过滤器

import 'normalize.css/normalize.css'; // CSS重置的现代替代方案
import 'element-plus/dist/index.css';

// createApp(App)
//   .use(ElementPlus)
//   .use(router)
//   .mount('#app');

let instance = null;

function render({ data = {}, container } = {}) {
  instance = createApp({
    router,
    data() {
      return {
        parentRouter: data.router,
        getRsaCode: data.getRsaCode,
        parentVuex: data.store,
      };
    },
    // render: h => h(App),
  }).use(ElementPlus).use(router)
    .mount(container ? container.querySelector('#app') : '#app');


  if (window.__POWERED_BY_QIANKUN__) {
    // data.store.dispatch('permission/changeRouter', asyncRoutes);
    // store.commit('user/SET_TOKEN', data.store.getters.token);
    // store.commit('user/SET_SYSTEM_LIST', data.store.getters.systemList);
    // store.commit('user/SET_ID', data.store.getters.userId);
    // store.commit('user/SET_ROLES', data.store.getters.roles);

    // router.afterEach(to => {
    //   data.store.commit('app/PAGE_TITLE', `${process.env.VUE_APP_TITLE}-${to.meta.title}`);
    // });
  }
  // 注册权益指令
  instance.directive('permission', data.permission);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  document.getElementById('appContainer').children[0].style.height = '100%';
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
