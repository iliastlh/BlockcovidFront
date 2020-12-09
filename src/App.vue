<template>
  <div id="app">
    <navbar v-bind:testNavBar="testNavBar" />
    <main role="main" class="container" >
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  data(){
    return {
      testNavBar : true
    }
  },

  components: {
     Navbar,
     Footer
  },

};
</script>

<style>
body > div > .container {
  padding: 60px 15px 0;
}
</style>
