<template>
    <div class = "app">
        <QrCodeGenerationEtablissementInfo />
    </div>
</template>

<script>
    import QrCodeGenerationEtablissementInfo from '../../components/QrCodeGenerationEtablissementInfo';

    
    export default {
        name: "GeneratorEstablishment",

        data() {
            return {  
            }
        },
        components: {
            QrCodeGenerationEtablissementInfo,
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>