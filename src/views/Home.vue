<template>
<div class="home mt-5 d-flex flex-column align-items-center">
    <img alt="BlockCovid logo" src="/../../assets/BlockCovid.png">
        
    <div class="alert alert-success" role="alert" v-if="success">
        {{ success }}
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
        {{ error }}
    </div>
    <div v-if="user" class="text-center">
        <h2>Bonjour, {{ user.email }}!</h2>
        <h2 v-if="user.type_createur === 'M'">Vous êtes un médecin.</h2>
        <h2 v-else>Vous êtes un établissement.</h2>
    </div>
    <h2 v-else>Bienvenue, veuillez vous identifier ou vous inscrire.</h2>
    <a href="https://drive.google.com/file/d/1Alqh4Ni_ItDE2VDgPCBJOSar4cxHFsiW/view" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Affiches à Imprimer</a>
<a href="https://economie.fgov.be/sites/default/files/Files/Publications/files/coronavirus-guide-ouverture-commerces.pdf" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Guide pour l'ouverture des commerces</a>
    <ActualityFeed />
</div>
</template>

<script>
import ActualityFeed from '../components/ActualityFeed.vue';
import { mapGetters} from "vuex";

export default {
  components: {
ActualityFeed
  },
  name: "Home",

  data() {
    return {
      success: null,
      error: null
    };
  },

  computed: {
    ...mapGetters("auth", ["user"])
  },

  methods: {
    
  }
};
</script>

<style>
.mt-0{
margin-right: 50;
}
</style>