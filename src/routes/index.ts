
import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import About from '../components/About.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;

