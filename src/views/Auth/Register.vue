<template>
  <div class="login d-flex align-items-center justify-content-center page">
    <div class="card">
      <div class="card-header">
        Inscrivez-vous
      </div>
      <div class="card-body">
        <form>  
          <div class="form-row">
            <div class="col">                
              <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" 
                :class="{ 'is-invalid': errors.nom }" id="nom"
                v-model="details.nom" placeholder="Entrez votre nom"/>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="prenom">Prénom</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors.prenom }"
                  id="prenom"
                  v-model="details.prenom"
                  placeholder="Entrer votre prenom"
                />
                <div class="invalid-feedback" v-if="errors.prenom">
                  {{ errors.prenom[0] }}
                </div>
              </div>
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
        type_createur : "M",
        nom : null,
        prenom: null
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
    ...mapActions("auth", ["sendRegisterRequest"]),

    register: function() {
      this.sendRegisterRequest(this.details).then(() => {
        this.$router.push({ name: "Home" });
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
  width: 100vh;
}
</style>
