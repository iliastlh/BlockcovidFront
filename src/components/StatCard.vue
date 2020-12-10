<template>
    <div class="col-4 col-md-4 pl-0">
        <div class="card mb-3 text-white" :class="isBad ? 'bg-danger' : 'bg-info'">
            <div class="card-body text-center pt-12">
                <h1 class="mb-0 mt-2">{{ stat }}</h1>
                <h5>{{ text }}</h5>
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