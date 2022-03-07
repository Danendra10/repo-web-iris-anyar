<template>
  <div class="my-5 px-10">
    <v-row>
      <v-col lg12 class="d-flex flex-row justify-end">
        <img v-for="n in headBottom" :key="n.id" :src="n.src" alt="" class="mx-4"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      headBottom: [
        {
          id: 1,
          src: require("../../../public/assets/Achivements/star3.png"),
        },
        {
          id: 2,
          src: require("../../../public/assets/Achivements/star4.png"),
        },
        {
          id: 3,
          src: require("../../../public/assets/Achivements/Vector.png"),
        },
        {
          id: 4,
          src: require("../../../public/assets/Achivements/star5.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>