<template>
  <header-page v-if="loggedIn"></header-page>
  <router-view></router-view>
</template>

<script>
import { reactive,  computed , provide } from 'vue'
import { useStore } from 'vuex'
import HeaderPage from './components/HeaderPage.vue';
  export default {
    components: { HeaderPage }, 
    setup() {
      const store = useStore();
      const tasks = reactive([]);


      function addTask(addTask){
        tasks.push(addTask)
      }

      provide("tasks", tasks)  // inject to show
      provide("addTask", addTask) // inject to add task fucntion

      return { loggedIn: computed(() => store.getters.getLoggedIn)}
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
