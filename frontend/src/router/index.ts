import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MatriculaView from '../views/MatriculaView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({

history: createWebHistory(),

routes: [

{
path: '/',
name: 'home',
component: HomeView
},

{
path: '/matricula',
name: 'matricula',
component: MatriculaView
},

{
path: '/admin',
name: 'admin',
component: AdminView
}

]

})

export default router