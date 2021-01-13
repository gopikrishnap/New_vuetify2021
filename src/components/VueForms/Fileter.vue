<template>
  <div class="container">
    <h1>{{ welcome | touppercase }}</h1>

    <div class="form-group col-6">
      <label for="exampleInputEmail1">Search</label>
      <input type="email" class="form-control" v-model="fiterText"  />
    </div>

    <ul>
      <li v-for="fruit in fruitsfilter" v-bind:key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fiterText: "",
      fruits: ["banana", "apple", "mango", "lemon"],
      welcome: "Welocme to Filter",
    };
  },
  computed: {
    fruitsfilter() {
      return this.fruits.filter((Element) => {
        return Element.match(this.fiterText);
      });
    },
  },
  filters: {
    touppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style  scoped>
</style>