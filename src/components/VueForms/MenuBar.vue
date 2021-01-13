<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer"  clipped>
      <v-list nav>
        <v-list-item v-for="(item,index) in items" :key="item.title" link @click="menuBarSelect($event,item.title,index)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main> </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ]
  }),
  methods:{
    menuBarSelect(event,selected,index){
      console.log(event);
      console.log(selected);
      console.log(index)
      if(selected=='Dashboard'){
        this.$router.push("/create");
      }
       alert("Youselected page is "+ selected)
    }
  }
};
</script>

<style  scoped>
.container.menuBarSlider{
      margin-left: 0px;
}
</style>