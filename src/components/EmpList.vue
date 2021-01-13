<template>
  <v-container>
    <v-card raised>
      <v-card-title style="text-align: center">Lead List View</v-card-title>
    </v-card>
    <v-simple-table>
      <template v-slot:default>
        <thead class="tHeadBackgroundColor">
          <tr dark>
            <th class="text-left white--text font-weight-regular"  v-for="item in tableHeads" :key="item">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in leadList"
            :key="item.id"
            @click="SelectedRow($event, index)"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import axios from "axios";
// import commonFunctions from '../constants/commonFunctions';
export default {
  data() {
    return {
      leadList: [],
      tableHeads:['Id','First Name','Last Name','Email']
    };
  },
  methods: {
    goToNewEmp() {
      this.$emit("MyEmitFunction", this.leadList);
      this.$router.push("/create");
    },
    goToListView() {
      this.$router.push("/vtable");
    },
    goToValidation() {
      this.$router.push("/validations");
    },
    ParentEmitProp() {
      this.$router.push("/Parent");
    },
    SelectedRow(event, index) {
      console.log(event, "indexvalue--->", index);
    },
  },
  created() {
    // if(commonFunctions.isNetworkConnected){
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res);
        this.leadList = res.data.data;
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
    // }
  },
};
</script>

<style scoped>
.tHeadBackgroundColor{
  background-color: green;
}
.tHeadBackgroundColor tr {
  color: white;
}
</style>






