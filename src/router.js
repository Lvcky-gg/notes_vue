import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from "./views/ViewNotes.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Notes",
      component: ViewNotes,
    },
  ],
});

export default router;
