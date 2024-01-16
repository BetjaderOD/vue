import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
   //ruta base
{
    path:'/',
    redirect: '/inicio'
},
{
    path: '/',
    component:{
        render(c){
            return c ('router-view')
        },
    },
    children:[
        {
          path: '/inicio',
          name: 'inicio',
          component: () => import('../components/Inicio.vue')
        },
        {
            path: '/electronicos',
            name: 'electronicos',
            component: () => import('../components/jugetes/Electronicos.vue')
          },
          {
            path: '/juegos',
            name: 'juegos',
            component: () => import('../components/jugetes/Juegos.vue')
          },
          {
            path: '/electrodomesticos',
            name: 'electrodomesticos',
            component: () => import('../components/electrodomesticos/Cocina.vue')
          },
          {
            path: '/hogar',
            name: 'hogar',
            component: () => import('../components/hogar/Limpieza.vue')
          }
      ]
}
]

const router = new VueRouter({ routes, })
export default router;