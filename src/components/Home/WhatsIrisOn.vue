<template>
  <v-container fluid id="on-event">
    <v-row>
      <v-col 
      cols="7" 
      xl="7"
      class="d-flex flex-column align-center justify-center">
        <div class="event-text container ">
          <h2>What IRIS on right now?</h2>
          <h3 id="event-special">IRIS on</h3>
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
          RoboCup is an annual international competition that was founded in 1997. RoboCup activities are participated by strong teams from all continents. The purpose of this competition is to develop a team of fully autonomous robots to fight against human teams in the FIFA World Cup targeted at 2050. 
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
  padding: 100px 0;
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
@media only screen and (min-width: 1400px) 
{
  h2#event-special{
    display: none;
  }
  #on-event{
    margin-top: 0px;
  }
} 
@media only screen and (min-width: 1200px) 
{
  h2#event-special{
    display: none;
  }
  #on-event{
    margin-top: 0;
  }
} 

@media only screen and (min-width: 992px) 
{
  h2#event-special{
    display: none;
  }
  #on-event{
    margin-top: 0;
  }

}

@media only screen and (min-width: 768px) 
{
  h2#event-special{
    display: none;
  }
  #on-event{
    margin-top: 0;
  }
  p#event-text-text{
    line-height: 25px;
  }
  .event-text container h2{
    font-size: 20px;
  }
}

@media only screen and (min-width: 600px) 
{
  h2#event-special{
    display: none;
  }
  #on-event{
    margin-top: 0;
  }
  .event-text h2{
    font-size: 60px;
  }
  .event-text-text{
    font-size: 10px;
  }
}

@media only screen and (max-width: 600px)
{
  #event-special{
    display: none;
  }
  #on-event{
    margin-top: 0;
  }
  .event-text h2{
    font-size: 60px;
  }
  .event-text-text{
    font-size: 30px;
  }
  .special-img-5{
    display: none;
  }
}

</style>