import { createRouter, createWebHistory } from 'vue-router'


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
  },
  {
    path: '/sample_1',
    name: 'Sample_1',
    component: () => import('@/pages/Sample_1.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/sample_app'),
  routes,
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
    })

  console.log(requiresAuth, document.cookie);

  if (requiresAuth && !isAuthenticated) {
    // Redirect to the login page if the user is not authenticated and the route requires authentication
    next({ name: "Login" });
  } else if (!requiresAuth && isAuthenticated) {
    // Redirect to the home page if the user is authenticated and the route does not require authentication
    next({ name: "Home" });
  } else {
    // Proceed with the route transition if the authentication conditions are satisfied
    next();
  }
});


export default router
