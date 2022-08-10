import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  // mode: 'history',
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // console.log(to);
  next();
});

// router.afterEach((to, from) => {
//   to;
//   from;
//   document.title = '真的要离开吗？';
// });

export default router;
