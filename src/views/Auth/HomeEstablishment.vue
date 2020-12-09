<template>
    <form>
        <div class="form-group">
            <label for="email">Description</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="details.description"
              placeholder="Entrez la description"
            />
            <button class="btn btn-primary btn-lg active mt-0"  type="button" v-on:click="generate" id="generate">Genérer un QRCode</button>
            <div id="qr">
                <vue-qrcode id="qrcode" :size="400" value="" v-model= "details.id_qr" />
            </div>
            <button class="btn btn-primary btn-lg active mt-0" @click="print">Imprimez le QR Code</button>
        </div>
    </form>
</template>

<script>
    import VueQrcode from 'vue-qrcode'
    import { mapActions} from "vuex";
    
    export default {

        data(){
            return{
                details : {
                    id_qr :'',
                    description:''
                }
            }
        },
        components: {
            VueQrcode,
        },
        methods: {
            ...mapActions("auth", ["sendDataQRCodeEstablishmentRequest"]),


            generate: function () {
                this.sendDataQRCodeEstablishmentRequest();
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