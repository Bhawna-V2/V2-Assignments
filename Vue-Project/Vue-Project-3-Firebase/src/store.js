import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            loggedIn : false,
            loginUserData : '',
            usersList: ''
        }
    },
    actions: {
        setLoggedIn(context) {
            context.commit('setAuth', true);
        },
        logout(context) {
            context.commit('setAuth', false)
        },
        setLoginUserData(context, loginUserData) {
            context.commit('setLoginUserData', loginUserData)
        },
        setUsersList(context,usersList) {
            context.commit('setUsersList',usersList)
        }
    },
    mutations: {
        setAuth(state,payload) {
            state.loggedIn = payload;
        },
        setLoginUserData(state,payload) {
            state.loginUserData = payload;
        },
        setUsersList(state,payload) {
            state.usersList = payload;
        }
    },
    getters: {
        getLoggedIn(state) {
            return state.loggedIn;
        },
        getLoginUserData(state) {
            return state.loginUserData;
        },
        getUsersList(state) {
            return state.usersList;
        }
    }
});

export default store