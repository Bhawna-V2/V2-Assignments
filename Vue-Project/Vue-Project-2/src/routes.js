import {createRouter,createWebHistory} from 'vue-router'
import LoginDetails from './components/LoginDetail.vue'
import DashboardDetails from './components/DashboardDetail.vue'
import CreateTask from './components/CreateTask.vue'
import ShowAllTask from './components/ShowAllTask.vue'
import TaskDetail from './components/TaskDetail.vue'
import UserProfile from './components/UserProfile.vue'
import UserProfilePage from './components/UserProfilePage.vue'
import UserProfileAddEdit from './components/UserProfileAddEdit.vue'
import LoggedInPage from './components/LoggedInPage.vue'


import store from './store'

// router declaration and configuration
const router = createRouter({
    history: createWebHistory(),

    // Defination
    routes:[
    {
        path: "",
        redirect: "/login-details",
    },
    {
        path: "/login-details",
        component: LoginDetails
    },
    {
        path: "/dashboard-details",
        component: DashboardDetails,
        children: [
            {
                path: "/logged-page",
                component: LoggedInPage
            },
            {
                //name:"create-task",
                path: "/create-task",
                component: CreateTask
            },
            {
                //name:"create-task",
                path: "/create-task/:id",
                component: CreateTask
            },
            {
                //name:"show-all-task",
                path: "/show-all-task",
                component: ShowAllTask
            },
            {
                //name:"show-all-task",
                path: "/show-all-task/task/:id",
                component: ShowAllTask
            },
            {
                name: "task-view",
                path: "/show-all-task/:id",
                component: TaskDetail
            },
            {
                path: "/user-profile",
                component: UserProfile,
            },
            {
                //name: "user-profile",
                path: "/user-profile-page",
                component: UserProfilePage
            },
            {
                path: "/user-profile-data",
                component: UserProfileAddEdit
            },
        ]
    },
    {
        path: "/dashboard-details/:username",
        component: DashboardDetails,
    },
    // {
    //     path: "/create-task",
    //     component: CreateTask
    // },
    // {
    //     path: "/show-all-task",
    //     component: ShowAllTask
    // },
    // {
    //     name: "task-view",
    //     path: "/show-all-task/:id",
    //     component: TaskDetail
    // },
    // {
    //   path: "/:notFound(.*)",
    //   component: PageNotFound,
    // },
    ]
});
// Guard Concept
router.beforeEach((to, from, next) => {
    if(to.path !== '/login-details')
    {        
        if(store.getters.loggedInStatus) {
            next();
        } else {
            next("/login-details")
        }
    } else {
        next();
    }
    // console.log(to);    
    // console.log(from);
    // next();

});


export default router;