<template>
  <div class="home mt-5">
    <div class="alert alert-success" role="alert" v-if="success">
      {{ success }}
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error }}
    </div>
    <h2 v-if="!user">Welcome, please log in or register</h2>
    <h2 v-else>Hello, {{ user.email }}! You're in.
      <h2 v-if="user.type_createur === 'M'">Vous etes un medecin</h2>
    <h2 v-else>Vous etes un établissement.</h2>
    </h2>


  </div>
</template>

<script>
import { mapGetters} from "vuex";

export default {
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
