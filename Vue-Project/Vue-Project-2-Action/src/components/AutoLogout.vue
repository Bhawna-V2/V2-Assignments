<template>    
    <div v-if="warningZone">This Warning!! Are you still with us!</div>
</template>
<script>
export default {
    name: "AutoLogout",
    data() {
        return {
            events : ['click', 'mousemove', 'mousedown', 'scroll', 'keypress', 'load'],

            warningTimer : null,
            logoutTimer : null,
            warningZone : false
        }
    },
    mounted() {
        this.events.forEach(function (event) {
            window.addEventListener(event , this.resetTimer);
        }, this);
        this.setTimers();
    },
    unmounted() {
        this.events.forEach(function (event) {
            window.removeEventListener(event , this.resetTimer);
        }, this);
        this.resetTimer();
    },
    methods: {
        setTimers() {
            this.warningTimer = setTimeout(this.warningMessage, 14 * 60 * 1000);  //14 mins - 14(min) * 60(sec) * 1000(ms)
            this.logoutTimer = setTimeout(this.logoutUser,  15 * 60 * 1000);  // 16 minutes - 15 * 60 * 1000
            this.warningZone = false;
        },

        warningMessage() {
            //alert("Warning!!!!")
            this.warningZone = true;
        },
        logoutUser() {
            this.$router.push("/login-details")
        },        
        resetTimer() {
            clearTimeout(this.warningTimer);
            clearTimeout(this.logoutTimer);

            this.setTimers();
        },
    }
}
</script>