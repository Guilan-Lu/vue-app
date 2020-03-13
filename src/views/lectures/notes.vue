<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs5>
        <v-text-field v-model="title" label="title"></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-text-field v-model="content" label="content"></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn color="success" @click="post">post</v-btn>
      </v-flex>
    </v-layout>
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" hide-default-footer>
      <template v-slot:header>
        <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
          <v-toolbar-title>This is a header</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.title }}</v-card-title>
              <v-divider></v-divider>
              <v-card-text>{{item.content}}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="put(item)">put</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar class="mt-2" color="indigo" dark flat>
          <v-toolbar-title class="subheading">This is a footer</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    itemsPerPage: 4,
    items: [],
    title: "",
    content: ""
  }),
  mounted() {},
  methods: {
    post() {
      this.items.push({
        title: this.title,
        content: this.content
      });
      this.title = "";
      this.content = "";
    },
    get() {},
    put() {},
    del() {}
  }
};
</script>
