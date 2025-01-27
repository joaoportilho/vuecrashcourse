import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobView from '@/views/JobView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobPageView from '@/views/JobPageView.vue';
import AddJobView from '@/views/AddJobView.vue';
import EditJobView from '@/views/EditJobView.vue';
// import TesteView from '@/views/TesteView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: JobView
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobPageView
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJobView
    },
    {
      path: '/:catchall(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJobView
    },
    // {
    //   path: '/teste',
    //   name: 'teste',
    //   component: TesteView
    // }
  ]
})

export default router
