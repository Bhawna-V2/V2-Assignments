<template>
    <div>
        <div class="container">
            <div class="row">
                <h2>User Profile</h2>
                <div class="edit-btn">
                    <button type="button" class="btn btn-primary" @click="editProfileData()">Edit</button>
                </div>
                <form class="mt-5" @submit.prevent="addEditPersonalData()">
                    <div class="form-group">
                        <label class="col-3" for="firstname">First Name</label>
                        <input class="col-9" 
                        type="text" 
                        id="firstname" 
                        placeholder="First Name"
                        :disabled="isFromRoute"
                        v-model="input.firstName">
                    </div>
                    <div class="form-group">
                        <label class="col-3" for="lastname">Last Name</label>
                        <input class="col-9" type="text" id="lastname" placeholder="Last Name"
                        :disabled="isFromRoute"
                        v-model="input.lastName">
                    </div>
                    <div class="form-group">
                        <label class="col-3" for="gender">Gender Name</label>
                        <select class="col-9" id="gender"
                        :disabled="isFromRoute" 
                        v-model="input.gender">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="col-3" for="status">Marital Status</label>
                        <select class="col-9" id="status" :disabled="isFromRoute"
                        v-model="input.meritalStatus">
                            <option>Married</option>
                            <option>Single</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="col-3" for="number">Phone Number</label>
                        <input class="col-9" type="number" id="number" placeholder="Phone Number"
                        :disabled="isFromRoute"
                        v-model="input.phoneNumber">
                    </div>
                    <button 
                    :class="isActive"  
                    :style="{backgroundColor : !isActive ? 'green' : 'blue'}"
                    class="btn btn-primary custom-btn" 
                    type="submit">{{ text }}</button>
                </form>
            </div>
        </div>
    </div>
<p>{{getUserData}}</p>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            input: {
                firstName: '', 
                lastName: '', 
                gender: '',
                meritalStatus: '',
                phoneNumber: ''
            },
            isFromRoute: false,
            text: "Save",
            isActive: true,
            setUserState: {},
        }
    },
    mounted() {   // two way binding -- fetching data from store to modal // show the same data from store // persistance
        this.input = this.$store.getters.getUserData    //mounted -> assign the data  ==== computed -> return the data
        console.log("Computed data");
        console.log(this.input);
        console.log("data from getters")
        console.log(this.$store.getters.getUserData)
    },
    computed: {
        ...mapGetters(['getUserData']),
    },
    methods: {
        addEditPersonalData() {
            console.log("First Name: " + this.input.firstName),
            console.log("Last Name: " + this.input.lastName),
            console.log("Gender" +this.input.gender),
            console.log("Merital Status" +this.input.meritalStatus),
            console.log("Phone Number" +this.input.phoneNumber),
            this.isFromRoute = true
            console.log("on click of Save before active" +this.isActive)

            this.$store.dispatch("setUserEditData", this.input)
            this.setUserState = this.$store.getters.getUserData
            console.log(this.setUserState)
        },
        editProfileData() {
            alert("ok")
            this.isFromRoute = false,

            //update button text
            // this.isActive = !this.isActive;
            console.log("on click of edit after active"+ this.isActive)
            // if (this.isActive) {
            //     this.text = "Save";
            // } else {
            //     this.text = "Update";
            // }


            if(this.text == 'Save') {
                this.isActive = false,
                this.text = "update"
            } 

        }
    }
}
</script>