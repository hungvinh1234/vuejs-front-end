<template>
    <div>
         <ValidationObserver v-slot="{ invalid }">
        <form
            
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
                <div v-if="response">
                    <h1>Edit User</h1>
                    <hr>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <ValidationProvider name="Username" rules="alpha_num" v-slot="{ errors }">
                        <input
                                type="text"
                                id="username"
                                class="form-control"
                                v-model="userData.username"
                                :placeholder="response.data.username"
                                >
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <ValidationProvider name="Password" rules="alpha_num" v-slot="{ errors }">
                            <input
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    v-model="userData.password"
                                    placeholder="Input if you want to change your password">
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
    
                        <ValidationProvider name="Email" rules="email" v-slot="{ errors }">
                            <input 
                                rules="'email'" 
                                type="text" 
                                name="email"
                                class="form-control"
                                v-model="userData.email"
                                :placeholder="response.data.email"
                                >
                            <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>


                    </div>
                    <div class="form-group">
                        <label for="fullname">Full Name</label>
                        <ValidationProvider name="Full Name" rules="alpha_spaces" v-slot="{ errors }">
                        <input
                                type="fullname"
                                id="fullname"
                                class="form-control"
                                v-model="userData.fullname"
                                :placeholder="response.data.name">
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
                        <datepicker v-if="response" v-model="userData.birthday" id="birthday"
                        :placeholder="response.data.birthday"
                        ></datepicker>
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
                        <ValidationProvider name="Address" rules="" v-slot="{ errors }">
                        <input
                                type="address"
                                id="address"
                                class="form-control"
                                v-model="userData.address"
                                :placeholder="response.data.address">
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <label for="city">Hometown</label>
                        <ValidationProvider name="Hometown" rules="" v-slot="{ errors }">
                        <input
                                type="homwtown"
                                id="hometown"
                                class="form-control"
                                v-model="userData.hometown"
                                :placeholder="response.data.hometown">
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    
                    <div class="form-group">
                        <label for="university">University</label>
                        <ValidationProvider name="University" rules="" v-slot="{ errors }">
                        <input
                                type="university"
                                id="university"
                                class="form-control"
                                v-model="userData.university"
                                :placeholder="response.data.university">
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    
                     <!-- <div class="form-group">
                    <label for="university">University</label>
                    <select
                            id="city"
                            class="form-control"
                            v-model="selectedUniversity"
                            value="city ne">
                        <option 
                            v-for="university in universities" 
                            v-bind:key="university"> {{ university }}</option>
                    </select>
                
                    </div> -->

                    <!-- <div class="form-group">
                        <label for="university">Graduated University</label>
                        <ValidationProvider name="University" rules="required|alpha" v-slot="{ errors }">
                        <input
                                type="university"
                                id="university"
                                class="form-control"
                                v-model="userData.university">
                        <span style="color:red">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div> -->

                    <!-- <div class="form-group">
                        <label for="">Starting Date</label>
                            <datepicker v-model="userData.startday" id="startday"></datepicker>
                    </div> -->

                    <div class="form-group">
                        <label for="startday">Start Date</label>
                        <datepicker v-if="response" v-model="userData.startday" id="startday"
                        :placeholder="response.data.start_date"
                        ></datepicker>
                    </div>

                    <div class="form-group">
                        <label for="">Reference User (optional)</label>
                        <input
                                type="refuser"
                                id="refuser"
                                class="form-control"
                                v-model="userData.ref_user"
                                :placeholder="response.data.ref_user">
                    </div>

                    <div class="form-group">
                        
                        <label for="">Is Admin</label>
                            <input type="checkbox" id="admin" v-model="IsAdminChecked">
                                   
                    <!-- <div>
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
                    </div> -->


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
                        <p>Graduated University: {{ selectedUniversity}} </p>
                        <p>Starting Date: {{ userData.startday }}</p>
                        <p>Reference User: {{ userData.ref_user }}</p>
                        <p>Is Admin: {{ IsAdminChecked }}</p>

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
                
                response:"",
                userData: {
                    username: null,
                    password: null,
                    isAdmin: "false",
                    gender: null

                },
                errors:[],
                message: 'A new Text',
                sendMail: [],
                

                selectedCity: 'Ho Chi Minh',
                hometown: ['Ho Chi Minh', 'Da Nang', 'Ha Noi'],

                selectedUniversity: 'UIT',
                universities: ['UIT', 'HCMUS', 'USSH','HCMUT'],
                
                isSubmitted: false,
                isUsernameBlank: false,

                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
                
            }
        },

         mounted() {
    
            this.LoadData();
        
        },

        methods: {

            LoadData() {
                axios({
                    method: "post",
                    url: "http://localhost:3000/account/90"
                })
                    .then(res => {
                    this.response = res;

                    this.response.data.birthday = this.format_date(
                        this.response.data.birthday
                    );

                    this.response.data.start_date = this.format_date(
                        this.response.data.start_date
                    );

                    console.log(this.response);
                     this.$alert( this.response.data.birthday);
                    })
                    .catch(error => {
                    console.log("bi loi");
                    this.$alert("bi loi "+ error.response);
                    });
    },

            submitted(){
                this.isSubmitted = true;

                axios({
                method : 'put',
                url : 'http://localhost:3000/account/90/edit',
                data:
                {
                    "username": this.userData.username,
                    "password": this.userData.password,
                    "email": this.userData.email,
                    "name": this.userData.fullname,
                    "gender": this.userData.gender,
                    "address": this.userData.address,
                    "hometown": this.userData.hometown,
                    "university": this.userData.university,
                    "ref_user": this.userData.ref_user,
                    "start_date": this.userData.startday,
                    "birthday": this.userData.birthday,
                    "is_admin": this.IsAdminChecked

                }
                }).then(res => {
                    
                    
                    console.log(res);
                    this.$alert("Update Account Successful !");
                }).catch(error => {
                    console.log(error.response.data.message);
                    this.$alert(error.response.data.message);
                });

            },

            isEmailValid: function() {
                return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
            },

              format_date(value) {
                if (value) {
                return moment(String(value)).format("YYYY-MM-DD");
            }
         }
        },
     }
</script>

<style lang="stylus" scoped>
span {
  display: block;
}
</style>