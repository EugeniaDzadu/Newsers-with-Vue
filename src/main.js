import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/Index.vue'
import Contact from './pages/Contact.vue'
import DetailPage from './pages/Detail-page.vue'
import Error from './pages/404.vue'

// Vue.config.productionTip = false;


const routes = [
    {path: '/', component: Index},
    {path: '/Contact', component: Contact},
    {path: '/Detail-page', component: DetailPage},
    {path: '/404', component: Error}
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  const app = createApp(App)
  app.use(router)
  app.mount('#app')


// createApp(App).mount('#app')