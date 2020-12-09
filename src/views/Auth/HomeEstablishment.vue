<template>
    <div class = "app">
        <QrCodeGenerationEtablissementInfo />
        <button class="btn btn-primary btn-lg active mt-0" @click="print">Imprimer le QR Code</button>
    </div>
</template>

<script>
    import QrCodeGenerationEtablissementInfo from '../../components/QrCodeGenerationEtablissementInfo';

    
    export default {
        name: "HomeEstablishment",

        data() {
            return {  
            }
        },
        components: {
            QrCodeGenerationEtablissementInfo,
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