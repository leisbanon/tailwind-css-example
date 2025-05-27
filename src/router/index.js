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
    // {
    //   path: '/basic',
    //   component: () => import('@/views/basic/index.vue'),
    //   meta: { name: '基础' },
    //   children: [
    //     {
    //       path: 'ref',
    //       component: () => import('@/views/basic/Ref.vue'),
    //       meta: { name: '响应式基础' },
    //     },
    //     {
    //       path: 'computed',
    //       component: () => import('@/views/basic/Compute.vue'),
    //       meta: { name: '计算属性' },
    //     },
    //     {
    //       path: 'appStatus',
    //       component: () => import('@/views/basic/AppStatus.vue'),
    //       meta: { name: '生命周期' },
    //     },
    //     {
    //       path: 'pageComponent',
    //       component: () => import('@/views/basic/PageComponent.vue'),
    //       meta: { name: '页面组件' },
    //     },
    //   ],
    // },
    // {
    //   path: '/api',
    //   component: () => import('@/views/api/index.vue'),
    //   meta: { name: 'API' },
    //   children: [
    //     {
    //       path: 'globalApi',
    //       component: () => import('@/views/api/GlobalAPI.vue'),
    //       meta: { name: '全局API' },
    //     },
    //     {
    //       path: 'groupApi',
    //       component: () => import('@/views/api/GroupAPI.vue'),
    //       meta: { name: '组合式API' },
    //     },
    //     {
    //       path: 'contentApi',
    //       component: () => import('@/views/api/ContextAPI.vue'),
    //       meta: { name: '内置内容' },
    //     },
    //     {
    //       path: 'componentApi',
    //       component: () => import('@/views/api/ComponentAPI.vue'),
    //       meta: { name: '单文件组件' },
    //     },
    //   ],
    // },
    // {
    //   path: '/pinia',
    //   component: () => import('@/views/pinia/index.vue'),
    //   meta: { name: '状态管理' },
    //   children: [
    //     {
    //       path: 'store',
    //       component: () => import('@/views/pinia/Use.vue'),
    //       meta: { name: '使用' },
    //     },
    //     {
    //       path: 'concept',
    //       component: () => import('@/views/pinia/Concept.vue'),
    //       meta: { name: '核心概念' },
    //     },
    //   ],
    // },
    // {
    //   path: '/tools',
    //   component: () => import('@/views/tools/index.vue'),
    //   meta: { name: '工具栈' },
    //   children: [
    //     {
    //       path: 'lang',
    //       component: () => import('@/views/tools/Lang.vue'),
    //       meta: { name: '国际化' },
    //     },
    //     {
    //       path: 'ssr',
    //       component: () => import('@/views/tools/ssr.vue'),
    //       meta: { name: '服务端渲染' },
    //     },
    //   ],
    // },
  ],
});

export default router;
