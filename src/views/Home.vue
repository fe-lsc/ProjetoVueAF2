<template>
  <div>
    <v-row class="pa-4">
      <v-col cols="12" v-for="(link) in links" :key=link.name >
        <CardLinks :link="link" />
      </v-col>
    </v-row>
  </div>
</template>

<script>

import store from '@/store/index.js';
import CardLinks from '@/components/CardLinks.vue'
  export default {
    components: {
     CardLinks
    },

    computed: {
      links() {
        console.log(store.state.links);
        return  store.state.links
      },
    },
  };



</script>