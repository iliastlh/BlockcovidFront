<template>
  <div id="app">
    <header>

      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" v-show="testNavBar"> 
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
                >Inscription Médécin</router-link>
            </li>
             <li class="nav-item" v-show="!user">
              <router-link class="nav-link" to="/registerEstablishment"
                >Inscription Établissement</router-link
              >
            </li>
            <li class="nav-item" >
              <router-link class="nav-link" to="/coronaAdvice"
                >Informations Coronavirus</router-link
              >
            </li>
            <li class="nav-item" v-if="user">
              <router-link v-if="user.type_createur === 'M'" class="nav-link" to="/homeDoctor">Générer QR Code</router-link>
              <router-link v-if="user.type_createur === 'E'" class="nav-link" to="/homeEstablishment">Générer QR Code</router-link>
            </li>
            <li class="nav-item" v-if="user && user.type_createur === 'E'">
              <router-link class="nav-link" to="/homeEstablishementCodes">Codes Générés</router-link>
              
            </li>
            <li class="nav-item" v-if="user && user.type_createur === 'E'">
            <a class="nav-link" href="https://drive.google.com/file/d/1Alqh4Ni_ItDE2VDgPCBJOSar4cxHFsiW/view" target="_blank">Affiches de commerce obligatoires</a>
            </li>
               <li class="nav-item" v-if="user && user.type_createur === 'E'">
            <a class="nav-link" href="https://economie.fgov.be/sites/default/files/Files/Publications/files/coronavirus-guide-ouverture-commerces.pdf" target="_blank">Guide Ouverture des Commerces</a>
            </li>
            <li class="nav-item" v-show="user">
              <a class="nav-link" href="#" @click="logout">Se déconnecter</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props:["testNavBar"],
  computed: {
    ...mapGetters("auth", ["user"])
  },

  created() {
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
