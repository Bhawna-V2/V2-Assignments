<template>
<div class="loginuser">
    {{loginUser.email}}
</div>
    <!-- <h4>User Celebrtion</h4> -->
    <div class="logUser">
        <h5>Logged In User</h5>
        <table>
            <tbody>
                <tr>
                    <td>{{loginUser.name}}</td>
                </tr>
                <tr>
                    <td>{{loginUser.dob}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="otherUser">
        <h5>All Team Members Data</h5>
        <table>
            <thead>
                <tr v-for="text in user" :key="text.id">
                    <td>{{text.name}}</td>
                    <td>{{text.dob}}</td>
                </tr>
            </thead>
        </table>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
//import { useRouter } from 'vue-router'

export default {
    setup() {
        const store = useStore();
        //const router = useRouter();

        function abc() {
            console.log("Data" +store.getters.getAllUserData)
        }
        return{
            user: computed(() => store.getters.getAllUserData),
            loginUser: computed(() => store.getters.getAppJsonUserListData),
            abc
        }
    }
}
</script>