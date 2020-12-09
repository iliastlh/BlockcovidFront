<template>
    <div id="app">
        <button type="button" class="btn btn-primary btn-lg active mt-0" v-on:click="generate" id="generate">Genérer un QRCode</button>
        <div id="qrPrint">
            <vue-qrcode id="qrcode" value="" v-model= "id_qr"/>
        </div>
    </div>
</template>

<script>
    import VueQrcode from 'vue-qrcode'
    import { mapActions } from "vuex";

    export default {
        data(){
            return{
                id_qr :''
            }
        },
        components: {
            VueQrcode,
        },
        methods: {
            ...mapActions("auth", ["sendDataQRCodeRequest"]),


            generate: function () {
                this.sendDataQRCodeRequest();
                this.id_qr = localStorage.getItem("qrCode");
            },
        }

    }
</script>