import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import Axios from 'axios'

// 设置baseURL
Axios.defaults.baseURL = 'http://127.0.0.1';
// 设置token值
Axios.defaults.headers.common['Authorization'] = '1';
// 请求头
Axios.defaults.headers.post['Content-Type'] = 'application/json;';
Vue.prototype.$axios = Axios;
Vue.use(ElementUI)
Vue.config.productionTip = false

const get = (url, params) => {
  return Axios({
    method: 'get',
    url,
    params: params
  })
};

const postJson = (url, data = {}) => {
  return Axios({
    method: 'POST',
    url,
    data: data
  })
};

const postForm = (url, data = {}) => {
  return Axios({
    method: 'POST',
    url,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data;'
    }
  })
};
Vue.prototype.$get = get;
Vue.prototype.$postJson = postJson;
Vue.prototype.$postForm = postForm;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
