<template>
    <div class="card">
        <div :id="id" class="card-img-top">
            <VueQrCode tag="img" v-html="qrCode" :value="content" class="w-100"/>
        </div>
        <div v-if="title || description" class="card-body pt-0">
            <h5 v-if="title" class="card-title">{{ title }}</h5>
            <p v-if="description" class="card-text">{{ description }}</p>
        </div>
        <div class="card-footer d-flex justify-content-around">
            <button type="button" class="btn btn-dark" @click="printCode">Imprimer</button>
            <button type="button" class="btn btn-danger" @click="() => deleteCode(id)">Supprimer</button>
        </div>
    </div>
</template>

<script>
import VueQrCode from 'vue-qrcode';
import { mapActions } from 'vuex';

export default {
    name: 'QrCard',
    components: {
        VueQrCode,
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