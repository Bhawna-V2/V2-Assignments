<template>
  <div class="nav-section">
    <ul class="pull-left">
      <img alt="logo" src="../assets/logo.png" />
      <li><router-link to="/create-task">Create Task</router-link></li>
      <li><router-link to="/show-all-task">Show All Task</router-link></li>
    </ul>
    <ul class="pull-right">
      <!-- <li><p>Welcome ! {{ routeParam }}</p></li> -->
      <li>
        <p>Welcome ! {{ getUser }}</p>
      </li>
      <!-- <li><router-link to="/login-details">Logout</router-link></li> -->
      <li>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle  pt-0 pb-0"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img alt="User Picture" src="../assets/avatar.png" />
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <!-- <a class="dropdown-item" href="#">User Profile</a> -->
            <router-link class="dropdown-item" to="/user-profile-data"
              >User Profile</router-link
            >
            <a href="#" class="dropdown-item" @click="logout()">Logout</a>
            <!-- <router-link class="dropdown-item" to="/login-details">Logout</router-link> -->
            <!-- <a class="dropdown-item" href="#">Logout</a> -->
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- {{ getAppJsonUserListData.email }} -->
  <auto-logout></auto-logout>
  <router-view></router-view>
</template>

<script>
import { mapGetters } from "vuex";
import AutoLogout from "./AutoLogout.vue";

export default {
  components: { AutoLogout },
  //props: ['username'],
  data() {
    return {
      routeParam: this.$route.params.username,
      userData: "",
      jsonData: "",
    };
  },
  computed: {
    ...mapGetters(["getAppJsonUserListData", "getUser", "loggedInStatus"]),
    // user() {
    //  return this.$store.getters.getAppJsonUserListData
    // }
  },
  methods: {
    logout() {
      alert("inside dashboard logout");
      this.$store.commit("setAuth", false);
      this.$route.push("/login-details");
    },
  },
  created() {
    //const LogginStatus =  this.$store.getters.loggedInStatus;
    //console.log(this.$store.getters.loggedInStatus)
    //  this.userData = this.$store.getters.getUser;
    //console.log(userData)
  },
};
</script>
<style></style>
