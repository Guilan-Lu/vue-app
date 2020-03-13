<template>
  <v-card>
    <v-card-title>
      Login
    </v-card-title>
    <v-card-text>
      <v-text-field label="email" v-model="email"> </v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        required
        type="password"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="signInWithGoogle">
        <v-icon>mdi-google</v-icon>
        google Login
      </v-btn>
      <v-btn color="primary" @click="signInEmail">
        <v-icon>mdi-email</v-icon>
        EMail Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async signInWithGoogle() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase.auth().languageCode = "en";
      const r = await this.$firebase.auth().signInWithPopup(provider);
      console.log(r);
    },
    async signInEmail() {
      const r = await this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password);
      console.log(r);
    }
  }
};
</script>
