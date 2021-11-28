<template>
  <v-footer padless app text rounded>
    <v-card
      flat
      tile
      width="100%"
      class="purple lighten-2 white--text text-center"
    >
    <v-card-text>
      <v-btn v-for="icon in icons" :key="icon.id" class="mx-4 white--text" icon :href="icon.link">
        <v-icon size="24px">
          {{ icon.name }}
        </v-icon>
      </v-btn>
    </v-card-text>


      <v-divider></v-divider>
    </v-card>
  </v-footer>
</template>



<script>

export default {
  data: () => ({
    icons: [
        {
          id: 1,
          name: 'mdi-github',
          link: 'https://github.com/fe-lsc'
        },
        {
          id: 2,
          name: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/felipe-lima-27386a186/'
        }
      ]
  })
};
</script>