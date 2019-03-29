import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: '',
          name: 'Index',
          component: () => import('@/components/Index.vue'),
        },
        {
          path: '/aboutro',
          name: 'AboutRo',
          component: () => import('@/components/AboutRo.vue'),
        },
        {
          path: '/products',
          name: 'Products',
          component: () => import('@/components/Products.vue'),
        },
        {
          path: '/detailed/:productsId',
          name: 'Detailed',
          component: () => import('@/components/Detailed.vue'),
        },
        {
          path: '/customer',
          name: 'Customer',
          component: () => import('@/components/Customer.vue'),
        },
        {
          path: '/check_order/:orderId',
          name: 'CheckOrder',
          component: () => import('@/components/CheckOrder.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/admin',
      name: '',
      component: () => import('@/views/admin/Dashboard.vue'),
      children: [
        {
          path: '',
          name: 'ProductsList',
          component: () => import('@/components/admin/ProductsList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/productscard',
          name: 'ProductsCard',
          component: () => import('@/components/admin/ProductsCard.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/coupons',
          name: 'Coupons',
          component: () => import('@/components/admin/Coupons.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/orders',
          name: 'Orders',
          component: () => import('@/components/admin/Orders.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/customer_orders',
          name: 'CustomerOrders',
          component: () => import('@/components/admin/CustomerOrders.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/customer_crders/:orderId',
          name: 'CustomerCheck',
          component: () => import('@/components/admin/CustomerCheck.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});