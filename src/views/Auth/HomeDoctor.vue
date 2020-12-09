<template>
    <div class = "doctor">
        <button type="button" class="btn btn-primary btn-lg active mt-0" v-on:click="generate" id="generate">Genérer un QRCode</button>
        <div id="qrPrint">
            <vue-qrcode id="qrcode" value="" v-model= "id_qr"/>
        </div>
        <button class="btn btn-primary btn-lg active mt-0"  @click="print">Imprimez le QR Code</button>
    </div>
</template>

<script>
    import VueQrcode from 'vue-qrcode'
    import { mapActions} from "vuex";

    
    export default {
        name: "HomeDoctor",

        data(){
            return{
                id_qr :''
            }
        },
        components: {
            VueQrcode,
        },
        computed:{
        },
        methods: {
            ...mapActions("auth", ["sendDataQRCodeRequest"]),


            generate: function () {
                this.sendDataQRCodeRequest();
                this.id_qr = localStorage.getItem("qrCode")
            },
            print(){
                this.$htmlToPaper('qrPrint');
            }
        }
        
    }
</script>

<style scoped>

</style>