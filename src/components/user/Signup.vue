<template>
    <div>
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
                        <input
                                type="text"
                                id="username"
                                class="form-control"
                                v-model="userData.username">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password">
                        <!-- <p>{{ userData.password }}</p> -->
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="email"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="fullname">Full Name</label>
                        <input
                                type="fullname"
                                id="fullname"
                                class="form-control"
                                v-model="userData.fullname">
                    </div>
                    <div class="form-group">
                        <label for="birthday">Birthday</label>
                        <input
                                type="birthday"
                                id="birthday"
                                class="form-control"
                                v-model="userData.birthday">
                    </div>
                 <div class="form-group">
                <label for="Gender">Gender</label>                  
                    <div>
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="userData.gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="userData.gender"> Female
                    </label>
                    </div>
                 </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input
                                type="address"
                                id="address"
                                class="form-control"
                                v-model="userData.address">
                    </div>
                    <div class="form-group">
                    <label for="city">City</label>
                    <select
                            id="city"
                            class="form-control"
                            v-model="selectedCity">
                        <option 
                            v-for="city in cities" 
                            v-bind:key="city"> {{ city }}</option>
                    </select>
                
            </div>
                    <div class="form-group">
                        <label for="university">Graduated University</label>
                        <input
                                type="university"
                                id="university"
                                class="form-control"
                                v-model="userData.university">
                    </div>

                    <div class="form-group">
                        <label for="">Starting Date</label>
                        <input
                                type="startday"
                                id="startday"
                                class="form-control"
                                v-model="userData.startday">
                    </div>

                    <div class="form-group">
                        <label for="">Reference User</label>
                        <input
                                type="refuser"
                                id="refuser"
                                class="form-control"
                                v-model="userData.refuser">
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
                            @click.prevent="submitted"
                            type="submit"
                            value="Submit"
                            
                            >
                </div>
            </div>
        </form>
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
                        <p>Reference User: {{ userData.refuser }}</p>
                        <p>Is Admin: {{ isAdmin }}</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
     export default {
        data (){
            return {
               
                userData: {
                    username: null,
                    password: null,
                    age: 27
                },
                // username: null,
                // password: null,
                errors:[],
                message: 'A new Text',
                sendMail: [],
                gender: 'Male',
                selectedCity: 'Ho Chi Minh',
                cities: ['Ho Chi Minh', 'Da Nang', 'Ha Noi'],
                isAdmin: false,
                isSubmitted: false,

                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
                
            }
        },
        methods: {

            checkForm: function (e) {
                this.errors = [];

                if (!this.username) {
                    this.errors.push("Name required.");
                    alert('Username require')
                }
                if (!this.email) {
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid email required.');
                    alert('Mail is ivalided')
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
            },

            isEmailValid: function() {
                return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
            },
        },
     }
</script>