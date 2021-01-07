<template>
  <v-app>
    <h1>Hii My child componet</h1>

    <h3>{{ email }}</h3>
  </v-app>
</template>

<script>
var axios = require("axios");
import allListOptions from "../../Uitils/SelectOptions";
import URL from "../../Uitils/AllUrls";
export default {
  data() {
    return {};
  },
  props: ["email"],
  created() {
    const url = URL.getURL("getUsers");
    axios
      .get(url)
      .then((res) => {
        allListOptions.countrys = res.data.data;
        this.$emit("MyeventEmit",allListOptions.countrys);
         console.log("getcountrylist in child----->",res.data.data)
      })
      .catch((err) => {
        console.log("getcountrylist----->", err);
        alert(err);
      });
  },
};
</script>