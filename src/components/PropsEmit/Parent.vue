<template>
  <v-app>
    <h1>Hii My parent componet</h1>
    <ul>
      <li v-for="item in emitData" :key="item.first_name">{{ item.email }}</li>
    </ul>
    <v-myapp email="Helloemail" @MyeventEmit="getEmitData"></v-myapp>
  </v-app>
</template>
<script>
import Child from "../PropsEmit/Child";

export default {
  data() {
    return {
      emitData: [],
    };
  },
  components: {
    "v-myapp": Child,
  },
  methods: {
    getEmitData(data) {
         console.log("Get EMit data",data)
      this.emitData = data;
     
    },
  },
};
</script>