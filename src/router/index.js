import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BoardList from '../views/BoardList.vue'
import Boards from '../views/Boards.vue'
import MyBoard from '../views/MyBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'HomeLayout'},
    component: Home
  },
  {
    path: '/BoardList',
    name: 'BoardList',
    meta: {layout: 'MainBoardLayout', title: 'Статистика'},
    component: BoardList
  },
  {
    path: '/boards',
    name: 'Boards',
    meta: {layout: 'MainBoardLayout'},
    component: Boards
  },
  {
    path: '/boards/my_board/:id/',
    name: 'MyBoard',
    meta: {layout: 'MainBoardLayout', title: 'Моя доска'},
    component: MyBoard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
