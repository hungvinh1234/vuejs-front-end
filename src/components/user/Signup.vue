<template>
    <div>
         <ValidationObserver v-slot="{ invalid }">
        <form
            @submit="checkForm"
            action="https://vuejs.org/"
            method="post"
            novalidate="true"
        
        >
            <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors" v-bind:key=error>{{ error }}</li>
            </ul>
            </p>

            <!-- <div class="row"> -->
                <div >
                    <h1>Registration</h1>
                    <hr>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <ValidationProvider name="Username" rules="required|alpha_num" v-slot="{ errors }">
                        <input
                                type="text"
                                id="username"
                                class="form-control"
                                v-model="userData.username">
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <ValidationProvider name="Password" rules="required|alpha_num" v-slot="{ errors }">
                            <input
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    v-model="userData.password">
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        
                        <!-- <input
                                type="email"
                                id="email"
                                class="form-control"
                                v-model="userData.email"> -->
                
                        
                        <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                            <input 
                                rules="'required|email'" 
                                type="text" 
                                name="email"
                                class="form-control"
                                v-model="userData.email">
                            <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>


                    </div>
                    <div class="form-group">
                        <label for="fullname">Full Name</label>
                        <ValidationProvider name="Full Name" rules="required|alpha_spaces" v-slot="{ errors }">
                        <input
                                type="fullname"
                                id="fullname"
                                class="form-control"
                                v-model="userData.fullname">
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                        <label for="birthday">Birthday</label>
                        <!-- <input
                                type="birthday"
                                id="birthday"
                                class="form-control"
                                v-model="userData.birthday"> -->
                        <datepicker v-model="userData.birthday" id="birthday"></datepicker>
                    </div>
                 <div class="form-group">
                <label for="Gender">Gender</label>                  
                    <div>
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value=1
                                v-model.number="userData.gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value=2
                                v-model.number="userData.gender"> Female
                    </label>
                    </div>
                 </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <ValidationProvider name="Address" rules="required" v-slot="{ errors }">
                        <input
                                type="address"
                                id="address"
                                class="form-control"
                                v-model="userData.address">
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                    <label for="city">Hometown</label>
                    <select
                            id="city"
                            class="form-control"
                            v-model="selectedCity">
                        <option 
                            v-for="city in hometown" 
                            v-bind:key="city"> {{ city }}</option>
                    </select>
                
            </div>
                    <div class="form-group">
                        <label for="university">Graduated University</label>
                        <ValidationProvider name="University" rules="required|alpha" v-slot="{ errors }">
                        <input
                                type="university"
                                id="university"
                                class="form-control"
                                v-model="userData.university">
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <label for="">Starting Date</label>
                        <!-- <input
                                type="startday"
                                id="startday"
                                class="form-control"
                                v-model="userData.startday"> -->
                            <datepicker v-model="userData.startday" id="startday"></datepicker>
                    </div>

                    <div class="form-group">
                        <label for="">Reference User (optional)</label>
                        <input
                                type="refuser"
                                id="refuser"
                                class="form-control"
                                v-model="userData.ref_user">
                    </div>

                    <div class="form-group">
                <label for="">Is Admin</label>                  
                    <div>
                    <label for="admin">
                        <input
                                type="radio"
                                id="admin"
                                value=true
                                v-model="userData.isAdmin"> Admin
                    </label>
                    <label for="user">
                        <input
                                type="radio"
                                id="user"
                                value=false
                                v-model="userData.isAdmin"> User
                    </label>
                    </div>
                 </div>

                </div>
                
            <!-- </div> -->
            
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <!-- <app-switch v-model="isAdmin"></app-switch> -->
                    </div>
                </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <input
                            class="btn btn-primary"
                           
                            type="submit"
                            value="Submit"
                            @click.prevent="submitted"

                            :disabled="invalid"
                            >
                             <!-- @click.prevent="submitted" -->
                    <!-- <input
                            type="submit"
                            value="Check Form"
                            
                    > -->
                </div>
            </div>
        </form>
        </ValidationObserver>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Username: {{ userData.username }}</p>
                        <p>Password: {{ userData.password}}</p>
                        <p>Email: {{ userData.email }}</p>
                        <p>Fullname: {{ userData.fullname}}</p>
                        <p>Birthday: {{ userData.birthday}}</p>
                        <p>Gender: {{ userData.gender }}</p>
                        <p>Address: {{ userData.address }}</p>
                        <p>City: {{ selectedCity }}</p>
                        <p>Graduated University: {{ userData.university}} </p>
                        <p>Starting Date: {{ userData.startday }}</p>
                        <p>Reference User: {{ userData.ref_user }}</p>
                        <p>Is Admin: {{ userData.isAdmin }}</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
     
     import * as VeeValidate from 'vee-validate';
     import { ValidationProvider } from 'vee-validate';
     import Datepicker from 'vuejs-datepicker';
     export default {
        
        components:{
            Datepicker,
            ValidationProvider

        },

        data (){
            return {
               
                userData: {
                    username: null,
                    password: null,
                    age: 27,
                    isAdmin: "false",
                    gender: 1,

                },
                // username: null,
                // password: null,
                errors:[],
                message: 'A new Text',
                sendMail: [],
                
                selectedCity: 'Ho Chi Minh',
                hometown: ['Ho Chi Minh', 'Da Nang', 'Ha Noi'],
                
                isSubmitted: false,
                isUsernameBlank: false,

                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
                
            }
        },
        methods: {

            checkForm: function (e) {
                this.errors = [];

                if (!this.userData.username) {
                    // this.errors.push("Name required.");
                    // alert('Username require')
                    // this.isSubmitted = true;

                }

                if (!this.userData.password) {
                    this.errors.push("Password required.");
                    
                }

                if (!this.userData.fullname) {
                    this.errors.push("Fullname required.");
                    
                }

                if (!this.userData.birthday) {
                    this.errors.push("Birthday required.");
                }

                if (!this.userData.gender) {
                    this.errors.push("Gender required.");
                }

                if (!this.userData.address) {
                    this.errors.push("Address required.");
                }
                
                if (!this.userData.university) {
                    this.errors.push("University required.");
                }

                if (!this.userData.startday) {
                    this.errors.push("Startday required.");
                }



                if (!this.userData.email) {
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.userData.email)) {
                    this.errors.push('Valid email required.');
                    alert('Mail is invalided')
                }

                if (!this.errors.length) {
                    return true;
                }

                e.preventDefault();
            },

                validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            submitted(){
                this.isSubmitted = true;

                axios({
                method : 'post',
                url : 'http://localhost:3000/account/signup',
                data:
                {
                    "username": this.userData.username,
                    "password": this.userData.password,
                    "email": this.userData.email,
                    "name": this.userData.fullname,
                    "gender": this.userData.gender,
                    "address": this.userData.address,
                    "hometown": this.selectedCity,
                    "university": this.userData.university,
                    "ref_user": this.userData.ref_user,
                    "start_date": this.userData.startday,
                    "birthday": this.userData.birthday,
                    "is_admin": this.userData.isAdmin

                }
                }).then(res => {
                    
                    
                    console.log(res);
                    this.$alert("Account Create Successful !");
                }).catch(error => {
                    console.log(error.response.data.message);
                    this.$alert(error.response.data.message);
                });

            },

            isEmailValid: function() {
                return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
            },
        },
     }
</script>

<style lang="stylus" scoped>
span {
  display: block;
}
</style>