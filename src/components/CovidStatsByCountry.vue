<template>
    <div class="card">
        
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'CovidStatsByCountry',
    components: {
    },
    props: [
        'content',
        'title',
        'description',
        'id',
    ],
    methods: {
        ...mapActions('establishmentCodes', ['deleteCode']),
        printCode() {
            this.$htmlToPaper(this.id)
        },
    }
}
</script>

<style scoped>
.card-img-top {
    flex-grow: 1;
}
</style>