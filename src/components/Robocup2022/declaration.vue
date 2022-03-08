<template>
  <div class="rc22">
    <div class="text-center cta-area-declaration d-flex flex-column" style="">
      <v-row>
        <v-col
          lg="6"
          md="6"
          sm="12"
          xs="12"
          class="d-flex justify-center align-items-center"
        >
          <h1 id="" data-text="NO" class="word">MIXED GROUP</h1>
        </v-col>
        <v-col
          lg="6"
          md="6"
          sm="12"
          xs="12"
          class="d-flex justify-center align-items-center"
        >
          <h1 id="" data-text="NO" class="word">802.11b</h1>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
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
.cta-area-declaration {
  background: linear-gradient(
      179.37deg,
      rgba(21, 17, 49, 0.8) 60.07%,
      rgba(134, 129, 168, 0) 100.03%
    ),
    url("../../../public/Home/mac.jpeg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center 70%;
  position: relative;
  z-index: 1;
  padding: 150px 0;
}

.cta-area-declaration h1 {
  color: #fff;
  font-size: 30px;
}

.word {
    display:inline-block;
    line-height:1;
    position:relative;
}
.word:first-child {
    color:white;
}
.word:last-child {
    color:white;
}
.word:after {
    content:attr(data-text);
    position:relative;
    display:inline-block;
    overflow:hidden;
    max-width:0;
    color:red;
    font-size:20px;
    font-weight: bold;
    transition:max-width .5s ease-in;
    margin-left: 30px;
}
.rc22:hover .word:after {
    max-width:90px;
}
</style>