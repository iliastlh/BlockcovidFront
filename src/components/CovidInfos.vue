<template>  
    <div>
        <div class="align-items-center">
            <CovidStats/>
            <ActualityFeed />
        </div>
    </div>
</template>

<script>
import ActualityFeed from '../components/ActualityFeed.vue';
import CovidStats from '../components/CovidStats.vue';

export default {
    name: "CovidInfos",
    components: {
        ActualityFeed,
        CovidStats,
    },
};
</script>

<style>
</style>