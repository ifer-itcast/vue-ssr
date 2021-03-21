import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/component/Index';
import Detail from '@/component/Detail';

Vue.use(Router);

// 每次用户请求都需要创建 router 实例
export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Index,
      },
      {
        path: '/detail',
        component: Detail,
      },
    ],
  });
}
