import axios from "axios";

export default {
  namespaced: true,
  state: {
    userData: null
  },

  getters: {
    user: state => state.userData
  },

  mutations: {
    setUserData(state, user) {
      state.userData = user;
    }
  },

  actions: {
    getUserData({ commit }) {
      axios
        .get(process.env.VUE_APP_API_URL + "user")
        .then(response => {
          commit("setUserData", response.data);
        })
        .catch(() => {
          localStorage.removeItem("authToken");
        });
    },
    sendLoginRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post("https://g10-blockcovid-api-staging.herokuapp.com/api/connexion", data)
        .then(response => {
          commit("setUserData", response.data.user);
          localStorage.setItem("authToken", response.data.token.token);
          alert(response.data.message);
        });
    },
    sendRegisterRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post("https://g10-blockcovid-api-staging.herokuapp.com/api/medecins/inscription", data)
        .then(response => {
          commit("setUserData", response.data.createur_de_qr);
          localStorage.setItem("authToken", response.data.token);
          alert(response.data.message);
        });
    },
    sendRegisterEstablishmentRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post("https://g10-blockcovid-api-staging.herokuapp.com/api/etablissements/inscription",data)
        .then(response => {
          commit("setUserData", response.data.createur_de_qr);
          localStorage.setItem("authToken", response.data.token.token);
          alert(response.data.message);
        });
    },
    sendLogoutRequest({ commit }) {
      axios.post("https://g10-blockcovid-api-staging.herokuapp.com/api/deconnexion").then(() => {
        commit("setUserData", null);
        localStorage.removeItem("authToken");
      });
    },
    sendVerifyResendRequest() {
      return axios.get(process.env.VUE_APP_API_URL + "email/resend");
    },
    sendVerifyRequest({ dispatch }, hash) {
      return axios
        .get(process.env.VUE_APP_API_URL + "email/verify/" + hash)
        .then(() => {
          dispatch("getUserData");
        });
    }
  }
};
