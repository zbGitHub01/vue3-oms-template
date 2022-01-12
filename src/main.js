import './public-path';
import { createApp, computed, reactive, ref } from 'vue';
import ElementPlus from 'element-plus';
import * as ElIcons from '@element-plus/icons';
import App from './App.vue';
import store from './store';

import router, { asyncRoutes } from './router';
// import * as filters from './filters'; // 全局过滤器

import 'normalize.css/normalize.css'; // CSS重置的现代替代方案
import 'element-plus/dist/index.css';

let instance = null;

function render({ data = {}, container } = {}) {
  instance = createApp(App, data);
  instance.use(ElementPlus);
  instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');
  // 注册权益指令;
  instance.directive('permission', data.permission);
  for (const name in ElIcons) {
    instance.component(name, ElIcons[name]);
  }

  instance.config.globalProperties.$computed = computed;
  instance.config.globalProperties.$reactive = reactive;
  instance.config.globalProperties.$ref = ref;

  if (window.__POWERED_BY_QIANKUN__) {
    data.store.dispatch('permission/changeRouter', asyncRoutes);
    console.log(data);
    store.commit('user/SET_TOKEN', data.store.getters.token);
    store.commit('user/SET_SYSTEM_LIST', data.store.getters.systemList);
    store.commit('user/SET_ID', data.store.getters.userId);
    store.commit('user/SET_ROLES', data.store.getters.roles);

    router.afterEach(to => {
      data.store.commit('app/PAGE_TITLE', `${process.env.VUE_APP_TITLE}-${to.meta.title}`);
    });
  }

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

