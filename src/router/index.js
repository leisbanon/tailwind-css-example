import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    },
    {
      path: '/basic',
      component: () => import('@/views/Basic.vue'),
      meta: { name: '核心概念' },
    },
    {
      path: '/layout',
      component: () => import('@/views/Layout.vue'),
      meta: { name: '布局' },
    },
    {
      path: '/flexbox',
      component: () => import('@/views/Flexbox.vue'),
      meta: { name: 'FlexBox - 弹性布局' },
    },
    {
      path: '/place',
      component: () => import('@/views/Place.vue'),
      meta: { name: '排版' },
    },
    {
      path: '/responsive-design',
      component: () => import('@/views/ResponsiveDesign.vue'),
      meta: { name: '响应式设计' },
    },
    {
      path: '/animation',
      component: () => import('@/views/Animation.vue'),
      meta: { name: '过渡&动画' },
    },
  ],
});

export default router;
