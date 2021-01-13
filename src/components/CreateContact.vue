<template>
<v-form ref="formSubmit">


  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card >
        <v-card-text>
          <v-text-field
            v-model="createContact.contactOpportunity.first_name"
            label="First Name"
            placeholder="Enter Name"
            type="text"
           :rules="Rules.firstName"
           maxlength="20"
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.middle_name"
            label="Middle Name"
            placeholder="Enter Middile Name"
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.last_name"
            label="Last Name"
            placeholder="Enter Last Name"
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.primary_email"
            label="Email ID"
            placeholder="Enter Email ID"
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.mobile_number"
            label="Primary Mobile"
            placeholder="Enter Primary Mobile"
             maxlength="10"
            v-bind:rules="Rules.MNValidation"
            required
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.age"
            label="Age"
            placeholder=""
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.other_contact_number"
            label="Alternate Number"
            placeholder="Enter Alternate Number"
              maxlength="10"
              required
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.address_1"
            label="adders 1"
            placeholder=""
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.address_2"
            label="addres 2"
            placeholder=""
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.pincode"
            label="Pin Code"
            placeholder=""
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.landmark"
            label="Land Mark"
            placeholder=""
          ></v-text-field>
          <v-text-field
            v-model="createContact.contactOpportunity.designation"
            label="Desigination"
            placeholder=""
          ></v-text-field>

          <v-select
            v-model="createContact.contactOpportunity.gender"
            :items="allListOptions.gender"
            label="Gender"
          ></v-select>
          <v-select
            v-model="createContact.contactOpportunity.marital_status"
            :items="allListOptions.maritalStatusOptions"
            label="Marital Status"
          ></v-select>
          <v-select
            v-model="createContact.contactOpportunity.country"
            :items="allListOptions.countrys"
            :item-text="getItems"
            :item-value="getItemsValue"
            label="Employee List"
          ></v-select>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
               
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" type="submit" text @click.prevent="submitForm()"> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </v-form>
</template>
<script>
var axios = require("axios");
// const { validationMixin, default: Vuelidate } = require('vuelidate')
// const { required, minLength } = require('vuelidate/lib/validators')
import allListOptions from "./../Uitils/SelectOptions";
import URL from "./../Uitils/AllUrls";
import Rules from './../Uitils/Rules'
export default {
  data() {
    return {
      createContact: {
        user_name: "",
        contactOpportunity: {
          first_name: "",
          middle_name: "",
          last_name: "",
          primary_email: "",
          secondary_email: "",
          date_of_birth: null,
          age: null,
          mobile_number: '',
          other_contact_number: null,
          gender: "Select",
          marital_status: "",
          address_1: "",
          address_2: "",
          landmark: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
          location: {
            latitude: null,
            longitude: null,
          },
          company_id: "",
          department: "",
          profession: "",
          lead_status: "",
          lead_disposition: "",
          lead_sub_disposition: "",
          opportunity_type_id: "",
          landline_number: null,
          designation: "",
        },
      },
      allListOptions: allListOptions,
      formHasErrors: true,
      Rules:Rules
    };
  },
  validations:{

  },
  methods: {
    submitForm() {
      if(this.$refs.formSubmit.validate()){
      const url = URL.getURL("empDetails");
      axios
        .post(url, this.createContact.contactOpportunity)
        .then((res) => {
          console.log("EMp deatils---->", res);
          alert("Your emp Id is Emp" + res.data.id);
          this.$router.push("/menubar/emplist");
        })
        .catch((error) => {
          alert(error);
        });
      }
    },
    resetForm() {},
    getItems(item) {
      return item.first_name;
    },
    getItemsValue(item) {
      return item.email;
    },
  },

  created() {
    // axios.default.headers.get['Content-Type']='application/json';
    // axios.default.headers.common['Content-Type']='application/json';
    const url = URL.getURL("getUsers");
    axios
      .get(url)
      .then((res) => {
        this.allListOptions.countrys = res.data.data;
      })
      .catch((err) => {
        console.log("getcountrylist----->", err);
        alert(err);
      });
  },
  mounted() {
    //   const url = this.URL.getURL("getcountrylist");
    // axios
    //   .get(url)
    //   .then((res) => {
    //     console.log("getcountrylist", res);
    //   })
    //   .catch((err) => {
    //     console.log("getcountrylist----->", err);
    //     alert(err);
    //   });
  },
};
</script>
<style scoped>
</style>