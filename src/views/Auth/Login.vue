<template>
  <div class="login page d-flex align-items-center justify-content-center">
    <div class="card">
      <div class="card-header">
        Connectez-vous
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors.email }"
              id="email"
              v-model="details.email"
              placeholder="Enter email"
            />
            <div class="invalid-feedback" v-if="errors.email">
              {{ errors.email[0] }}
            </div>
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors.mot_de_passe }"
              id="password"
              v-model="details.mot_de_passe"
              placeholder="Password"
            />
            <div class="invalid-feedback" v-if="errors.mot_de_passe">
              {{ errors.mot_de_passe[0] }}
            </div>
          </div>
          <button type="button" @click="login" class="btn btn-primary">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",

  data: function() {
    return {
      details: {
        email: null,
        password: null
      }
    };
  },

  computed: {
    ...mapGetters(["errors"])
  },

  mounted() {
    this.$store.commit("setErrors", {});
  },

  methods: {
    ...mapActions("auth", ["sendLoginRequest"]),

    login: function() {
      this.sendLoginRequest(this.details).then(() => {
        this.$router.push({ name: "Home" });
      }).catch(err => {
          if(![401, 422].includes(err.response.status)) {
              console.log(err);
          }
      });
    }
  }
};
</script>

<style scoped>
.page {
  height: 76vh;  	
}
.card {
  /* margin-top: 20vh; */
  width: 50vh;
}
</style>
