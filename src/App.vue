<template>
    <div id="app" class="d-flex flex-column">
        <div class="content">
            <Navbar v-bind:testNavBar="testNavBar"/>
            <main role="main" class="container">
                <router-view />
            </main>
        </div>
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
  height: 3rem;
}

.container {
  padding: 45px 15px 0;
  padding-bottom: 2.5rem;
}

.content {
    min-height: calc(100vh - 2.5rem);
}

Footer {
  height: 2.5rem;
}
</style>
