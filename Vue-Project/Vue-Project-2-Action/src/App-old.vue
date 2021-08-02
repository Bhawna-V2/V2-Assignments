<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <router-link to="login-details" class="">Login Page</router-link>
  <router-link to="dashboard-details" class="">Dashboard</router-link> -->

  <!-- Starting point for the components -->
  

      <!-- <ul>
        <li v-for="lists in list" v-bind:key="lists.username">
          <span>{{lists.username}}</span>
        </li>
      </ul>
  <user-list-data></user-list-data> -->
  <div v-if="showForm"> 
    <login-details @input="loginData"></login-details> 
  </div>
  <div v-else>
    <dashboard-details :username=dashboardname></dashboard-details>
  </div>

  <router-view></router-view>
  
  <!-- <button type="button" @click="loginData" >test</button> -->
    
    
</template>

<script>
//import userListData from './components/userListData.vue'
import LoginDetails from './components/LoginDetail.vue'
import DashboardDetails from './components/DashboardDetail.vue'
import axios from 'axios'

export default {
  components: {    
   // userListData,
    LoginDetails,
    DashboardDetails
  }, 
  data() {
    return {      
      showForm: true,
      dashboardname: '',
      dashboardpass: '',
      list: undefined
      // userlogs: [
      //   {
      //     username: "Mahi",
      //     password: "111111"
      //   },
      //   {
      //     username: "Bhawna",
      //     password: "123456"
      //   },
      //   {
      //     username: "Mahir",
      //     password: "121212"
      //   }
      // ]
    }
  },
  mounted(){
    let url="userData.json"
    axios
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
  },
  methods: {
    // loginData(userval , userpass , check1) {    //passing value from child to parent
    loginData(userval, userpass) { 
      // Using Direct Data
      // for(let test of this.userlogs) {
      // console.log("Username :"+test.username +"pass:"+test.password );
      // }
    // using data from Json file local
      for(let test of this.list) {
        console.log("Username :"+test.username +"pass:"+test.password );
      }
    // const compareval = this.userlogs.find((x) => x.userval === this.username && x.userpass === this.password);
  //const compareval = this.userlogs.find((abc) => abc.username == userval && abc.password == userpass);
    var compareval = this.list.find((abc) => abc.username == userval && abc.password == userpass);
    //console.log("Compare Val username in parent" +compareval.username);
    //  console.log("Compare Val Password in parent" +compareval.password);
    //  this.showForm = check1;
    //this.dashboard = compareval
    this.dashboardname = compareval.username;
    this.dashboardpass = compareval.password;
    console.log("this dashboard"+ this.dashboardname)
    console.log("this dashboard password"+ this.dashboardpass)

     if(compareval) {
       this.showForm = !this.showForm;
     } else {
       console.log("Not a valid user");
     }

      //console.log("User Value from child " + userval);
      //console.log("Password Value from child" + userpass)

      // if( userval === compareval.username) {
      //   this.showForm = !this.showForm;
      // } else {
      //   console.log("Not a valid user");
      // }
      // this.showForm = check1;
      // console.log("Arguments" + args.length );
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
