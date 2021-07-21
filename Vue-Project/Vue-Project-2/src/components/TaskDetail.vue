<template>
    <h2>Task Detail</h2>
    <table>
        <tr>
            <th colspan="2" style="text-align:left;"><router-link to="/show">Back to All tasks Page</router-link></th>
        </tr>
        <tr>
            <th>Task Id</th>
            <td>{{taskId}}</td>
        </tr>
        <tr>
            <th>Task Name</th>
            <td>{{task.Name}}</td>
        </tr>
        <tr>
            <th>Task Description</th>
            <td><div class="table-desc">{{task.Desc}}</div></td>
        </tr>
        <tr>
            <th>Priority of task:</th>
            <td :class="task.Priority">{{task.Priority}}</td>
        </tr>
        <tr>
            <th>Duration of task:</th>
            <td>{{task.Time}}</td>
        </tr>
        <tr>
            <th>Task assigned to:</th>
            <td>{{task.Assign}}</td>
        </tr>
    </table>
</template>
<script>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const allTasks = inject('tasks');
        const route = useRoute();

        const taskId = route.params.id;
        // console.log(taskId) 
        // console.log(allTasks)     
        const task= allTasks.find((task) => task.id === route.params.id)        
        return {
            task,
            taskId
        }
    }
}
</script>