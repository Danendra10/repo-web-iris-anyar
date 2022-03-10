<template>
  <div class="container-fluid" style="height: 100%">
      <Header />
      <Achivement />
      <TDP />
      <Papers />
      <Elmek/>
      <Video />
      <Declare />
      <Mac />
  </div>
</template>

<script>
import Header from "@/components/Robocup2022/header.vue";
import Achivement from "@/components/Robocup2022/achivements-list.vue";
import TDP from "@/components/Robocup2022/tdp.vue";
import Papers from "@/components/Robocup2022/papers.vue";
import Elmek from "@/components/Robocup2022/elmek.vue"
import Video from "@/components/Robocup2022/video.vue";
import Mac from "@/components/Robocup2022/mac.vue"
import Declare from "@/components/Robocup2022/declaration.vue"


export default {
    name: "Robocup2022",
    title: "Robocup 2022",
    components: {
        Header,
        Achivement,
        TDP,
        Papers,
        Elmek,
        Video,
        Mac,
        Declare
    },
};
</script>

<style>

</style>