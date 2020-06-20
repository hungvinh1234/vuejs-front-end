<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      fields: [
        "username",
        "email",
        "name",
        "birthday",
        "gender",
        "address",
        "hometown",
        "university",
        "start_date"
      ],

      items: [],

      response: "",
      link: {
        name: "userList",
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
  mounted: function() {
    
    let storedToken = localStorage.getItem("token")

    axios({
      method: "post",
      url: "http://localhost:3000/account/userlist",
      // data: null
      // {

      // }
      headers: {
                        'Authorization': `Bearer ${storedToken}`
                    }


    })
      .then(res => {
        this.response = res;
        this.items = res.data;

        for (var i = 0; i < this.items.length; i++) {
          this.items[i].birthday=this.format_date(this.items[i].birthday);
          this.items[i].start_date=this.format_date(this.items[i].start_date);
        }
        // this.items.birthday=this.format_date(this.items.birthday);
        // this.$alert(this.items.birthday);
        // console.log(this.response);
        // this.$alert(this.response.data.username);
      })
      .catch(error => {
        console.log(error.response);
        this.$alert(error.response.data.message);
      });
  },

  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD-MM-YYYY");
      }
    }
  }
};
</script>

<style lang="stylus"></style>