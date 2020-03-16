<template>
  <!-- <v-card>
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-text-field label="email" v-model="email"></v-text-field>
      <v-text-field label="Password" v-model="password" required type="password"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="signInWithGoogle">
        <v-icon>mdi-google</v-icon>google Login
      </v-btn>
      <v-btn color="primary" @click="signInEmail">
        <v-icon>mdi-email</v-icon>EMail Login
      </v-btn>
      <v-btn color="primary" @click="signOut">
        <v-icon>mdi-logout</v-icon>Logout
      </v-btn>
    </v-card-actions>
  </v-card>-->
  <v-container grid-list-md>
    <v-row row-wrap align-center justify-content>
      <v-col xs12 sm5 class="hidden-xs-only">
        <v-img
          src="https://cfl.dropboxstatic.com/static/images/empty_states/sign-in-boulder-vfl2oGV4v.png"
        ></v-img>
      </v-col>
      <v-col xs12 sm5>
        <sign-in v-if="type"></sign-in>
        <sign-up v-else></sign-up>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignIn from "@/components/auth/signIn";
import SignUp from "@/components/auth/signUp";

export default {
  components: {
    SignIn,
    SignUp
  },
  data() {
    return {
      type: true,
      email: "",
      password: ""
    };
  },
  methods: {
    async signInWithGoogle() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase.auth().languageCode = "en";
      await this.$firebase.auth().signInWithPopup(provider);
    },
    async signInEmail() {
      const r = await this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password);
      console.log(r);
    },
    async signOut() {
      const r = await this.$firebase.auth().signOut();
      console.log(r);
    }
  }
};
</script>
