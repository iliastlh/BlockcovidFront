<template>
    <div id = "app">
        <form v-on:submit.prevent>
            <div class="form-group">
                <label for="email">Nom du lieu</label>
                <input
                type="text"
                class="form-control"
                id="name"
                v-model="details.nom"
                placeholder="Entrez le nom du lieu"
                />
                <label for="email">Description</label>
                <input
                type="text"
                class="form-control"
                id="description"
                v-model="details.description"
                placeholder="Entrez la description du lieu"
                />
                <button class="btn btn-primary btn-lg active mt-0"  type="button" v-on:click="generate_esta" id="generate">Générer un QRCode</button>
                <div id="qrPrint">
                    <vue-qrcode id="qrcode" value="" v-model= "id_qr"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import VueQrcode from 'vue-qrcode'
    import { mapActions } from "vuex";

    export default {
        data(){
            return{
                id_qr :'',
                details : {
                    description: '',
                    nom: ''
                }
            }
        },
        components: {
            VueQrcode,
        },
        methods: {
            ...mapActions("auth", ["sendDataQRCodeEstablishmentRequest"]),

            generate_esta: function () {
                this.sendDataQRCodeEstablishmentRequest(this.details);
                this.id_qr = localStorage.getItem("qrCode");
            }
            
        }

    }
</script>