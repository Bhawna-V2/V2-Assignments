<template>
    <router-view></router-view>
</template>
<script>
export default {
    data() {
        return {
            tasks: [],
        };
    },  
    methods: {
        insertTask(insertData){
            this.tasks.push(insertData);
        },
    },
    provide() {
        return {
            AddTasks : this.tasks,
            insertTasks: this.insertTask
            // ParamId : this.tasks.id (new Date().getTime().toString()),
        };
    },
};
</script>