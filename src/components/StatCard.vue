<template>
    <div class="col-4 col-md-4 pl-0">
        <div class="card stat_card mb-3 text-white" :class="isBad ? 'bg-danger' : 'bg-info'">
            <div class="card-body text-center">
                <h1 class="mb-0 card_text_numbers">{{ stat }}</h1>
                <h5 class="card_text_label">{{ text }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatCard',
    props: [
        'stat',
        'text',
        'isBad'
    ],
}
</script>

<style scoped>
.stat_card {
  max-height: 15vh;
}
.card_text_numbers {
  font-size: 150%;
}
.card_text_label {
  font-size: 100%;
}
</style>