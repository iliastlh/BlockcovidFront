<template>
  <div class="home mt-5">
    <div class="column half">
    <img alt="Vue logo" src="/../../assets/BlockCovid.png">
        
    <div class="alert alert-success" role="alert" v-if="success">
      {{ success }}
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error }}
    </div>
    <h2 v-if="!user">Welcome, please log in or register</h2>
    <h2 v-else>Hello, {{ user.email }}! You're in.
      <h2 v-if="user.type_createur === 'M'">Vous etes un medecin</h2>
    <h2 v-else>Vous etes un établissement.</h2>
    </h2>
    </div>
<div  id="widgetmain" class="column last"
 style="text-align:left;overflow-y:auto;overflow-x:hidden;width:1000px;background-color:#transparent; border:0px solid #0F0F0F;">
<div id="rsswidget" style="height:500px;">
<iframe src="http://us1.rssfeedwidget.com/getrss.php?time=1607515369410&amp;x=https%3A%2F%2Fwww.lalibre.be%2Frss%2Fdossier%2F5e304b4cf20d5a6521f0a721.xml&amp;w=1000&amp;h=500&amp;bc=0F0F0F&amp;bw=0&amp;bgc=transparent&amp;m=20&amp;it=true&amp;t=(default)&amp;tc=010F00&amp;ts=15&amp;tb=transparent&amp;il=true&amp;lc=0000FF&amp;ls=14&amp;lb=false&amp;id=true&amp;dc=333333&amp;ds=14&amp;idt=true&amp;dtc=284F2D&amp;dts=12"
 border="0" hspace="0" vspace="0" frameborder="no" marginwidth="0" marginheight="0" 
 style="border:0; padding:0; margin:0; width:1000px; height:500px;" id="rssOutput">
 Reading RSS Feed ...</iframe></div>
</div>
  </div>
</template>

<script>
import { mapGetters} from "vuex";

export default {
  name: "Home",

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
.mt-0{
margin-right: 50;
}
</style>