
const routes = [
  {
    path: '/',
    meta: { title: 'Iniciar sesión' },
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        name: 'login',
        path: '/login',
        meta: { title: 'Iniciar sesión' },
        component: () => import('pages/Login-page.vue'),
      },
      {
        name: 'registrarse',
        path: '/registrarse',
        meta: {title: 'Registrate'},
        component: () =>import('pages/Sign-up.vue')
      }
    ]
  },

  {
    name: 'main',
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'adm',
        path: '/adm',
        meta: {title: 'Adm'},
        component: () => import('pages/Administrativo-page.vue')
      },
      {
        name: 'formProyecto',
        path: '/formProyecto',
        meta: {title: 'Alta Proyectos'},
        component: () => import('pages/Project-form.vue')
      },
      {
        name:'proyectos',
        path: '/proyectos',
        meta: {title: 'Proyectos'},
        component: () => import('pages/Proyectos-page.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
