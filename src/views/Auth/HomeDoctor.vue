<template>
    <div class = "doctor">
        <button type="button" class="btn btn-primary btn-lg active mt-0" v-on:click="generate" id="generate">Genérer un QRCode</button>
        <div id="qr">
            <vue-qrcode id="qrcode" value="" v-model= "id_qr"/>
        </div>
        <button class="btn btn-primary btn-lg active mt-0"  @click="print">Imprimez le QR Code</button>
    </div>
</template>

<script>
    import VueQrcode from 'vue-qrcode'
    import { mapActions, mapGetters} from "vuex";

    
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
            ...mapGetters("auth", ["qr"])

        },
        methods: {
            ...mapActions("auth", ["sendDataQRCodeRequest"]),

            generate: function () {
                this.sendDataQRCodeRequest();
            },
            print(){
                this.$htmlToPaper('qr');
            }
        }
        
    }
</script>

<style scoped>

</style>