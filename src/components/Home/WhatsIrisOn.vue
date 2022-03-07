<template>
  <v-container fluid id="on-event">
    <v-row>
      <v-col 
      cols="7" 
      xl="7"
      class="d-flex flex-column align-center justify-center pt-4">
        <div class="event-text container ">
          <h2>What IRIS on right now?</h2>
          <h2 id="event-special">IRIS on</h2>
        </div>
        <div class="container">
          <v-img
            v-for="item in vectors"
            :key="item.id"
            :src="item.src"
            :class="item.class"
          >
          </v-img>
        </div>
      </v-col>

      <v-col cols="5" xl="5">
        <p id="event-text-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem necessitatibus exercitationem officia debitis. Necessitatibus iste rerum excepturi consectetur, veniam nesciunt laboriosam itaque tenetur dolorum, libero corrupti cupiditate exercitationem minus!

          <!-- KRI (Kontes Robot Indonesia) is Indonesia's yearly competition for Indonesian college students.  -->
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      vectors: [
        {
          id: 1,
          src: require("../../../public/Home/IrisOn/Vector.png"),
          class: "special-img special-img-1",
        },
        {
          id: 2,
          src: require("../../../public/Home/IrisOn/Vector.png"),
          class: "special-img special-img-2",
        },
        {
          id: 3,
          src: require("../../../public/Home/IrisOn/Vector-1.png"),
          class: "special-img special-img-3",
        },
        {
          id: 4,
          src: require("../../../public/Home/IrisOn/Vector.png"),
          class: "special-img special-img-4",
        },
        {
          id: 5,
          src: require("../../../public/Home/IrisOn/Vector.png"),
          class: "special-img special-img-5",
        },
      ],
    };
  },
};
</script>

<style>
*{
  font-family: Montserrat!important;
}
.special-img {
  position: absolute;
}
.special-img-2 {
  left: 54px;
}
.special-img-3 {
  left: 100px;
}
.special-img-4 {
  left: 155px;
}
.special-img-5 {
  left: 300px;
}
.event-text {
  position: relative;
}
.event-text h2 {
  color: #151131;
  font-size: 100px;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: rgba(109, 220, 207, 1);
  z-index: 4 !important;
  /* text-shadow: -1px 1px 0 white, 1px 1px 0 white, 1px -1px 0 white,
    -1px -1px 0 white; */
}
p#event-text-text {
  width: 80%;
  margin: auto;
  text-align: justify;
  color: white;
  font-size: 20px;
  padding-top: 50px;
}
#on-event {
  position: relative;
  background: #151131;
}
#event-special {
  -webkit-text-stroke: 1px;
  font-size: 100px;
  position: absolute;
  top: 18px;
  left: 273px;
  /* font-family: Montserrat; */
  font-style: normal;
  /* font-weight: bold; */
  /* font-size: 72px; */
  /* line-height: 88px; */
  /* identical to box height */
  color: #e8e1f0;
  z-index: -1;
}
h2#event-special{
  left: 18vw;
}
@media only screen and (max-width: 1400px) 
{
  h2#event-special{
    display: none;
  }
  #on-event{
    margin-top: 100px;
  }
} 
@media only screen and (max-width: 1200px) 
{
  h2#event-special{
    display: none;
  }
  #on-event{
    margin-top: 50vw;
  }
} 

@media only screen and (max-width: 992px) 
{
  h2#event-special{
    display: none;
  }
  #on-event{
    margin-top: 50vw;
  }

}

@media only screen and (max-width: 768px) 
{
  h2#event-special{
    display: none;
  }
  #on-event{
    margin-top: 50vw;
  }
  p#event-text-text{
    line-height: 30px;
  }
  .event-text container h2{
    font-size: 20px;
  }
}

@media only screen and (max-width: 600px) 
{
  h2#event-special{
    display: none;
  }
  #on-event{
    margin-top: 50vw;
  }

}

</style>