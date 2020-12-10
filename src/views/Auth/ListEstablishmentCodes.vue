<template>
  <div class="page">
    <div class="card-deck justify-content-center">
        <div v-for="code in codes" v-bind:key="code.id" class="d-flex pt-4" style="width: 18rem;">
            <QrCard :content="code.content"
                    :title="code.nom"
                    :description="code.description"
                    :id="code.id">
            </QrCard>
        </div>
        <h4 v-if="codes.length === 0" class="pt-4">
            Aucun code généré.
        </h4>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import QrCard from '@/components/QrCard';

export default {
    name: 'ListEstablishmentCodes',
    components: {
        QrCard,
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

<style scoped>
.page {
  height: 76vh;  	
}
</style>