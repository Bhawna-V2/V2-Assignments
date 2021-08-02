<template>
    <!-- <h4>Logged In Page</h4> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <user-celebration></user-celebration>
        </div>
        <div class="col-sm-9">
          <userdashboard></userdashboard>
        </div>
      </div>
    </div>
</template>
<script>
import userCelebration from './userCelebration.vue'
import Userdashboard from './userDashboard.vue'
export default {
  components: { userCelebration, Userdashboard },
    setup() {
        
    }
}
</script>