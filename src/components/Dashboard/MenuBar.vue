<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left fixed>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" clipped color="green" dark>
      <v-list nav>
        <v-list-item
          v-for="(item, index) in items"
          :key="item.title"
          link
          @click="menuBarSelect($event, item.pageRouting, index)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    items: [
      {
        title: "Create EMP",
        icon: "mdi-help-box",
        pageRouting: "/menubar/create",
      },
      {
        title: "EMP List",
        icon: "mdi-phone",
        pageRouting: "/menubar/emplist",
      },
      {
        title: "Form Validations Vuelidates",
        icon: "mdi-view-dashboard",
        pageRouting: "/menubar/validations",
      },
      {
        title: "Add Input Boxs",
        icon: "mdi-image",
        pageRouting: "/menubar/addinputbox",
      },
      {
        title: "Fileter",
        icon: "mdi-help-box",
        pageRouting: "/menubar/Fileter",
      },{
        title: "Pagination",
        icon: "mdi-help-box",
        pageRouting: "/menubar/PagiNation",
      },
      {
        title: "DatePicker",
        icon: "mdi-help-box",
        pageRouting: "/menubar/DatePicker",
      },
       {
        title: "DOB",
        icon: "mdi-help-box",
        pageRouting: "/menubar/DOB",
      }
    ],
  }),
  methods: {
    menuBarSelect(event, selected, index) {
      console.log(event);
      console.log(selected);
      console.log(index);
      this.$router.push(selected);
      this.drawer = false;
      // if (selected == "Dashboard") {
      //   this.$router.push("/menubar/create");
      // }
      //  alert("Youselected page is " + selected);
    },
  },
};
</script>

<style  scoped>
.container.menuBarSlider {
  margin-left: 0px;
}
</style>