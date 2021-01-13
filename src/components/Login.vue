<template>
  <v-form v-model="valid" ref="loginForm">
    <v-container>
      <!-- <h1>{{Email}}</h1> -->
      <v-row>
        <v-col cols="12" xl="4">
          <v-text-field
            v-model="login.email"
            label="Email"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xl="4">
          <v-text-field
            v-model="login.password"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row align="center">
        <v-btn depressed color="primary" class="magin-right-class">
          Cancel
        </v-btn>
        <v-btn
          depressed
          color="error"
          class="magin-right-class"
          @click="Submit($event)"
        >
          Login
        </v-btn>
        <v-btn
          depressed
          color="error"
          class="magin-right-class"
          @click="$router.push('/validations')"
        >
          Form Validations Vuelidates
        </v-btn>
        <v-btn
          depressed
          color="error"
          class="magin-right-class"
          @click="$router.push('/addinputbox')"
        >
          Add Input Boxs</v-btn
        >
        <v-btn
          depressed
          color="error"
          class="magin-right-class"
          @click="$router.push('/Fileter')"
        >
          Fileter</v-btn
        >
        <v-btn
          depressed
          color="error"
          class="magin-right-class"
          @click="$router.push('/menubar')"
        >
          menubar</v-btn
        >
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
var axios = require("axios");
import LoginFun from "../Uitils/CommonFunction";
import URL from "../Uitils/AllUrls";
export default {
  data: () => ({
    login: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
    valid: false,
    loginCommonFun: LoginFun,
    message: "hellow my prop",
  }),
  methods: {
    Submit() {
      if (!this.loginCommonFun.isNetworkConnected) {
        alert("You are not connected to internet.", "Internet Issue");
      } else {
        const url = URL.getURL("login");
        axios
          .post(url, this.login)
          .then((res) => {
            console.log("Your Token " + res.data.token);
            alert("Your Token " + res.data.token);
            this.$router.push("/Login");
          })
          .catch((error) => {
            alert(error);
          });
      }

      // if(this.$refs.loginForm.validate()){
      //     alert("Submit");
      //       this.$router.push("/create");
      // }
    },
    GoToVuelidates() {},
  },
};
</script>
<style scoped>
.magin-right-class {
  margin-right: 10px;
}
</style>