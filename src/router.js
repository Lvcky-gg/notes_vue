import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from "./views/ViewNotes.vue";
import ViewStats from "./views/ViewStats.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Notes",
      component: ViewNotes,
    },
    {
      path: "/stats",
      name: "Stats",
      component: ViewStats,
    },
  ],
});

export default router;
