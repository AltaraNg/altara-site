import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () =>
      import(/*webpackChunkName: 'product'*/ "../views/HomePage"),
    name: "home",
  },
  {
    path: "/about-us",
    component: () =>
      import(/*webpackChunkName: 'product'*/ "../views/AboutUs.vue"),
    name: "about_us",
  },

  {
    path: "/how-it-works",
    component: () =>
      import(/*webpackChunkName: 'cart'*/ "../views/HowItWorks.vue"),
    name: "how_it_works",
  },
  {
    path: "/impact",
    component: () =>
      import(/*webpackChunkName: 'checkout'*/ "../views/ImpactUs.vue"),
    name: "impact",
  },
  {
    path: "/careers",
    component: () =>
      import(/*webpackChunkName: 'checkout'*/ "../views/CareerPage.vue"),
    name: "careers",
  },
  {
    path: "/signup",
    component: () =>
      import(/*webpackChunkName: 'checkout'*/ "../views/SignUp.vue"),
    name: "signup",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, ) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
