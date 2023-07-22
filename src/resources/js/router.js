import { createRouter,createWebHistory } from 'vue-router';
import Test from "../views/Test.vue";

const routes = [
    { path: '/test', name: 'home', component:  Test},
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router;
