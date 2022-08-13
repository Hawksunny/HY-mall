const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/Home/HomeView"),
    meta: {
      title: "主页-HY商城",
    },
  },
  {
    path: "/category",
    component: () => import("@/views/Category/CategoryView"),
    meta: {
      title: "分类-HY商城",
    },
  },
  {
    path: "/cart",
    component: () => import("@/views/Cart/CartView"),
    meta: {
      title: "购物车-HY商城",
    },
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile/ProfileView"),
    meta: {
      title: "我的-HY商城",
    },
  },
  {
    path: "*",
    component: () => import("@/views/NotFoundView"),
    meta: {
      title: "你访问的页面不存在-HY商城",
    },
  },
];

export default routes;
