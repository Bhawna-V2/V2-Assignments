<template>
  <div>
    <!-- <dashboard-details></dashboard-details> -->
    <div class="p-5">
      <h3 class="mb-5">Here's the list of all the task assigned!!!!</h3>
      <p>{{ this.paramId }}</p>

      <table class="task-list">
        <tr>
          <th>Task Name</th>
          <th>Task Description</th>
          <th>Priority</th>
          <th>Estimatted Time</th>
          <th>Assigned To</th>
          <th>View Details</th>
          <th></th>
        </tr>
        <tr v-for="(task, index) in getCreateTask" :key="task.id">
          <td>{{ task.taskName }}</td>
          <td class="ellipsis">{{ task.taskDesc }}</td>
          <td>{{ task.taskPriority }}</td>
          <td>{{ task.estimateTime }}</td>
          <td>{{ task.assignTo }}</td>
          <!-- <td><router-link :to="{ name: 'task-view', params: { id: task.id }}">View Details</router-link></td> -->
          <td>
            <router-link :to="'/show-all-task/' + task.id"
              >View Details</router-link
            >
          </td>
          <td>
            <button
              class="btn btn-primary custom-btn m-0"
              @click="editTask(task.id)"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              class="btn btn-primary custom-btn m-0"
              @click="deletetask(index)"
            >
              Delete
            </button>
          </td>
        </tr>
        <!-- <tr>
                <td>{{AddTasks.taskName}}</td>
                <td>{{AddTasks.taskDesc}}</td>
                <td>{{AddTasks.taskPriority}}</td>
                <td>{{AddTasks.estimateTime}}</td>
                <td>{{AddTasks.assignTo}}</td>
                <td><router-link :to="{ name: 'task-view', params: { id: new Date().getTime().toString() }}">View Deatils</router-link></td>
            </tr> -->
      </table>
    </div>
  </div>
</template>
<script>
//import DashboardDetails from './DashboardDetail.vue'
import { mapGetters } from "vuex";
export default {
  components: {
    //DashboardDetails
  },
  data() {
    return {
      name: "Show All Tasks",
      getCreateTask1: [],
      // paramId: this.$route.params.id
      //params: { userId : new Date().getTime().toString() },
    };
  },
  computed: {
    ...mapGetters(["getCreateTask"]),
  },
  methods: {
    deletetask(index) {
      this.getCreateTask.splice(index, 1);
    },

    editTask(id) {
      this.$router.push("/create-task/" + id);
    },
  },
  mounted() {
    //this.ParamId = this.$router.push({ name: "task-view", params: {id: new Date().getTime().toString()}, query: {} })
    // console.log(this.ParamId + "Id" + this.$router.params.id )
    (this.getCreateTask1 = this.getCreateTask),
      //alert("getCreateTask")
      console.log(this.getCreateTask);
  },
  //inject: ['AddTasks'],
};
</script>
<style>
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
}
</style>