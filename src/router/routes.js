
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/Login-page.vue') },
      { path: '/adm', component: () => import('pages/Administrativo-page.vue') },
      { path: '/registrarse', component: () => import('pages/Sign-up.vue') }
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
