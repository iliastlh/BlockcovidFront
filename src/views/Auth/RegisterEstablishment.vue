<template>
  <div class="login page d-flex align-items-center justify-content-center">
    <div class="card">
      <div class="card-header">
        Inscrivez-vous
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="name">Nom légal de votre établissement</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.nom }"
              id="name"
              v-model="details.nom"
              placeholder="Entrez le nom de votre établissement"
            />
            <div class="invalid-feedback" v-if="errors.nom">
              {{ errors.nom[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="adresse">Adresse de l'établissement</label>
            <input
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors.adresse }"
              id="adresse"
              v-model="details.adresse"
              placeholder="Entrez votre adresse"
            />
            <div class="invalid-feedback" v-if="errors.adresse">
              {{ errors.adresse[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="telephone">Numéro de téléphone</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.numero }"
              id="telephone"
              v-model="details.numero"
              placeholder="Entrez votre numéro de téléphone"
            />
            <div class="invalid-feedback" v-if="errors.numero">
              {{ errors.numero[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors.email }"
              id="email"
              v-model="details.email"
              placeholder="Entrez votre email"
            />
            <div class="invalid-feedback" v-if="errors.email">
              {{ errors.email[0] }}
            </div>
          </div>

          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <label for="password">Mot de passe</label>
                <input
                  type="password"
                  class="form-control"
                  :class="{ 'is-invalid': errors.mot_de_passe }"
                  id="password"
                  v-model="details.mot_de_passe"
                  placeholder="Entrez un mot de passe"
                />
                <div class="invalid-feedback" v-if="errors.mot_de_passe">
                  {{ errors.mot_de_passe[0] }}
                </div>
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label for="password_confirmation">Confirmation du mot de passe</label>
                <input
                  type="password"
                  class="form-control"
                  :class="{ 'is-invalid': errors.mot_de_passe_confirmation }"
                  id="password_confirmation"
                  v-model="details.mot_de_passe_confirmation"
                  placeholder="Entrez à nouveau le mot de passe"
                />
                <div class="invalid-feedback" v-if="errors.mot_de_passe_confirmation">
                  {{ errors.mot_de_passe_confirmation[0] }}
                </div>
              </div>
            </div>
          </div>

          <button type="button" @click="register" class="btn btn-primary">
            Inscription
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",

  data: function() {
    return {
      details: {
        email: null,
        numero: null,
        mot_de_passe: null,
        mot_de_passe_confirmation: null,
        type_createur : "E",
        nom : null,
        adresse: null
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
    ...mapActions("auth", ["sendRegisterEstablishmentRequest"]),

    register: function() {
      this.sendRegisterEstablishmentRequest(this.details).then(() => {
        this.$router.push({ name: "Home" });
      });
    }
  }
};
</script>

<style scoped>
.page {
  height: 86vh;  	
}
.card {
  width: 100vh;
}
</style>
