<template>
  <v-card color="transparent" height="500" flat>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-card-title primary-title>
        <span class="title">Login</span>
        <v-spacer></v-spacer>
        <span class="caption">
          Or&nbsp;
          <a>SignUp</a>
        </span>
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary" block @click="signInWithGoogle">
          <v-icon>mdi-google</v-icon>
          <v-divider vertical class="mx-3"></v-divider>Login with Google account
        </v-btn>
      </v-card-actions>
      <v-container grid-list-md fluid>
        <v-row row wrap>
          <v-col xs5>
            <v-divider class="mt-2"></v-divider>
          </v-col>
          <v-col xs2>Or</v-col>
          <v-col xs5>
            <v-divider class="mt-2"></v-divider>
          </v-col>
        </v-row>
      </v-container>
      <v-card-text>
        <v-text-field label="email"></v-text-field>
        <v-text-field label="password"></v-text-field>
        <div
          class=".recaptcha-terms-text"
        >This page is protected by reCAPTCHA, and subject to the Google Privacy Policy and Terms of service.</div>
      </v-card-text>

      <v-card-actions>
        <v-checkbox label="Save in Login information"></v-checkbox>
        <v-spacer></v-spacer>
        <v-btn color="primary">Login</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      valid: false
    };
  },
  methods: {
    async signInWithGoogle() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase.auth().languageCode = "en";
      await this.$firebase.auth().signInWithPopup(provider);
    }
  }
};
</script>
<style scoped>
.recaptcha-terms-text {
  font-size: 12px;
  font-weight: 200;
  color: #637282;
}
</style>