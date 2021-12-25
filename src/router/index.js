import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () =>
      import(/*webpackChunkName: 'product'*/ "../components/HomePage"),
    name: "home",
  },
  {
    path: "/about-us",
    component: () =>
      import(/*webpackChunkName: 'product'*/ "../components/AboutUs.vue"),
    name: "about_us",
  },

  {
    path: "/how-it-works",
    component: () =>
      import(/*webpackChunkName: 'cart'*/ "../components/HowItWorks.vue"),
    name: "how_it_works",
  },
  {
    path: "/impact",
    component: () =>
      import(/*webpackChunkName: 'checkout'*/ "../components/ImpactUs.vue"),
    name: "impact",
  },
  {
    path: "/signup",
    component: () =>
      import(/*webpackChunkName: 'checkout'*/ "../components/SignUp.vue"),
    name: "signup",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

//   const router = new VueRouter({
//     Routes // short for `routes: routes`
//   })

export default router;
