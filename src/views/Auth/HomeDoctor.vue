<template>
    <div id = "app">
        <QrCodeGeneration />
        <button class="btn btn-primary btn-lg active mt-0"  @click="print">Imprimez le QR Code</button>
    </div>
</template>

<script>
import QrCodeGeneration from '../../components/QrCodeGeneration';
    
    export default {

        name: "HomeDoctor",

        data(){
            return{
                id_qr :''
            }
        },
        components: {
            QrCodeGeneration,
        },
        methods: {

            print(){
                this.$htmlToPaper('qrPrint');
            }
        }
        
    }
</script>

<style scoped>

</style>