<template>
    <!-- <h4>Logged In Page</h4> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <user-list></user-list>
        </div>
      </div>
    </div>
</template>
<script>
import UserList from './UserList.vue'
export default {
  components: { UserList },
    setup() {
        
    }
}
</script>