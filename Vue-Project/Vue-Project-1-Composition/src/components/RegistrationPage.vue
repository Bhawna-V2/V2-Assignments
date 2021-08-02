<template>
    <div class="register-form">
        <!-- <h1>Registratoin</h1> -->
        <form action="" @submit.prevent="register">
            <input type="text" name="username" id="username" v-model="input.userName" placeholder="UserName">
            <input type="text" name="password" id="password" v-model="input.password" placeholder="Password">
            <input type="text" name="firstName" id="firstName" v-model="input.firstName" placeholder="First Name">
            <input type="text" name="lastName" id="lastName" v-model="input.lastName" placeholder="Last Name">      
            <select name="gender" id="gender" v-model="input.gender" placeholder="Gender"> 
                <option selected aria-readonly="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input type="date" name="dob" id="dob" v-model="input.Dob" placeholder="Date of birth">
            <input type="date" name="doj" if="doj" v-model="input.Doj" placeholder="Date of Joining">
            <button type="submit" class="btn custom-btn">Submit</button>
            <a href="#">Already Resigtered ! Go to Login</a>
        </form>
     </div>
</template>

<script>
import {reactive} from 'vue';
import axios from 'axios';
export default {
    setup() {
        let input = reactive ({
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            gender: "",
            Dob: "",
            Doj: "",
        });
        function register () {
            axios.post("https://task-management-system-f2ce9-default-rtdb.firebaseio.com/userJson.json", input);
            // $emit('')
        }
        return {
            input,
            register
        }
    }
}
</script>

<style>

</style>