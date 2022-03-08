<template>
  <div>
    <div class="text-center cta-area-mac d-flex flex-column" style="">
      <h1 class="h1-contact-mac text-center">MAC ADDRESSES</h1>
      <!-- <h2 class="text-center margin-about strip">Download Here!!!</h2> -->
      <a
        href="/public/assets/Publications/Files/TDP/ROBOCUP 2022_Mechanical_and_Electrical_Description_with_Software_Flow_Chart.pdf"
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
  padding: 150px 0;
}
</style>