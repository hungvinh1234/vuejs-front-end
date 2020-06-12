<template>
    <div>
    <form>
    <div>
        <h1>Login Page</h1>
        <hr>
          <div class="form-group">
                        <label for="username">Username</label>
                        <input
                                type="text"
                                id="username"
                                class="form-control"
                                :value="userData.username"
                                @input="userData.username = $event.target.value">
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

        <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            
                            class="btn btn-primary"
                            @click.prevent="submitted">Login
                             
                    </button>
                </div>
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
                    username: '',
                    password: '',
                    age: 27
                },
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
            submitted(){
                this.isSubmitted = true;
            },

            isEmailValid: function() {
                return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
            },
        },

    }
</script>