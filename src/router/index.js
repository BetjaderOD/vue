import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
  //ruta base
  
      {
          path:'*',
          component:()=> import('../views/ErrorPages/Error404.vue')
      },
      {
        path:'/',
        redirect:'/inicio',
      },
    
    {
      path: '/inicio',
      component: ()=> import ('../Inicio.vue'),

      children: [
      
      {
        path: '/electronicos',
        name: 'electronicos',
        component: () => import('../components/jugetes/Electronicos.vue')
      },
      {
        path: '/peliculas',
        name: 'peliculas',
        component: () => import('../components/PeliculasView.vue')
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
        path: '/estufa',
        name: 'estufa',
        component: () => import('../components/electrodomesticos/Estufa.vue')
      },
      {
        path: '/hogar',
        name: 'hogar',
        component: () => import('../components/hogar/Limpieza.vue')
      },
      {
        path: '/industriales',
        name: 'industriales',
        component: () => import('../components/hogar/Industriales.vue')
      },  {
        path: '/formulario',
        name:'formulario',    
        component: () => import('../components/Formulario.vue')
    },
    {
      path:'/persona',
      name:'persona',
      component: () => import('../components/Persona.vue')
    }
     
      
    ]
  }
]

const router = new VueRouter({ routes, })
export default router;