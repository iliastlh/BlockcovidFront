<template>
  <div id="app" class="d-flex flex-fill flex-column">    
    <Navbar v-bind:testNavBar="testNavBar"/>
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
Navbar {
  padding: 60px;
  height: 3rem;
}
body > div > .container {
  padding: 60px 15px 0;
  padding-bottom: 2.5rem; 
}
Footer {
  bottom: 0;
  height: 2.5rem;  
}
</style>
