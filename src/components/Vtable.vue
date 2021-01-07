





<template>
  <v-container>
    <v-list flat>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in leadList" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item.id"></v-list-item-title>
            <v-list-item-title v-text="item.first_name"></v-list-item-title>
            <v-list-item-title v-text="item.last_name"></v-list-item-title>
            <v-list-item-title v-text="item.email"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>
<script>
var axios = require("axios");
// import commonFunctions from "../Uitils/CommonFunction";
// import getUrl from "../Uitils/AllUrls";
export default {
  data() {
    return {
      leadList:[]
    };
  },
  mounted() {
   
      axios
        .get("https://reqres.in/api/users?page=1")
        .then((res) => {
          console.log(res);
          this.leadList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    
  },
};
</script>
<style scoped>
</style>