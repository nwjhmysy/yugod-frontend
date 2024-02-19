import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import BaseLayoutVue from '@/components/layout/BaseLayout.vue'
import { browserLocale } from '@/hooks/useLocale'

const routes = [
  {
    path: '',
    name: 'home',
    component: HomeView,
  },
  {
    path: 'about',
    name: 'about',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang(zh|ja)?',
      component: BaseLayoutVue,
      children: routes,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home', params: { lang: browserLocale() } },
    },
  ],
});

export default router
