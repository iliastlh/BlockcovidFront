<template>  
    <div>
        <div class="align-items-center">
            <CovidStats class="page"/>
            <br>
            <br>
            <ActualityFeed class="page"/>
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

<style scope >
.page {
  height: 86vh;  	
}
</style>