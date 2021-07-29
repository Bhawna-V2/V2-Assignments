<template>
    <div class="login-form">
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
           
        </form>
    </div>
</template>
<script>
import { reactive, computed } from 'vue' 
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


export default {
    setup() {
        const input = reactive ({
            userName: "",
            password: "",
        });

        const router = useRouter();
        const store = useStore();


        function LoginUser() {            
            axios.post("https://task-management-system-f2ce9-default-rtdb.firebaseio.com/userJson.json" , input).then(response => { 
                console.log(response.data.data)      
                // For all users Data
                const userData = response.data.data;          
                store.dispatch("setUsersList", userData)

                // For checking logged in user data
                const list = response.data.data.find((user)=> user.userName == input.userName && user.password == input.password);
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
            loggedIn: computed(() => store.getters.getLoggedIn) 
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