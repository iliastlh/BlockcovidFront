<template>
    <div class="card-deck justify-content-center">
        <div v-for="code in codes" v-bind:key="code.id" class="pt-4" style="width: 18rem;">
            <div class="card">
                <VueQrCode :value="code.content" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">{{ code.nom }}</h5>
                    <p class="card-text">{{ code.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueQrCode from 'vue-qrcode';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'HomeEstablishmentCodes',
    components: {
        VueQrCode,
    },
    computed: {
        ...mapGetters('establishmentCodes', ['codes']),
    },
    methods: {
        ...mapActions('establishmentCodes', ['getCodes']),
    },
    mounted() {
        this.getCodes();
    },
}
</script>