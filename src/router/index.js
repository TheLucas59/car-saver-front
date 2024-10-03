import { createRouter, createWebHistory } from 'vue-router'
import CarList from '@/components/CarList.vue'
import CarDetails from '@/components/CarDetails.vue'
import CarCreator from '@/components/CarCreator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CarList
    },
    {
      path: '/details/:carId',
      component: CarDetails,
      props: true
    },
    {
      path: '/create',
      component: CarCreator
    }
  ]
})

export default router
