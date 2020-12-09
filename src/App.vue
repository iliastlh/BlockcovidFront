<template>
  <div id="app">
    <navbar />
    <main role="main" class="container" >
      <router-view />
    </main>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';

export default {
  components: {
     Navbar 
     }

};
</script>

<style>
body > div > .container {
  padding: 60px 15px 0;
}
</style>
