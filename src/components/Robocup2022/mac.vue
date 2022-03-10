<template>
  <div>
    <div class="text-center cta-area-mac d-flex flex-column" style="">
      <h1 class="h1-contact-mac text-center">MAC ADDRESSES</h1>
      <!-- <h2 class="text-center margin-about strip">Download Here!!!</h2> -->
      <a
        href="/assets/Publications/Files/mac-address.txt"
        target="_blank"
        class="text-center margin-about"
      >
        <v-btn
          depressed
          color="#6DDCCF"
          :loading="loading4"
          :disabled="loading4"
          @click="loader = 'loading4'"
          lg="2"
          md="12"
          rounded
          Plain
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Download
        </v-btn></a
      >
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.cta-area-mac {
  background-color: #1cc3b2;
  background-attachment: fixed;
  background-size: cover;
  background-position: center 70%;
  position: relative;
  z-index: 1;
  padding: 100px 0;
}

@media only screen and (min-width: 600px) {
  .h1-contact-elmek {
    font-size: 5vw;
  }
}
@media only screen and (max-width: 600px) {
  .h1-contact-elmek {
    font-size: 5vw;
  }
}
@media only screen and (min-width: 768px) {
  .h1-contact-elmek {
    font-size: 5vw;
  }
}
@media only screen and (min-width: 992px) {
  .h1-contact-elmek {
    font-size: 5vw;
  }
}
@media only screen and (min-width: 1200px) {
  .h1-contact-elmek {
    font-size: 3vw;
  }
}
@media only screen and (min-width: 1400px) {
  .h1-contact-elmek {
    font-size: 2vw;
  }
}
</style>