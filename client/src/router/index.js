import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Nosotros from '../views/Nosotros.vue'
//import Contactenos from '../views/Contáctenos.vue'
//import GoogleMap from '../views/GoolgeMap.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: Nosotros

  },
  // {
  //   path: "/googleMap",
  //   name: "GoogleMap",
  //   component: GoogleMap

  // },
  // {
  //   path: "/contáctenos",
  //   name: "Contáctenos",
  //   component: Contactenos

  // },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/:category",
    // name: "Category",
    component: Category
  },

  

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
