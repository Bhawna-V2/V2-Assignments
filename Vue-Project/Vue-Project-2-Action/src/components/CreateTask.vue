<template>
  <div class="add-task">
    <!-- <dashboard-details></dashboard-details> -->
    <div class="container mt-5">
      <div class="row">
        <h2 class="mb-5">Add Tasks</h2>
        <form class="addtask-form mb-4" @submit.prevent="AddTask()">
          <div class="col-12 mb-4">
            <label for="taskname">Task Name</label> <br />
            <input
              type="text"
              id="taskname"
              class="form-control"
              v-model="Task.taskName"
              required
            />
          </div>
          <div class="col-12 mb-4">
            <label for="taskdesc">Task Description</label>
            <textarea
              type="text"
              id="taskdesc"
              class="form-control"
              v-model="Task.taskDesc"
              maxlength="100"
              minlength="5"
            />
          </div>
          <div class="col-12 mb-4">
            <label for="taskpriority">Priority</label>
            <select
              class="form-control"
              id="taskpriority"
              v-model="Task.taskPriority"
              required
            >
              <option disabled value="">Priority</option>
              <option>Low</option>
              <option>High</option>
              <option>Medium</option>
            </select>
          </div>
          <div class="col-12 mb-4">
            <label for="estimatetime">Estimatted Time</label>
            <input
              type="date"
              id="estimatetime"
              class="form-control"
              v-model="Task.estimateTime"
              required
            />
          </div>
          <div class="col-12 mb-4">
            <label for="assignto">Assigned To</label>
            <select
              class="form-control"
              id="assignto"
              v-model="Task.assignTo"
              onfocus="this.size=5;"
              onblur="this.size=1;"
              onchange="this.size=1; this.blur();"
            >
              <option disabled value="">Select</option>
              <option v-for="userval in getAllUserData" :key="userval.id">{{
                userval.username
              }}</option>
              <!-- <option>Aditya Sethi</option>
              <option>Roma Ghosh</option> -->
            </select>
            <!-- <input
              type="text"
              id="assignto"
              class="form-control"
              v-model="Task.assignTo"
              required
            /> -->
          </div>
          <button
            class="btn btn-primary custom-btn"
            type="submit"
            v-if="showBtn"
          >
            Add Task
          </button>
          <button
            class="btn btn-primary custom-btn"
            type="button"
            @click="UpdateTask()"
            v-else
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
    <!-- Modal -->
    <!-- <div v-show="myModel">    
      <transition name="model" :duration="{ enter: 500, leave: 800 }">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" @click="myModel = false">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title">Modal</h4>
                </div>
                <div class="modal-body">
                  Are you goog to go!!!!
                  <div align="center">
                    <button
                      type="button"
                      class="btn btn-success btn-xs"
                      @click="myModel = false"
                    >
                      close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div> -->
  </div>

  <!-- <button type="button" class="btn btn-primary" @click="showModel = true">
    Open modal
  </button> -->

  <!-- <modal-vue :myModel="myModel" @closeModal="closePop()" @addTaskModal="addTaskData()"></modal-vue> -->
  <modal-vue v-if="myModel" @onClose="closePop" @addDataList="addTaskData"></modal-vue>
  <!-- <button type="button" class="btn btn-primary" @click="openModal">ADD</button> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ModalVue from "./ModalVue.vue";
export default {
  components: {
    ModalVue,
    //DashboardDetails
  },
  computed: {
    ...mapGetters(["getAllUserData", "getCreateTask"]),
    // userData() {
    //   return this.$store.getters.getAllUserData;
    //   // this.userData1 = this.$store.getters.getAllUserData();
    //   // return this.userData1
    // }
  },
  data() {
    return {
      name: "Create Task",
      Task: {
        id: "",
        taskName: "",
        taskDesc: "",
        taskPriority: "",
        estimateTime: "",
        assignTo: "",
      },
      showBtn: true,
      paramTaskId: "",
      correctValidation: false,
      showModel: false,
      myModel: false,
      //setCreate: []
    };
  },
  mounted() {
    this.paramTaskId = this.$route.params.id;
    console.log("ParamIdTask");
    console.log(this.paramTaskId);
    if (this.paramTaskId != undefined) {
      this.showBtn = false;
      this.Task = this.$store.getters.getCreateTask.find(
        (task) => task.id == this.paramTaskId
      );
      console.log(this.Task);
    }
  },
  methods: {
    ...mapActions(["setCreateTask"]),
    AddTask() {
      // this.ParamId = this.$router.replace({ name: "task-view", params: {id: new Date().getTime().toString()}, query: {} })
      // console.log(this.ParamId + "Id" + this.$router.params.id )
      //console.log(this.Task);
      this.Task.id = new Date().getTime().toString();
      // Validation on input to check name from json file
      this.myModel = true;
      //this.openModal();
      // this.validateAssignTo();
      // if (this.correctValidation) {
      //   //this.$store.dispatch('setCreateTask', this.Task),
      //   // this.myModel = true;
      //   this.setCreateTask(this.Task);
      //   // this.$router.push("/show-all-task/task/" + this.Task.id);
      //   this.$router.push("/show-all-task");

      // } else {
      //   alert("Assign to correct user");
      // }

      // End Validation on input to check name from json file

      //  this.setCreate = this.$store.getters.getCreateTask,
      //  alert("getter");
      //  console.log(this.setCreate)
      // this.insertTasks(this.Task);
    },
    addTaskData() {
      this.setCreateTask(this.Task);
      this.$router.push("/show-all-task");
    },
    closePop() {
      this.myModel = false;
    },

    // openModal() {
    //   this.myModel = true;
    // },
    // Validation on input to check name from json file
    validateAssignTo() {
      const jsonUserDataValidate = this.getAllUserData.find(
        (user) => user.username == this.Task.assignTo
      );
      if (jsonUserDataValidate) {
        console.log("Assign to correct");
        this.correctValidation = true;
      } else {
        console.log("Assign to Wrong");
        this.correctValidation = false;
      }
    },
    // End Validation on input to check name from json file
    UpdateTask() {
      //const index = this.$store.getters.getCreateTask.findIndex((task) => task.id == this.Task.id);
      const index = this.getCreateTask.findIndex(
        (task) => task.id == this.Task.id
      );
      console.log(index);
      // this.$store.getters.getCreateTask[index] = this.Task;
      // console.log(this.$store.getters.getCreateTask)
      this.getCreateTask[index] = this.Task;
      console.log(this.getCreateTask);
      this.$router.push("/show-all-task/");
    },
  },
  //inject: ["insertTasks"],
};
</script>

<style>

</style>