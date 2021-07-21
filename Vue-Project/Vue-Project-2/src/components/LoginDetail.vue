<template>
  <div class="login-section">
    <form class="login-form" @submit.prevent="OnSubmit()">
      <h1>{{ headings }}</h1>
      <input
        type="text"
        placeholder="Username"
        name="username"
        id="username"
        class="form-control"
        v-model="input.username"
        @blur="validateData"
        :style="{ borderColor: !inValidInput ? 'red' : 'green' }"
      />
      <p v-if="!inValidInput" style="color:red;">
        Please enter the valid Username!!!!
      </p>

      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        class="form-control"
        v-model="input.password"
        @blur="validateData"
        :style="{ borderColor: !inValidInput ? 'red' : 'green' }"
      />
      <p v-if="!inValidInput" style="color:red;">
        Please enter password not more than 8 characters!!!
      </p>

      <button class="btn btn-primary custom-btn" type="submit">Log In</button>
      <!-- <button class="btn btn-primary custom-btn" type="button" v-on:click="OnSubmit()">Log In</button> -->
    </form>
  </div>
  <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
        // email: "bhawna@v2solutions.com"
      },
      inValidInput: true,
      headings: "Sign In",
      list: undefined,
      loading: false,
    };
  },
  //emit: ['input'],
  methods: {
    ...mapActions(['login','setUser','setAppJsonUserListData','setJasonAllUserData']),

    OnSubmit() {
      //console.log(this.input.username, this.input.password)
      // let url="userData.json"
      this.loading = true;
      setTimeout(() => {
        axios.get("userData.json").then((response) => {
          this.list = response.data.data;
          console.log(response.data.data);

          this.setJasonAllUserData(this.list)

          const compareval = this.list.find(
            (abc) =>
              abc.username == this.input.username &&
              abc.password == this.input.password
          );

          console.log(compareval);
          // if (this.input.username != "" && this.input.password != "")
          if (compareval) {
            console.log("signed in");
            this.loading = false;
           
            // this.$store.dispatch('login');
            this.login();
            this.setUser(compareval.username)
            this.setAppJsonUserListData(compareval);
            //this.$store.dispatch('setUser', compareval.username);
            this.$router.push("/logged-page");
            // this.$router.push("/dashboard-details/" + this.input.username);
          } else {
            this.loading = false;
            console.log(
              "Not a valid user!!! fill correct username and password"
            );
          }
        });
      }, 3000);

      //setTimeout(async function(){ alert("Loading......") }, 3000);
      // await new Promise(resolve => {
      //     setTimeout(resolve, 3000)
      // })
      // const sleep = require('util').promisify(setTimeout)
      // setTimeout(async () => {
      //     console.time("Slept for")
      //     await sleep(3000)
      //     console.timeEnd("Slept for")
      // })()

      //this.$emit('input', this.username , this.password , this.booleanData);
      // for(let test of this.list) {
      //     console.log("Username :"+test.username +"pass:"+test.password );
      // }
    },
    validateData() {
      if (this.input.username == "" && this.input.password == "") {
        this.inValidInput = false;
      } else {
        this.inValidInput = true;
      }
    },
  },
};
</script>

<style></style>
