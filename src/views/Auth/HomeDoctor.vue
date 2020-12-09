<template>
    <div id = "app">
        <QrCodeGeneration />
        <button class="btn btn-primary btn-lg active mt-0"  @click="print">Imprimer le QR Code</button>
    </div>
</template>

<script>
import QrCodeGeneration from '../../components/QrCodeGeneration';
    
    export default {

        name: "HomeDoctor",

        data(){
            return{
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