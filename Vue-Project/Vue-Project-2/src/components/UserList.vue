<template>
    <h2>UserList </h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Date of Joining</th>
                <th>Designation</th>
            </tr>
            <tr v-for="users in usersList" :key="users.id">
                <td>{{users.name}}</td>
                <td>{{users.gender}}</td>
                <td>{{users.dob}}</td>
                <td>{{users.doj}}</td>
                <td>{{users.designation}}</td>
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