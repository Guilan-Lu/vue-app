<template>
  <v-card color="transparent" height="500" flat>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-card-title primary-title>
        <span class="title">SignUp</span>
        <v-spacer></v-spacer>
        <span class="caption">
          Or&nbsp;
          <a>Login</a>
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
        <v-text-field
          label="firstName"
          v-model="form.firstName"
          :rules="[rule.required, rule.minLength(7), rule.maxLength(50)]"
          required
        ></v-text-field>
        <v-text-field
          label="lastName"
          v-model="form.lastName"
          :rules="[rule.required, rule.minLength(7), rule.maxLength(50)]"
          required
        ></v-text-field>
        <v-text-field
          label="email"
          v-model="form.email"
          :rules="[
            rule.required,
            rule.minLength(7),
            rule.maxLength(50),
            rule.email
          ]"
          required
        ></v-text-field>
        <v-text-field
          label="password"
          v-model="form.password"
          :rules="[rule.required, rule.minLength(6), rule.maxLength(50)]"
          type="password"
          required
        ></v-text-field>
        <div class=".recaptcha-terms-text">
          This page is protected by reCAPTCHA, and subject to the Google Privacy
          Policy and Terms of service.
        </div>
      </v-card-text>

      <v-card-actions>
        <v-checkbox
          label="Save in Login information"
          v-model="agree"
          :rules="[rule.agree]"
          required
        ></v-checkbox>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          :disabled="!valid"
          @click="createWithEmailAndPassword"
          >SignUp</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      agree: false,
      rule: {
        required: v => !!v || "Name is required",
        minLength: length => v =>
          v.length >= length || `it is must be more than ${length}`,
        maxLength: length => v =>
          v.length <= length || `it is must be less than ${length}`,
        email: v => /.+@.+/.test(v) || "E-mail must be valid",
        agree: v => !!v || "You must agree in this term"
      },
      valid: false
    };
  },
  methods: {
    async signInWithGoogle() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase.auth().languageCode = "en";
      await this.$firebase.auth().signInWithPopup(provider);
      await this.$firebase.auth().currentUser.getIdToken(true);
    },
    async createWithEmailAndPassword() {
      if (!this.$refs.form.validate())
        return this.$toasted.global.error("Please insert all items");
      await this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password);

      const user = this.$firebase.auth().currentUser;
      const result = await user.updateProfile({
        displayName: `${this.form.firstName} ${this.form.lastName}`
      });

      await this.$firebase.auth().currentUser.getIdToken(true);
      console.log(result);
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
