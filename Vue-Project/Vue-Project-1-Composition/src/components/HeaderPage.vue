<template>
    <nav>
        <ul class="navData">
            <li><router-link to="/task"><i class="fa fa-file-code-o" aria-hidden="true"></i> Add Task</router-link></li>
            <li><router-link to="/show"><i class="fa fa-database" aria-hidden="true"></i> Show Task</router-link></li>
        </ul>
        <ul class="userDetail">
            <!-- Store variable and name of the variable to get value -->
            <li><p><i class="fa fa-user-circle" aria-hidden="true"></i> {{loginUserData.userName}} </p></li>
            <li><a href="#" @click="logout"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
        </ul>
    </nav>
</template>
<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        function logout() {
            store.dispatch("logout");
            router.push("/login");
        }
        return {
            logout,
            // store variable : computed for mapGetters
            loginUserData : computed(() => store.getters.getLoginUserData)
        }
    }
}
</script>