<template>
  <div class="container-fluid d-flex justify-center my-5 py-5">
      <iframe
            src="https://www.youtube.com/embed/b6oTI_k6TFU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="iframe-yt"
            data-aos="fade-left"
            data-aos-duration="3000"
          ></iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.iframe-yt {
  width: 560px;
  height: 315px;
  // position: absolute;
  // top: 281px;
  border-radius: 2%;
  @media only screen and (min-width: 768px) {
    // position: absolute;
    // top: 0px;
    // left: 0px;
  }
}
</style>