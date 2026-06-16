import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Imprint from '../views/Imprint.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/imprint', component: Imprint },
  { path: '/privacy-policy', component: PrivacyPolicy },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
