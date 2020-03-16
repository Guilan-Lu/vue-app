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
          <v-list-item
            v-for="subItem in item.subItems"
            :key="subItem.title"
            :to="subItem.to"
          >
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
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          v-if="$store.state.user"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>{{
          $store.state.user ? $store.state.user.displayName : "no login yet"
        }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="$store.state.user">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on" icon>
                <v-avatar size="32" color="grey lighten-4">
                  <img :src="$store.state.user.photoURL" alt="avatar" />
                </v-avatar>
              </v-btn>
            </template>
            <v-card width="320">
              <v-container grid-list-md>
                <v-layout row wrap>
                  <v-flex xs4>
                    <v-avatar size="96" color="grey lighten-4">
                      <img :src="$store.state.user.photoURL" alt="avatar" />
                    </v-avatar>
                  </v-flex>
                  <v-flex xs8>
                    <v-card-text>
                      <span class="font-weight-bold">
                        {{ $store.state.user.displayName }}
                      </span>
                      <br />
                      {{ $store.state.user.email }}
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="$firebase.auth().signOut()"
                  >Logout</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-menu>

          <!-- <v-btn icon @click="signOut">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn> -->
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-content>
      <vue-progress-bar></vue-progress-bar>
      <v-container grid-list-md>
        <v-row row wrap align-center justify-center>
          <v-card color="transparent" flat v-if="!$isFirebaseAuth">
            <v-card-text class="text-xs-center">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-card-text>
            <v-card-text class="text-xs-center">
              Now waiting for authrization...
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-content>
    <router-view />
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
  methods: {}
};
</script>
