
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
        name: 'formcliente',
        path: '/formcliente',
        meta: {title: 'Alta Cliente'},
        component: () => import('pages/Form-client.vue')
      },
      {
        name:'facturacion',
        path: '/facturacion',
        meta: {title: 'Facturacion'},
        component: () => import('pages/Facturacion-page.vue')
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
