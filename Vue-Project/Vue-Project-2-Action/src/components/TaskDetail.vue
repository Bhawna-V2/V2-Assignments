<template>
<router-link class="p-3 link-route" to="/show-all-task">Back to Tasks Listing Page</router-link>
<!-- <p>User Id : {{this.taskId}}</p> -->
<div class="row p-4">
    <div class="col-sm-12">
        <div class="task-data p-4">
        <button class="btn btn-primary custom-btn mt-0 mb-4" type="button" @click="editTask()" style="float:right;">edit</button>
            <h5 class="mb-4"><strong>Task Name:</strong><br> {{task.taskName}}</h5>
            <p><strong>Task Description:</strong><br> {{task.taskDesc}}</p>
            <p><strong>Priority:</strong><br> {{task.taskPriority}}</p>
            <p><strong>Estimatted Time:</strong><br> {{task.estimateTime}}</p>
            <p><strong>Assigned To:</strong><br> {{task.assignTo}}</p>
        </div>        
    </div>
</div>

</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            taskId: this.$route.params.id,
            task: {},
            //profile: {}
        }
    },
    computed: {
        ...mapGetters(['getCreateTask'])
    },
    mounted() {
        // this.task = this.AddTasks.find((tasklist) => tasklist.id === this.taskId)
        // console.log(this.task);

        this.task = this.getCreateTask.find((tasklist) => tasklist.id === this.taskId)
        console.log(this.task);

        //this.getCreateTask = this.$store.getters.getCreateTask,
        // alert("getCreateTask")
        // console.log(this.getCreateTask)

        //this.profile = this.$store.getters.getProfileData;
        
    },
    methods: {
        editTask() {
            //this.task = this.$store.getters.getCreateTask
            console.log(this.getCreateTask)
            this.$router.push("/create-task/" +this.taskId)
        }
    },
    //inject: ["AddTasks"],
}
</script>