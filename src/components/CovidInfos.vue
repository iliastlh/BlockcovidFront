<template>  
    <div>
      <div class="row align-items-center">
      <div class="col-6 col-sm-3">
        <CovidStatsGeneral/>
        <CovidStatsByCountry/>
      </div>
      <div>
        <ActualityFeed />
      </div>
    </div>
  </div>
</template>

<script>
import ActualityFeed from '../components/ActualityFeed.vue';
import CovidStatsGeneral from '../components/CovidStatsGeneral.vue';
import CovidStatsByCountry from '../components/CovidStatsByCountry.vue';
import { mapGetters} from "vuex";

export default {
  components: {
    ActualityFeed,
    CovidStatsGeneral,
    CovidStatsByCountry
  },
  name: "CovidInfos",

  data() {
    return {
      success: null,
      error: null
    };
  },

  computed: {
    ...mapGetters("auth", ["user"])
  },

  methods: {
    
  }
};
</script>

<style>
</style>