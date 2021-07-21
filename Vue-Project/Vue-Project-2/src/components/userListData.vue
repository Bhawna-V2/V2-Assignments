<template>
    <h1>User List  Data</h1>
     <button v-on:click="getData">Get Data</button>

     <table border="1px">
         <tr>
             <!-- <th>Employee Id</th>
             <th>Employee Name</th>
             <th>Employee Salary</th>
             <th>Employee Age</th> -->
             <th>Username</th>
             <th>Password</th>
         </tr>
         <tr v-for="item in list" v-bind:key="item.username">
             <!-- <td>{{item.id}}</td>
             <td>{{item.employee_name}}</td>
             <td>{{item.employee_salary}}</td>
             <td>{{item.employee_age}}</td> -->
             <td>{{item.username}}</td>
             <td>{{item.password}}</td>
         </tr>
     </table>
</template>
<script>
import axios from 'axios'

export default {
    name: 'UserList',
    data() {
        return {
            // list: undefined
            list: undefined
        }
    },
    methods: {
        async getData() {
            let url="userData.json"
            axios
            //.get("http://dummy.restapiexample.com/api/v1/employees")
            .get(url)
            .then((response) => {
                this.list=response.data.data;
                console.log(response.data.data)
            })
            .catch((err) => {
            console.log("catch" + err.message);
            })
            .finally(() => {
            console.log("finally");
            });
        }
    }
}
</script>