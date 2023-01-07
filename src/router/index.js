import { createWebHistory, createRouter } from "vue-router";

import LoginPage from "../components/Pages/LoginPage";
import RegisterPage from "../components/Pages/RegisterPage";
import ProfilePage from "../components/Pages/ProfilePage";
import VerificationEmailPage from "../components/Pages/VerificationEmailPage";

const routes = [
  // { path: "/", name: "WebsiteAnalyticsPage", component: WebsiteAnalyticsPage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  { path: "/profile", name: "ProfilePage", component: ProfilePage },
  {
    path: "/verification",
    name: "VerificationEmailPage",
    component: VerificationEmailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
