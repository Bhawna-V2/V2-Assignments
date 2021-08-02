<template>
    <h2>UserList </h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Username</th>
                <th>Password</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Date of Joining</th>
            </tr>
            <tr v-for="users in usersList" :key="users.id">
                <td>{{users.userName}}</td>
                <td>{{users.password}}</td>
                <td>{{users.firstName}}</td>
                <td>{{users.lastName}}</td>
                <td>{{users.gender}}</td>
                <td>{{users.Dob}}</td>
                <td>{{users.Doj}}</td>
            </tr>
        </thead>
    </table>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore();
        return {
            usersList: computed(() => store.getters.getUsersList )
        }
    }
}
</script>