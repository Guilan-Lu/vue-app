<template>
  <v-container fluid grid-list-md>
    <v-row row-wrap>
      <v-col xs12 sm6 md4 lg3 xl2 v-for="i in 9" :key="i">
        <v-card color="red">
          <v-card-title primary-title v-if="!$vuetify.breakpoint.xs">
            {{$vuetify.breakpoint}}
          </v-card-title>
          <v-card-text>
            I have rich experience with Vue js
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
