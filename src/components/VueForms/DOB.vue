<template>
  <v-app>
    <v-menu
      ref="menu1"
      v-model="menu1"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="dateFormatted"
          label="Date of Birth"
          hint="MM/DD/YYYY"
          persistent-hint
          @blur="date = parseDate(dateFormatted)"
          v-on="on"
          class="whiteback"
          @change="updateAge($event)"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        @input="menu1 = false"
        @change="updateAge($event)"
      ></v-date-picker>
    </v-menu>

    <v-text-field
      v-model="age"
      :counter="2"
      :rules="Rules.ageRules"
      type="number"
      :disabled="false"
      label="Age"
      required
      class="whiteback"
    ></v-text-field>
    <v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="150"
  max-width="250"
  src="https://picsum.photos/id/11/500/300"
></v-img>
  </v-app>
</template>
<script>
import Rules from "../../Uitils/Rules";
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      Rules: Rules,
      age: "0",
    };
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    updateAge(event) {
      this.age = this.calculateAge(event);
    },
    calculateAge(dob) {
      var dateString = dob;
      var today = new Date();
      var birthDate = new Date(dateString);
      if (
        today.getFullYear() <= birthDate.getFullYear() &&
        today.getMonth() <= birthDate.getMonth() &&
        today.getDate() <= birthDate.getDate()
      ) {
        alert("Please Enter valid date");
        this.date_of_birth = new Date();
        this.dateFormatted = this.formatDate(
          new Date().toISOString().substr(0, 10)
        );
        this.age = 0;
      } else {
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }
    },
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
};
</script>

<style>
</style>