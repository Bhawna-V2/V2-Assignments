import { createStore } from 'vuex'

const store = createStore({
    state() {
        //return {}
        return {
            isLoggedIn: false,
            userName: '',
            profileData: {},
            createTask: [],
            userEditData: {},
            jsonUserData: {},
            JasonAllUserData: [],
        }
    },
    actions: {
        setAppJsonUserListData(context, jsonUserData) {
            context.commit('setAppJsonUserListData', jsonUserData)
        },
        // methods to be accessed in vue file   //Async
        login(context){
            console.log("inside before login in store")
            context.commit('setAuth', true);   //setAuth Mutation function
            console.log("inside login in store")
        },
        setUser(context , userName){
            context.commit('setUser', userName)            
        },
        setProfileData(context , profileData){
            context.commit('setProfileData', profileData)
        },
        setCreateTask(context, createTask) {
            context.commit('setCreateTask', createTask)  // calling mutations
        },
        setUserEditData(context, userEditData) {
            context.commit('setUserEditMutation', userEditData);
        },
        setJasonAllUserData(context, JasonAllUserData) {
            context.commit('setAllUserData', JasonAllUserData)
        }
    },
    mutations: {
        setAppJsonUserListData (state,payload) {
            state.jsonUserData = payload;
        },
        // helps ut to update state of our app   //synchronour
        setAuth(state, payload) {
            state.isLoggedIn = payload;
        },
        setUser(state, payload) {
            state.userName = payload;
        },
        setProfileData(state,payload) {
            state.profileData = payload;
        },
        setCreateTask(state,payload){
            //state.createTask = payload;
            state.createTask.push(payload);
        },
        // setUpdateTask(state,payload){
        //     state.createTask.push(payload);
        // },
        setUserEditMutation(state, payload) {
            state.userEditData = payload;
        },
        setAllUserData(state,payload) { 
            state.JasonAllUserData = payload;
        }
    },
    getters: {  
        getAppJsonUserListData(state) {
            return state.jsonUserData;
        },
        // to fetch the data from state
        loggedInStatus(state) {
            return state.isLoggedIn
        },
        getUser(state) {
            return state.userName
        },
        getProfileData(state) {
            return state.profileData
        },
        getCreateTask(state) {
            return state.createTask
        },
        getUserData(state) {
            return state.userEditData
        },
        getAllUserData(state) {
            return state.JasonAllUserData
        }
    }
});

export default store