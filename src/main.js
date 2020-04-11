import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://127.0.0.1';
Axios.defaults.headers.common['token'] = localStorage.getItem("token");
// Axios.defaults.headers.common['token'] = token ? token : "";
// Vue.http.headers.common['token'] = "3";
Axios.defaults.headers.common['Content-Type'] = 'application/json;';
Vue.prototype.$axios = Axios;
Vue.use(ElementUI)
Vue.config.productionTip = false

localStorage.setItem("key", "value");  //以“key”为名称存储一个值“value”

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
