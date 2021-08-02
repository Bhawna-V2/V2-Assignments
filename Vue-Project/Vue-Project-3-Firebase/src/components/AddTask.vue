<template>
    <div class="addtask">
        <h2>Add Task</h2>
        <form action="" @submit.prevent="addTaskData()">
            <input type="text" id="taskname" placeholder="Task Name" v-model="task.Name" required>
            <textarea rows="5" class="taskdesc" id="description" type="text" placeholder="Task Description" v-model="task.Desc" minlength="10" maxlength="100" required></textarea>
            <!-- <input type="text" id="priority" placeholder="Priority" v-model="task.Priority"> -->
            <select id="priority"  placeholder="Task Priority" v-model="task.Priority" required>
                <option value="" disabled selected>Task Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Middle</option>
                <option value="High">High</option>
            </select>
            <input type="date" placeholder="Estimatted Time" v-model="task.Time" required>
            <select id="assignto" placeholder="AssignTo" v-model="task.Assign" required>
                <option value="" disabled selected>AssignTo</option>
                <option value="Bhawna">Bhawna</option>
                <option value="Mahi">Mahi</option>
                <option value="Mahir">Mahir</option>
            </select>
            <button type="submit" class="btn custom-btn" v-if="showBtn">Add</button>
            <button type="button" class="btn custom-btn" v-else @click="UpdateTask()">Update</button>
        </form>
    </div>
</template>
<script>
import { ref, reactive , inject  } from "vue" 
import { useRouter, useRoute } from 'vue-router'

export default {
    setup() {
        
        const showBtn = ref(true);
        const router = useRouter();
        const route = useRoute();
        let task = reactive({
            id: '',
            Name: '',
            Desc: '',
            Priority: '',
            Time: '',
            Assign: ''
        });         
        const addTask = inject("addTask");
        console.log("tasks inject")

        // Need to inject tasks while find ID when editing
        console.log(inject("tasks"))
        const tasks = inject("tasks")    

        function addTaskData() {
            task.id = new Date().getTime().toString();
            addTask(task)           
            router.push("/show")
        }


        const routeParamId = route.params.id
        console.log(routeParamId)
        if(routeParamId != undefined) {
            showBtn.value = false;
            // Need to inject tasks while find ID when editing
            task = tasks.find(taskid => taskid.id == routeParamId)
            console.log(task)          
        }

        function UpdateTask() {
            const index = tasks.findIndex(index => index.id == routeParamId)
            console.log(index)
            // Need to inject tasks while find ID when updating
            tasks[index] = task
            router.push("/show")
        }

        return {
            task,
            showBtn,
            addTaskData,
            UpdateTask,
            tasks
        }
    }
}
</script>