<template>
  <footer>
    Footer
  </footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props:["testNavBar"],
  computed: {
    ...mapGetters("auth", ["user"])
  },

  created() {
    if(localStorage.getItem("authToken")) {
      this.getUserData();
    }
  },

  methods: {
    ...mapActions("auth", ["sendLogoutRequest", "getUserData"]),

    logout() {
        console.log("login out");
      this.sendLogoutRequest();
      this.$router.push("/");
    }
  }
};
</script>

<style>

footer {
  background: lightgray;
  width: 100%;
}

</style>
