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
      <div v-if="user && user.type_createur === 'E'" class="text-center">
          <h2 style="font-size:4vh">Bienvenue , {{ user.name }}!</h2>
          <h4>Verifiez votre boite courriel régulierement, si un cas a été détecté dans votre établissement vous en serez informé immediatement par email.</h4>
          <br>
      </div>
       <div v-if="user && user.type_createur === 'M'" class="text-center">
          <h2 style="font-size:4vh">Bienvenue, Docteur {{ user.name }}!</h2>
      </div>
      <h2 v-if="!user">Bienvenue, veuillez vous identifier ou vous inscrire</h2> 
  </div>   
   <br>
  <CovidInfos class=""/>
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
  height: 86vh;  	
}
</style>