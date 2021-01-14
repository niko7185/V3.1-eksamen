import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/brews/Home.vue'
import ChooseBeans from '../views/brews/ChooseBeans.vue'
import ChooseRecipe from '../views/brews/ChooseRecipe.vue'
import ChooseGuide from '../views/brews/ChooseGuide.vue'
import AdjustRecipe from '../views/brews/AdjustRecipe.vue'
import BrewingGuide from '../views/brews/BrewingGuide.vue'
import Brews from '../views/brews/Brews.vue'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/brews',
    name: 'Brews',
    component: Brews,
    children: [
      {
        path: "beans",
        component: ChooseBeans,
      },
      {
        path: "recipe",
        component: ChooseRecipe,
      },
      {
        path: "adjust",
        component: AdjustRecipe,
      },
      {
        path: "guide",
        component: ChooseGuide,
      },
    ]
  },
  {
    path: "/recipe:brewId",
    component: BrewingGuide,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
