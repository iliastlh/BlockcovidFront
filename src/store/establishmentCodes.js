import axios from "axios";

export default {
    namespaced: true,
    state: {
        codes: [],
    },

    getters: {
        codes: state => state.codes
    },

    mutations: {
        setCodes(state, codes) {
            state.codes = codes;
        }
    },

    actions: {
        getCodes: async ({ commit }) => {
            const response = await axios.get("https://g10-blockcovid-api-staging.herokuapp.com/api/etablissements/qr-codes");
            const qrCodes = response.data.qr_codes.map(qr => {
                return {
                    content: JSON.stringify({
                        type_createur: 'E',
                        id_qr_code: qr.id_qr_etablissement,
                    }),
                    // nom: qr.nom,
                    // description: qr.description,
                    nom: "Table 6",
                    description: "Une table pour quatre personnes avec vue sur la mer.",
                };
            });
            commit('setCodes', qrCodes);
        }
    },
};
