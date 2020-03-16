<template>
  <v-container fluid grid-list-md>
    <v-row row-wrap>
      <v-col xs12>
        <v-toolbar color="primary">
          axios eg
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs3>
        <v-card>
          <v-card-title primary="title">
            create
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textCreate" rows="10"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="create">create</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col xs3>
        <v-card>
          <v-card-title primary="title">
            read
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textRead" rows="10"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="read">read</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col xs3>
        <v-card>
          <v-card-title primary="title">
            update
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textUpdate" rows="10"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="update">update</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col xs3>
        <v-card>
          <v-card-title primary="title">
            delete
          </v-card-title>
          <v-card-text>
            <v-textarea v-model="textDelete" rows="10"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="primary" @click="del">delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      textCreate: "",
      textRead: "",
      textUpdate: "",
      textDelete: ""
    };
  },
  methods: {
    async create() {
      // this.$axios
      //   .post("test")
      //   .then(r => {
      //     this.textCreate = r.data;
      //   })
      //   .catch(e => console.error(e.message));

      this.$toasted.global.error("You are wrong?");
      const r = await this.$axios.post(
        "http://localhost:5001/apple-1d0e8/us-central1/test"
      );
      this.textCreate = r.data;
    },
    read() {
      this.$axios
        .get("http://localhost:5001/apple-1d0e8/us-central1/test/33")
        .then(r => {
          this.textRead = r.data;
        })
        .catch(e => console.error(e.message));
    },
    update() {
      this.$axios
        .put("http://localhost:5001/apple-1d0e8/us-central1/test/12345")
        .then(r => {
          this.textUpdate = r.data;
        })
        .catch(e => console.error(e.message));
    },
    del() {
      this.$axios
        .delete("http://localhost:5001/apple-1d0e8/us-central1/test/1234566")
        .then(r => {
          this.textDelete = r.data;
        })
        .catch(e => console.error(e.message));
    }
  }
};
</script>
