<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed @click="test" app>
      <v-toolbar flat color="transparent">
        <v-toolbar-title>Account</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item v-for="subItem in item.subItems" :key="subItem.title" :to="subItem.to">
            <v-list-item-content>
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
        <!-- <v-list-item v-for="item in items" :key="item.title" :to="item.to">
        <v-list-item-avatar>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content two-line>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
        </v-list-item>-->
      </v-list>
    </v-navigation-drawer>
    <div>
      <v-toolbar color="indigo" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{$store.state.user ? $store.state.user.displayName : "no login yet"}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="signOut">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-alert",
          title: "home",
          active: true,
          subItems: [
            {
              title: "dashboard",
              to: "/"
            },
            {
              title: "About2",
              to: "/about2"
            }
          ]
        },
        {
          icon: "mdi-alert-box",
          title: "Lectures",
          active: false,
          subItems: [
            {
              title: "card",
              to: "/lectures/card"
            },

            {
              title: "notes",
              to: "/lectures/notes"
            },
            {
              title: "layout",
              to: "/lectures/layout"
            }
          ]
        }
      ]
    };
  },
  methods: {
    async signOut() {
      const r = await this.$firebase.auth().signOut();
      console.log(r);
    }
  }
};
</script>
