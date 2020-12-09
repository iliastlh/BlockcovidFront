import axios from "axios";

export default {
  namespaced: true,
  state: {
    userData: null,
    qrData:null
  },

  getters: {
    user: state => state.userData,
    qr: state =>state.qrData
  },

  mutations: {
    setUserData(state, user) {
      state.userData = user;
    },
    setQrData(state, qr){
      state.qrData = qr;
    }
  },

  actions: {
    getUserData({ commit }) {
      axios
        .get(process.env.VUE_APP_API_URL + "user")
        .then(response => {
          alert("blalblaba");
          commit("setUserData", response.data);
        })
        .catch(() => {
          //localStorage.removeItem("authUser");
        });
    },
    sendLoginRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post("https://g10-blockcovid-api-staging.herokuapp.com/api/connexion", data)
        .then(response => {
          //commit("setUserData", response.data.user); 
          const authUser = {} // <-- objet user avec les info + token
          authUser.id_createur_de_qr = response.data.createur_de_qr.id_createur_qr
          authUser.authToken = response.data.token.token
          authUser.email = response.data.createur_de_qr.email
          authUser.type_createur = response.data.createur_de_qr.type_createur
          window.localStorage.setItem('authUser', JSON.stringify(authUser))
          alert(response.data.message);
          commit("setUserData", authUser);

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
          commit("setUserData", response.data.createur_de_qr.type_createur);
          localStorage.setItem("authToken", response.data.token.token);
          alert(response.data.message);
        });
    },
    sendLogoutRequest({ commit }) {
      //axios.post("https://g10-blockcovid-api-staging.herokuapp.com/api/deconnexion").then(() => {
        commit("setUserData", null);
        localStorage.removeItem("authUser");
      //});
    },
    /*sendVerifyResendRequest() {
      return axios.get(process.env.VUE_APP_API_URL + "email/resend");
    },
    sendVerifyRequest({ dispatch }, hash) {
      return axios
        .get(process.env.VUE_APP_API_URL + "email/verify/" + hash)
        .then(() => {
          dispatch("getUserData");
        });
    },*/
    sendDataQRCodeRequest({commit}) {
      return axios
        .get("https://g10-blockcovid-api-staging.herokuapp.com/api/medecins/qr-code",{
          headers: {
            'Authorization' : 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9nMTAtYmxvY2tjb3ZpZC1hcGktc3RhZ2luZy5oZXJva3VhcHAuY29tXC9hcGlcL2Nvbm5leGlvbiIsImlhdCI6MTYwNzQ3NjI1MiwiZXhwIjoxNjA4MDgxMDUyLCJuYmYiOjE2MDc0NzYyNTIsImp0aSI6IlZleDlGd2I2dHYwWHdlUmUiLCJzdWIiOiIwM2YyMjcxYS1jZGEyLTRkMjEtYTAxMy04NzViN2ZmZDUyMTkiLCJwcnYiOiJiMzUzODE0OWI1MzVhZjVhZThlYjFlNjdjOWIxYWIxMWUzNzY0ZGI0In0.9IRAI_KnzovYYnYGS7NDTpi3cZ6vfmR_n7NFKuXiA2Q'
          }
        })
        .then(response => {
          commit("setQrData", response.data);
          alert(response.data.message);
        })
    }
  }
};
