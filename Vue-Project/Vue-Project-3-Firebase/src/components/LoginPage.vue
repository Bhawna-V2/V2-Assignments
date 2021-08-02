<template>
    <div>        
        <div class="login-box">            
            <ul class="tabs">
                <li class="tab" @click="logindata">Login</li>
                <li class="tab" @click="registerdata">Register</li>
            </ul>
            <div class="login-form"  v-if="showLoginTab">
                <form action="" @submit.prevent="LoginUser">
                    <div class="input-group margin-bottom-sm">
                        <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw"></i></span>
                        <input class="form-control" type="text" name="userName" id="userName" placeholder="Username" v-model="input.userName">
                    </div>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
                        <input class="form-control" type="password" name="password" id="password" placeholder="Password" v-model="input.password">
                    </div>
                    <!-- <div><i class="fa fa-user-circle-o" aria-hidden="true"></i> <input type="text" name="userName" id="userName" placeholder="Username" v-model="input.userName"></div>
                    <div><i class="fa fa-lock" aria-hidden="true"></i> <input type="password" name="password" id="password" placeholder="Password" v-model="input.password"></div> -->
                    <button type="submit" class="btn custom-btn"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button> 
                    <a href="#" @click="registerdata">Not a registered User? Create new account</a>               
                </form>                
            </div>
            <registration-page v-else></registration-page>
        </div>
    </div>
</template>
<script>
import { ref, reactive, computed } from 'vue' 
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import RegistrationPage from './RegistrationPage.vue'


export default {
    components: {RegistrationPage},
    setup() {
        const input = reactive ({
            userName: "",
            password: "",
        });
        let showLoginTab = ref(true);

        const router = useRouter();
        const store = useStore();
        function logindata() {
            showLoginTab.value = true;
        }
        function registerdata(){
            showLoginTab.value = false;
        }
        function covertFirebaseDataInToArray(data) {
            console.log(data)
            var dataInArray = []
            for(var key in data) {
                var user = {
                    id: key,
                    ...data[key],
                }
                dataInArray.push(user)
                console.log("Array Data")
                console.log(dataInArray)
            }
            return dataInArray;
        }

        function LoginUser() {            
            // axios.post("https://task-management-system-f2ce9-default-rtdb.firebaseio.com/userJson.json" , input).then(response => { 
            axios.get("https://task-management-system-f2ce9-default-rtdb.firebaseio.com/userJson.json").then(response => { 
                // Firebase data give data in object now we need to covert data in array format so that we can fetch data
                console.log(response.data)      
                // For all users Data
                let userList = covertFirebaseDataInToArray(response.data);
                console.log(userList);

                const userData = userList; 
                store.dispatch("setUsersList", userData)

                // For checking logged in user data
                const list = userList.find((user)=> user.userName == input.userName && user.password == input.password);
                console.log("Login User Data List")
                console.log(list)
                if(list) {
                    store.dispatch("setLoginUserData", input)
                    store.dispatch('setLoggedIn');
                    router.push('/logged');
                }
            })
        }
        return {
            input,
            LoginUser,
            loggedIn: computed(() => store.getters.getLoggedIn),
            logindata,registerdata,
            showLoginTab
        }
    },


    // data() {
    //     return {
    //         input: {
    //             userName: "",
    //             password: "",
    //         },
    //         list: ''
    //     }
    // },
    // computed: {
    //     ...mapGetters(['getLoggedIn'])
    // },
    // methods: {
    //     ...mapActions(['setLoggedIn']),
    //     LoginUser() {
    //         console.log(this.input.userName + '*****' + this.input.password)
    //         axios.get("userJson.json")
    //         .then((response) => {
    //             this.list = response.data.data
    //             console.log(this.list);

    //             this.compareVal = this.list.find((user) => user.userName == this.input.userName && user.password == this.input.password)
    //             console.log(this.compareVal)
    //             if(this.compareVal) {                
    //                 this.setLoggedIn();
    //                 console.log(this.getLoggedIn)
    //             }
    //         })
           
    //     }
    // }
};
</script>