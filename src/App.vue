<template>
  <v-app>
    
    <SystemBar app/>

    <AppBar app/>

    <NavigationDrawer app/>

    <v-main class="pa-0">
    <router-view></router-view>
    </v-main>

    <Footer app/>

    <BottomNavigation app/>

  </v-app>
</template>

<style scoped>
</style>

<script>
import AppBar           from '@/components/AppBar';
import SystemBar        from '@/components/SystemBar';
import NavigationDrawer from '@/components/NavigationDrawer';
import Footer           from '@/components/Footer';
import BottomNavigation from '@/components/BottomNavigation';
export default{
  name: 'App',
  components: {
    AppBar,
    SystemBar,
    NavigationDrawer,
    Footer,
    BottomNavigation
  },
  data (){
    return {

    }
  }
}
</script>
