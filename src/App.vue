<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link class="navbar-brand" to="/">BlockCovid19.be</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Accueil</router-link>
            </li>
            <li class="nav-item" v-show="!user">
              <router-link class="nav-link" to="/login">Se connecter</router-link>
            </li>
            <li class="nav-item" v-show="!user">
              <router-link class="nav-link" to="/register"
                >Inscription Medecin</router-link>
            </li>
             <li class="nav-item" v-show="!user">
              <router-link class="nav-link" to="/registerEstablishment"
                >Inscription établissement</router-link
              >
            </li>
            <li class="nav-item" v-if="user">
              <router-link v-if="user.type_createur === 'M'" class="nav-link" to="/homeDoctor">Générer QR Code</router-link>
              <router-link v-if="user.type_createur === 'E'" class="nav-link" to="/homeEstablishment">Générer QR Code</router-link>
            </li>
            <li class="nav-item" v-show="user">
              <a class="nav-link" href="#" @click="logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["user"])
  },

  mounted() {
    if(localStorage.getItem("authToken")) {
      this.getUserData();
    }
  },

  methods: {
    ...mapActions("auth", ["sendLogoutRequest", "getUserData"]),

    logout() {
        console.log("login out");
      this.sendLogoutRequest();
      this.$router.push("/");
    }
  }
};
</script>

<style>
body > div > .container {
  padding: 60px 15px 0;
}
</style>
