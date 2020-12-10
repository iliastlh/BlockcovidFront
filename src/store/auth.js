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
        .get(process.env.VUE_APP_API_URL+ "connexion-token")
        .then(response => {
          const authUser = {
            id_createur_de_qr: response.data.createur_de_qr.id_createur_qr,
            email: response.data.createur_de_qr.email,
            name: response.data.info_supplementaire.nom,
            type_createur: response.data.createur_de_qr.type_createur,
          };
          commit("setUserData", authUser);
        })
        .catch((e) => {
            console.log(e);
          localStorage.removeItem("authToken");
        });
    },
    sendLoginRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post(process.env.VUE_APP_API_URL+ "connexion", data)
        .then(response => {
          const authUser = {} // <-- objet user avec les info + token
          authUser.id_createur_de_qr = response.data.createur_de_qr.id_createur_qr
          authUser.authToken = response.data.token.token
          authUser.email = response.data.createur_de_qr.email
          authUser.name = response.data.info_supplementaire.nom 
          authUser.type_createur = response.data.createur_de_qr.type_createur
          localStorage.setItem("authToken", response.data.token.token)
          commit("setUserData", authUser);
        });
    },
    sendRegisterRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post(process.env.VUE_APP_API_URL+"medecins/inscription", data)
        .then(response => {
          commit("setUserData", response.data.createur_de_qr);
          localStorage.setItem("authToken", response.data.token.token);
        });
    },
    sendRegisterEstablishmentRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post(process.env.VUE_APP_API_URL+"etablissements/inscription",data)
        .then(response => {
          commit("setUserData", response.data.createur_de_qr);
          localStorage.setItem("authToken", response.data.token.token);
        });
    },
    sendLogoutRequest({ commit }) {
        commit("setUserData", null);
        localStorage.removeItem("authToken");
    },
   
    sendDataQRCodeRequest({commit}) {
      console.log("QR GENERATION");
      return axios
        .get(process.env.VUE_APP_API_URL+"medecins/qr-code",{
          headers: {
            'Authorization' : 'Bearer ' + localStorage.getItem('authToken')
          }
        })
        .then(response => {
          console.log(response.data);
          localStorage.setItem("qrCode", JSON.stringify({
            "id_qr_code": response.data.id_qr_code,
            "type_createur": response.data.type_createur
          }));
          commit("setQrData", response.data);
        }).catch((e) => {
          console.log(e);
      });
    },
    sendDataQRCodeEstablishmentRequest({commit}, data) {
      console.log("DATA : ", data);
      return axios
        .post(process.env.VUE_APP_API_URL+"etablissements/qr-code", data, {
          headers: {
            'Authorization' : 'Bearer ' + localStorage.getItem('authToken')
          }
        })
        .then(response => {
          console.log(response.data.id_qr_code);
          localStorage.setItem("qrCode", JSON.stringify({
            "id_qr_code": response.data.id_qr_code,
            "type_createur": response.data.type_createur
          }));
          commit("setQrData", response.data);
          alert(response.data.message);
        })
    }
  }
};
