<template>
    <h2>Task Listing</h2>
    <ul class="taskview">
        <li v-for="(task,index) in allTasks" :key="task.id" :class="task.Priority">            
            <h3>Task id: {{task.id}}</h3>
            <h3 class="truncate">Task name: {{task.Name}}</h3>
            <p class="truncate">Task Description: {{task.Desc}}</p>
            <h4>Task priority: {{task.Priority}}</h4>
            <h5>Duration of task: {{task.Time}}</h5>
            <h5>Task assigned to: {{task.Assign}}</h5>
            <router-link class="viewdetail" :to="'/show/' + task.id">View Details</router-link>
            <div class="viewbtn">
                <ul>
                    <li>
                        <button class="btn custom-btn" @click="editTask(task.id)"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                    </li>
                    <li><button class="btn custom-btn" @click="deletTask(index)"><i class="fa fa-trash" aria-hidden="true"></i></button></li>
                </ul>
            </div>
        </li>
    </ul>
</template>
<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter();
        const allTasks = inject('tasks');
        console.log("Inside")
        console.log(allTasks)
        function editTask(id) {
            router.push('/task/' +id);
        }
        function deletTask(index) {
            allTasks.splice(index,1)
        }

        return {
            allTasks,
            editTask,
            deletTask
        }
    }
}
</script>