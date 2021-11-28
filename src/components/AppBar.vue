<template>
<div>
    <v-app-bar app color="purple lighten-3" text class="AppBar">

      <div>
        <v-btn icon>
          <v-icon>mdi-plus-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </div>
      
      <div>
        <v-btn icon link @click="$router.push('/')">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon link @click="$router.push('/estudo')">
          <v-icon>mdi-school-outline</v-icon>
        </v-btn>
        <v-btn icon link @click="$router.push('/compra')">
          <v-icon>mdi-cash</v-icon>
        </v-btn>
        <v-btn icon link @click="$router.push('/pessoal')">
          <v-icon>mdi-account-heart</v-icon>
        </v-btn>
        <v-btn icon link @click="$router.push('/outro')">
          <v-icon>mdi-dots-hexagon</v-icon>
        </v-btn>
      </div>
      
    </v-app-bar>
</div>
</template>

<script>
export default {
    props: ["SearchBar"]
}
</script>

<style scoped>
  .AppBar{
    display: flex;
    justify-content: space-between;
  }
</style>