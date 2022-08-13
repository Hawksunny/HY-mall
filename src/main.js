import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* 在 Vue 原型上添加的自定义属性 */
// 添加自己封装的网络请求函数
import { haks } from "./network";
Vue.prototype.$haks = haks;

// 添加 Vuex 中的 mutaion type 到全局，方便使用
import * as types from "@/store/mutaion-types";
Vue.prototype.$x_types = types;

/* 创建 Vue 实例 */
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
