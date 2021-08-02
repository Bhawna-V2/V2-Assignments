import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import HeaderPage from './components/HeaderPage.vue'
import LoggedInPage from './components/LoggedInPage.vue'
import AddTask from './components/AddTask.vue'
import ShowTask from './components/ShowTask.vue'
import TaskDetail from './components/TaskDetail.vue'
import UserList from './components/UserList.vue'
import RegistrationPage from './components/RegistrationPage.vue'

// import store from './store.js'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        { path: '', redirect: '/login' },
        { path: '/login', component: LoginPage },
        { path: '/logged', component: LoggedInPage },
        { path: '/task', component: AddTask},
        { path: '/task/:id', component: AddTask},
        { path: '/show', component: ShowTask},
        { path: '/show/:id', component: TaskDetail },
        { path: '/header', component: HeaderPage},
        { path: '/user', component: UserList},
        { path: '/register', component: RegistrationPage},
    ]    
});
// router.beforeEach((to, from, next) => {
//     if(to.path !== '/login') {
//         if(store.getters.getLoggedIn) {
//             next();
//         } else {
//             alert("Please log in");
//             next('/login')
//         }
//     } else {
//         next();
//     }
// })

export default router;