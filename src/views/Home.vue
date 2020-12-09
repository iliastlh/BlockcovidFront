<template>
<div class="home mt-5 d-flex flex-column align-items-center">
    <img alt="BlockCovid logo" src="/../../assets/BlockCovid.png">
    
    <div class="alert alert-success" role="alert" v-if="success">
        {{ success }}
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
        {{ error }}
    </div>
    <!-- <div v-if="user" class="text-center">
        <h2>Hello, {{ user.email }}! You're in.</h2>
        <h2 v-if="user.type_createur === 'M'">Vous êtes un médecin</h2>
        <h2 v-else>Vous êtes un établissement.</h2>
    </div> -->
    <h2 v-if="!user">Welcome, please log in or register</h2> 
    
    <div class="page">
      <CovidInfos/>
    </div>
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
  mounted: {    
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
.page {
  height: 80vh;  	
	margin: 10vh auto;
}
</style>