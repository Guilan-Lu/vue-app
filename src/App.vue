<template>
  <v-app>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    @click="test"
    app
  >
    <v-toolbar flat color="transparent">
      <v-toolbar-title>Account</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list >
      <v-list-item v-for="item in items" :key="item.title" :to="item.to">
        <v-list-item-avatar>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content two-line>
          <v-list-item-title>{{item.title}}</v-list-item-title>
          <!-- <v-list-item-subtitle>bbbb</v-list-item-subtitle> -->
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >

    <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Vuetify</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
</v-toolbar>

  <v-content>
    <router-view />
  </v-content>
</v-app>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-alert',
          title: 'home',
          to: '/'
        },
        {
          icon: 'mdi-alert-box',
          title: 'About2',
          to: '/about2'
        },
        {
          icon: 'mdi-alert-circle',
          title: 'About',
          to: '/about'
        }
      ]
    }
  },
  methods: {
    test () {

    }
  }
}
</script>
