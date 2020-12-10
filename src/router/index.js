import Vue from "vue";
import VueRouter from "vue-router";
//import { mapGetters } from "vuex";

Vue.use(VueRouter);

 //const user = mapGetters("auth", ["user"]);

const guest = (to, from, next) => {
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/login");
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: guest,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Auth/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: guest,
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Auth/Register.vue")
  },
  {
    path: "/registerEstablishment",
    name: "RegisterEstablishment",
    beforeEnter: guest,
    component: () =>
      import(/* webpackChunkName: "registerEstablishment" */ "../views/Auth/RegisterEstablishment.vue")
  },
  {
    path: "/homeDoctor",
    name: "HomeDoctor",
    beforeEnter: auth,
    component: () =>
      import(/* webpackChunkName: "homeDoctor" */ "../views/Auth/HomeDoctor.vue")
  },
  {
    path: "/homeEstablishment",
    name: "HomeEstablishment",
    beforeEnter: auth,
    component: () =>
      import(/* webpackChunkName: "homeEstablishment" */ "../views/Auth/HomeEstablishment.vue")
  },
  {
    path: "/homeEstablishementCodes",
    name: "HomeEstablishmentCodes",
    beforeEnter: auth,
    component: () =>
    import(/* webpackChunkName: "homeEstablishmentCodes" */ "../views/Auth/HomeEstablishmentCodes.vue")
  },{
    path: "/coronaAdvice",
    name: "CoronaAdvice",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Auth/CoronaAdvice.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
