<template>
  <div id="news_feed" class="home mt-5">
    <h2 id="title_feed" class="text-center mb-4">Actualité Coronavirus en temps réel</h2>
    <div id="widgetmain">
      <div id="rsswidget">
        <iframe src="http://us1.rssfeedwidget.com/getrss.php?time=1607515369410&amp;
        x=https%3A%2F%2Fwww.lalibre.be%2Frss%2Fdossier%2F5e304b4cf20d5a6521f0a721.xml&amp;
        w=1000&amp;h=500&amp;bc=0F0F0F&amp;bw=0&amp;bgc=transparent&amp;m=20&amp;
        it=true&amp;t=(default)&amp;tc=010F00&amp;ts=15&amp;tb=transparent&amp;
        il=true&amp;lc=0000FF&amp;ls=14&amp;lb=false&amp;id=true&amp;dc=333333&amp;ds=14&amp;
        idt=true&amp;dtc=284F2D&amp;dts=12"
        border="0" hspace="0" vspace="0" frameborder="no" marginwidth="0" marginheight="0" 
        style="" id="rssOutput">
        </iframe>
      </div>
    </div>
  </div>
</template>

<style>
#news_feed {
  height: 100%;
  width: 100%;
}

#widgetmain {
  text-align:left;
  overflow-y:auto;
  overflow-x:hidden;
  width:100%;
  /* background-color:#transparent; */
  border:1px solid #0F0F0F;
}

#rsswidget{
  height:70vh;
}

#rssOutput{ 
  width:100%; 
  height:70vh;
}
</style>