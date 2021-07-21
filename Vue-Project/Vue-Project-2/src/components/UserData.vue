<template>
    <div class="user-data">
        <!-- <h4>User email: {{email}}</h4> -->
        <h4>User FirstName : {{user.firstName}} </h4>
        <h4>User FirstName : {{user.lastName}} </h4>
        <h4>City Name:{{City}}</h4>

        <button @click="updatedata">Update Log</button>
    </div>
</template>
<script>
import {inject} from "vue"
export default {
    props: ["user"],
    // methods: {
    //     updatedata() {
    //         console.log("User FirstName" +this.user.firstName );
    //         console.log("User LastName " +this.user.lastName );
    //     }
    // },
    setup(properties) {
        function updatedata() {
            console.log("User FirstName" +properties.user.firstName );
            console.log("User LastName " +properties.user.lastName );
        }
        const City=inject('city');
        return {updatedata,City}
    },
    // data(){
    //     return {
    //         name: "userData",
    //         email: "bhawna.gupta@v2soplutions.com"
    //     }
    // }
}
</script>