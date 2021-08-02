<template>
    <div class="container userprofile p-4">
    <h1>User Profile</h1>
        <div class="row">
            <form class="mt-5" @submit.prevent="addPersonalData()">
                <div class="form-group">
                    <label class="col-2" for="firstname">First Name</label>
                    <input class="col-8" 
                    type="text" 
                    id="firstname" 
                    placeholder="First Name"
                    v-model="input.firstName">
                </div>
                <div class="form-group">
                    <label class="col-2" for="lastname">Last Name</label>
                    <input class="col-8" type="text" id="lastname" placeholder="Last Name"
                    v-model="input.lastName">
                </div>
                <div class="form-group">
                    <label class="col-2" for="gender">Gender Name</label>
                    <select class="col-8" id="gender" v-model="input.gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="col-2" for="status">Marital Status</label>
                    <select class="col-8" id="status" v-model="input.meritalStatus">
                        <option>Married</option>
                        <option>Single</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="col-2" for="number">Phone Number</label>
                    <input class="col-8" type="number" id="number" placeholder="Phone Number"
                    v-model="input.phoneNumber">
                </div>
                <button class="btn btn-primary custom-btn" type="submit">Save</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: {
            firstName: '',
            lastName: '',
            gender: '',
            meritalStatus: '',
            phoneNumber: '',            
            },
            profileCompleteData: {},
        }
    },
    methods: {
        addPersonalData() {
            console.log("First Name: " + this.input.firstName),
            console.log("Last Name: " + this.input.lastName),
            console.log("Gender" +this.input.gender),
            console.log("Merital Status" +this.input.meritalStatus),
            console.log("Phone Number" +this.input.phoneNumber)




            this.$store.dispatch("setProfileData", this.input),

            this.profileCompleteData = this.$store.getters.getProfileData,
            console.log(this.profileCompleteData)

            this.$router.push("/user-profile-page")
        }
    }
}
</script>