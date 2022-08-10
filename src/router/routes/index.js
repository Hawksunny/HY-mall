const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    // name: 'home',
    component: () => import('@/views/Home/HomeView.vue'),
    meta: {
      title: '主页',
    },
    children: [
      {
        path: '',
        redirect: 'news',
      },
      {
        path: 'news',
        alias: '/news',
        name: 'home-news',
        component: () => import('@/views/Home/views/HomeNews.vue'),
        meta: {
          title: '主页-新闻',
        },
      },
      {
        path: 'message',
        alias: '/msg',
        name: 'home-message',
        component: () => import('@/views/Home/views/HomeMessage.vue'),
        meta: {
          title: '主页-消息',
        },
      },
    ],
  },
  {
    path: '/about/:id',
    name: 'about',
    component: () => import('@/views/About/AboutView.vue'),
    meta: {
      title: '关于',
    },
    props: route => ({
      query: route.query,
      params: route.params,
      msg: '你好！',
    }),
  },
];

export default routes;
