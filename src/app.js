// 服务端入口，创建 Vue 实例
import Vue from 'vue';
import App from './App.vue';
import createRouter from './router';

// 每次用户请求都需要一个实例 Vue
export default function createApp () {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { app, router };
}
