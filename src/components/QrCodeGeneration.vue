<template>
    <div class="d-flex align-items-center justify-content-center page">
      <button type="button" class="btn btn-primary btn-lg active mt-0" v-on:click="generate" id="generate">Genérer un QRCode</button>
      <div id="qrPrint">
          <vue-qrcode id="qrcode" value="" v-model= "id_qr"/>
      </div>
      <button class="btn btn-primary btn-lg active mt-0"  @click="print">Imprimer le QR Code</button>
    </div>
</template>

<script>
    import VueQrcode from 'vue-qrcode'
    import { mapActions } from "vuex";

    export default {
        data(){
            return{
                id_qr :'',
            }
        },
        components: {
            VueQrcode,
        },
        methods: {
          ...mapActions("auth", ["sendDataQRCodeRequest"]),          

          print(){
              this.$htmlToPaper('qrPrint');
          },

          generate: async function () {
              await this.sendDataQRCodeRequest();
              this.id_qr = localStorage.getItem("qrCode");
          },
        }

    }
</script>

<style>
.page {
  height: 76vh;  	
}
</style>