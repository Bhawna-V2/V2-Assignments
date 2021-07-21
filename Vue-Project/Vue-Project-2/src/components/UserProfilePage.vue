<template>    
    <div class="container p-4">
        <div class="row">
            <router-link class="mb-4" to="/user-profile">Back to User Profile</router-link>
            <div class="user-profile-data col-3">
                <p><strong>First Name:</strong> {{profile.firstName}}</p>
                <p><strong>Last Name:</strong> {{profile.lastName}}</p>
                <p><strong>Gender:</strong> {{profile.gender}}</p>
                <p><strong>Merital Status:</strong> {{profile.meritalStatus}}</p>
                <p><strong>Phone Number:</strong> {{profile.phoneNumber}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            profile: {},
        }
    },
    created() {
        alert("inside user Profile Page")
        this.profile = this.$store.getters.getProfileData,
        console.log(this.profile)
    }
}
</script>