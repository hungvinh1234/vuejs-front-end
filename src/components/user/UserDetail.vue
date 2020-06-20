<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Your Data</h4>
      </div>

      <div v-if="response" class="panel-body">
        <p>Username: {{ response.data.username }}</p>
        <p>Email: {{ response.data.email }}</p>
        <p>Fullname: {{ response.data.name}}</p>
        <p>Birthday: {{ response.data.birthday}}</p>
        <p>Gender: {{ response.data.gender }}</p>
        <p>Address: {{ response.data.address }}</p>
        <p>City: {{ response.data.hometown }}</p>
        <p>Graduated University: {{ response.data.university}}</p>
        <p>Starting Date: {{ response.data.start_date }}</p>
        <p>Reference User: {{response.data.ref_user }}</p>
        <p>Is Admin: {{ response.data.is_admin }}</p>
      </div>
    </div>

    <div>
    <!-- <b-button v-b-modal.myModal>Open Modal</b-button>

    <b-modal v-model="modalShow" id="myModal">
      <form>
        <div>
          <br>
            <input type="text" placeholder="Name" >
          <br>
            <input type="text" placeholder="Email" >
          <br>
            <input type="text" placeholder="Password">
          <br>
        </div>
        <div>
          <b-btn @click="modalShow = false">Cancel</b-btn>
          <b-btn variant="outline-primary" @click="addUser">Create</b-btn>
        </div>
      </form>
    </b-modal> -->

    <div>
      <ul class="nav nav-pills">
          <button
                            
                            class="btn btn-primary"
                            @click.prevent="submitted">Edit
                             
                    </button>   
    </ul>
    <!-- <b-button @click="modalShow = !modalShow">Open Modal</b-button>

    <b-modal v-model="modalShow">Hello From Modal!</b-modal> -->
  </div>
    


  </div>

  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
    //   name: "",
    //   nameState: null,
    //   submittedNames: [],

    modalShow: false,

      storedToken: "",
      response: "",
      link: {
        name: "userEdit",
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: "en",
          q: 100
        },
        hash: "#data"
      }
    };
  },



  beforeRouteEnter(to, from, next) {
    if (true) {
      next();
    } else {
      next(false);
    }
  },

  mounted() {
    // this.beforeRouteEnter();
    this.LoadData();
  },

  methods: {
    
    LoadData() {
      
      this.storedToken = localStorage.getItem("token")
      
      axios({
        method: "post",
        url: `http://localhost:3000/account/${this.$route.params.id}`,
        headers: {
            'Authorization': `Bearer ${this.storedToken}`
      }

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
        })
        .catch(error => {
          console.log(error.response);
          this.$alert(error.response);
        });
    },

    // beforeRouteEnter(to, from, next) {
    //   if (true) {
    //     next();
    //   } else {
    //     next(false);
    //   }
    // }

    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },

    submitted(){
      
      this.$router.push("/user/"+ this.response.data.id+"/edit")


    }
  }
};
</script>
