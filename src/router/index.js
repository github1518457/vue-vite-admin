import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout/index.vue";
import ViewsIndex from "../views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/admin/permission/menu",
    },
    {
      path: "/login",
      name: "登录",
      component: () => import("../views/login/index.vue"),
    },
    {
      path: "/home",
      name: "首页",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/admin",
      name: "导航菜单",
      component: Layout,
      children: [
        {
          path: "/admin/permission",
          name: "权限管理",
          component: ViewsIndex,
          children: [
            {
              path: "/admin/permission/menu",
              name: "菜单",
              component: () => import("../views/permission/menu/index.vue"),
            },
            {
              path: "/admin/permission/user",
              name: "用户",
              component: () => import("../views/permission/user/index.vue"),
            },
            {
              path: "/admin/permission/role",
              name: "角色",
              component: () => import("../views/permission/role/index.vue"),
            },
          ],
        },
        {
          path: "/admin/order",
          name: "订单管理",
          component: ViewsIndex,
          children: [
            {
              path: "/admin/ordert/rade",
              name: "交易订单",
              component: () => import("../views/order/trade/index.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
