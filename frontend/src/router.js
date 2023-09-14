import { createRouter, createWebHistory } from 'vue-router'

let reset_key = null

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/update_password',
    name: 'UpdatePassword',
    component: () => import('@/pages/UpdatePassword.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/sample_1',
    name: 'Sample_1',
    component: () => import('@/pages/Sample_1.vue'),
    meta: { requiresAuth: false }
  },
]

let router = createRouter({
  history: createWebHistory('/sample_app'),
  routes,
  // parseQuery(query) {
  //   // Parse query parameters as an object
  //   const params = {};

  //   query.split('&').forEach((param) => {
  //     const [key, value] = param.split('=');
  //     if (key && value !== undefined) {
  //       params[key] = decodeURIComponent(value);
  //     }
  //   });
  //   // console.log(params.key);
  //   reset_key = params.key
  //   console.log('qqqqq -', reset_key);
  //   return params;
  // },
  // stringifyQuery(params) {
  //   // Convert query parameters from an object back to a query string
  //   const query = Object.keys(params)
  //     .map((key) => `${key}=${encodeURIComponent(params[key])}`)
  //     .join('&');
  //   return query ? `?${query}` : '';
  // },
})



router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  const requiresAuth = !to.path.startsWith("/login");

  // Check if the user is authenticated
  let isAuthenticated = false;
  document.cookie
    .split('; ')
    .map((c) => c.split('='))
    .forEach(([key, value]) => {
      if (key === 'user_id' && value != 'Guest') {
        isAuthenticated = true
      }
      if (key === 'full_name') {
        localStorage.setItem('username', value)
      }
      if (key === 'user_id') {
        localStorage.setItem('user_id', value)
      }

    })

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next()
  }
  // to.matched.some((record) => console.log('auth', record.meta.requiresAuth))
  // if (requiresAuth && !isAuthenticated) {
  //   console.log('tt');
  //   // Redirect to the login page if the user is not authenticated and the route requires authentication
  //   next({ name: "Login" });
  // } else if (!requiresAuth && isAuthenticated) {
  //   // Redirect to the home page if the user is authenticated and the route does not require authentication
  //   next();
  // } else {
  //   // Proceed with the route transition if the authentication conditions are satisfied
  //   next();
  // }

});


export default router
