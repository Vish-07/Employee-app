import { createRouter, createWebHistory } from 'vue-router'
import EmployeeList from '../views/EmployeeList.vue'
import Add from '@/views/Add.vue'
import Edit from '@/views/Edit.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/employee',
    name: 'EmployeeList',
    component: EmployeeList
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/employee/add',
    name: 'employeeAdd',
    component: Add
    
  },
   {
    path: '/employee/edit',
    name: 'employeeEdit',
    component: Edit
    
  },
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
