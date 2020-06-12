<template>
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

</template>

<script>

export default {
    data(){
        return {
            link: { name: 'userEdit', 
            params: { 
                id: this.$route.params.id 
                }, 
                query: { 
                    locale: 'en', 
                    q: 100 
                },
                hash: '#data'
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        if (true) {
            next();
        } else {
            next(false);
        }
        
    }
}
</script>