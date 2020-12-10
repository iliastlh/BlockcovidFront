<template>
<div>
  <div class="home page d-flex flex-column align-items-center justify-content-center ">
      <img alt="BlockCovid logo" class="img-fluid" src="/../../assets/BlockCovid.png">      
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
      <h2 v-if="!user">Bienvenue, veuillez vous identifier ou vous inscrire</h2> 
  </div>   
   
  <CovidInfos class="page"/>
</div>
</template>

<script>
import CovidInfos from '../components/CovidInfos.vue';
import { mapGetters} from "vuex";

export default {
  components: {
    CovidInfos
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

<style scope >
.mt-0{
  margin-right: 50;
}
.page {
  height: 80.5vh;  	
}
</style>