<template>
  <div>
    <div class="text-center cta-area-tdp d-flex flex-column" style="height: 100%">
      <h1 class="h1-contact-tdp text-center">Team Description Paper</h1>
      <h1 class="h1-contact-tdp text-center">2022</h1>
      <!-- <h2 class="text-center margin-about strip">Download Here!!!</h2> -->
      <a
        href="assets/Publications/Files/TDP/TDP_IRIS_ROBOCUP_2022_THAILAND.pdf"
        target="_blank"
        class="text-center margin-about strip"
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
      <!-- <v-btn
          onclick="readFiles()"
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
        </v-btn> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
      readFiles(){
          window.open("/assets/Publications/Files/TDP_IRIS_ROBOCUP_2022_THAILAND.pdf", "_blank");
      }
  },

  data() {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
};
</script>

<style>
* {
  font-family: Montserrat;
}
a {
  text-decoration: none;
}
.cta-area-tdp {
  background: linear-gradient(
      179.37deg,
      rgba(21, 17, 49, 0.8) 60.07%,
      rgba(134, 129, 168, 0) 100.03%
    ),
    url("../../../public/Home/kri-21.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center 70%;
  position: relative;
  z-index: 1;
  padding: 100px 0;
}
.top .teamDesc {
  display: inline-block;
  font-size: 24px;
  color: #1cc3b2;
  position: relative;
  margin-bottom: 15px;
  width: 1000px;
  padding-left: 115px;
}

.top {
  max-width: 770px;
}

.teamDesc::after {
  content: "";
  height: 2px;
  min-width: 100px;
  background-color: #3a414e;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.teamDesc::before {
  content: "";
  display: block;
  height: 2px;
  min-width: 200px;
  background-color: #3a414e;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

p {
  font-size: 19px;
}

.descPaper {
  font-size: 19px;
  color: #1cc3b2;
}

.h1-contact-tdp{
  color: #fff;
}

@media only screen and (min-width: 600px) {
  .h1-contact-tdp {
    font-size: 5vw;
  }
}
@media only screen and (max-width: 600px) {
  .h1-contact-tdp {
    font-size: 5vw;
  }
}
@media only screen and (min-width: 768px) {
  .h1-contact-tdp {
    font-size: 5vw;
  }
}
@media only screen and (min-width: 992px) {
  .h1-contact-tdp {
    font-size: 5vw;
  }
}
@media only screen and (min-width: 1200px) {
  .h1-contact-tdp {
    font-size: 3vw;
  }
}
@media only screen and (min-width: 1400px) {
  .h1-contact-tdp {
    font-size: 2vw;
  }
}

/* Loaders */
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 1400px) {
  .top .teamDesc {
    width: 1000px;
    padding-left: 115px;
  }
}
@media only screen and (max-width: 1200px) {
  .top .teamDesc {
    width: 1000px;
    padding-left: 115px;
  }
}
@media only screen and (max-width: 992px) {
  .top .teamDesc {
    width: 1000px;
    padding-left: 115px;
  }
}

@media only screen and (max-width: 768px) {
  .top .teamDesc {
    width: 674px;
    padding-left: 106px;
    font-size: 20px;
  }
  .teamDesc::after {
    /* min-width: 50px; */
    display: none;
  }
  .teamDesc::before {
    /* min-width: 50px; */
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .top .teamDesc {
    width: 584px;
    padding-left: 68px;
    font-size: 17px;
  }
  .teamDesc::after {
    min-width: 50px;
  }
  .teamDesc::before {
    min-width: 50px;
  }
}
</style>