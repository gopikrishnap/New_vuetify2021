<template>
    <v-container>
    <v-card raised>
        <v-card-title style="text-align:center;" >Lead List View</v-card-title>
        <v-btn  color="secondary"  elevation="2"  medium @click="goToNewEmp">Create EMP</v-btn>
        <v-btn  color="secondary"  elevation="4"  medium @click="goToListView">Go to List page</v-btn>
         <v-btn  color="secondary"  elevation="4"  medium @click="goToValidation">Go To Validation page</v-btn>

  <v-btn  color="secondary"  elevation="4"  medium @click="ParentEmitProp">Go To ParentEmitProp page</v-btn>
         
    </v-card>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            First Name
          </th>
          <th class="text-left">
            Last Name
          </th>
          <th class="text-left">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in leadList"
          :key="item.id"
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
import axios from 'axios';
// import commonFunctions from '../constants/commonFunctions';
export default {
    data(){
        return {
            leadList : []
        }
    },
    methods:{
        goToNewEmp(){
          this.$emit("MyEmitFunction",this.leadList);
            this.$router.push('/create')
        },
        goToListView(){
            this.$router.push('/vtable');
        },
        goToValidation(){
           this.$router.push('/validations');
        },
        ParentEmitProp(){
     this.$router.push('/Parent');
        }
    },
    created(){
        // if(commonFunctions.isNetworkConnected){
            axios.get("https://reqres.in/api/users?page=2")
            .then((res)=>{
                console.log(res);
                this.leadList   =   res.data.data;
            })
            .catch((err)=>{
                console.log(err);
                alert(err);
            })
        // }
    }
}
</script>

<style scoped>

</style>






