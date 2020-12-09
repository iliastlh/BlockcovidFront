<template>
 <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="" disabled readonly>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="" disabled readonly>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'CovidStatsGeneral',
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