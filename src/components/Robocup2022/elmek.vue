<template>
  <div>
    <div class="text-center cta-area-tdp d-flex flex-column py-5" style="">
      <h1 class="h1-contact-elmek text-center">Electrical Mechanical Description Paper</h1>
      <h1 class="h1-contact-elmek text-center">2022</h1>
      <!-- <h2 class="text-center margin-about strip">Download Here!!!</h2> -->
      <a
        href="/Publications/Files/TDP/ROBOCUP 2022_Mechanical_and_Electrical_Description_with_Software_Flow_Chart.pdf"
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
    </div>
  </div>
</template>

<script>
export default {
  // methods: {
  //     readFiles(){
  //         window.open("eam_Description_Paper_IRIS_2021.pdf", "_blank");
  //     }
  // },

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
  display: block;
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
    min-width: 50px;
  }
  .teamDesc::before {
    min-width: 50px;
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

.h1-contact-elmek{
  color: #fff;
  font-weight: bold!important;;
  font-size: 30px;
  letter-spacing: 30px;
}

@media only screen and (max-width: 600px)
{
  .h1-contact-elmek{
    /* font-size: 5vw;
    letter-spacing: 5px; */
    display: none;
  }
}
</style>