<template>
  <div class="separator">
    <div class="d-flex justify-center">
      <div class="left-aboutteam mr-5"></div>
      <h2 class="mx-5 toFadeOnScroll">About Team</h2>
      <div class="right-aboutteam ml-5"></div>
    </div>

    <v-row class="p-relative">
      <v-col xl="6" lg="6" md="12" sm="12" class="left-content">
        <p>
          ITS Robot with Intelligence System or known as IRIS is a Robotics team
          Institut Teknologi Sepuluh Nopember (ITS) which focuses on autonomous
          soccer game robots. Since being developed in 2017, IRIS ITS has
          competed in soccer robotics especially middle size league, since 2017
          and managed to make many achievements. The team consists of students
          of Institut Teknologi Sepuluh Nopember Surabaya. To build a great team
          and robots that are capable of playing soccer, the team is divided
          into 4 divisions, namely the mechanical electrical, programming, and
          official. In addition to his research in the field of robotic soccer
          games, the research development of the IRIS team can be used in world
          industrial automation, control, health, and the emergence of imagery.
        </p>
      </v-col>

      <v-col xl="6" lg="6" md="12" sm="12" class="right-content">
        <h2>What is</h2>
        <h2 class="mt-5">IRIS?</h2>
        <!-- <div class="robo-pos">
          <img
            v-for="pict in rightRobo"
            :key="pict.id"
            :src="pict.src"
            :class="pict.class"
            style="transform: scale(1.5)"
            class=""
          />
        </div> -->
        <img
          src="../../../public/Home/AboutTeam/Group1.png"
          alt=""
          style="transform: scale(1.2); float: right"
          class="robot-kanan"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      rightRobo: [
        {
          id: 1,
          name: "robo",
          src: require("../../../public/Home/AboutTeam/robo.png"),
          class: "robo",
        },
        {
          id: 2,
          name: "roda",
          src: require("../../../public/Home/AboutTeam/roda.png"),
          class: "roda",
        },
        {
          id: 3,
          name: "vector",
          src: require("../../../public/Home/AboutTeam/Vector.png"),
          class: "vector",
        },
      ],
    };
  },
};
</script>

<style>
.p-relative {
  position: relative;
}
* {
  font-family: Montserrat !important;
}
.robo-pos {
  position: absolute;
  top: 0;
  left: 0;
}
.separator {
  margin-top: 5%;
}
.left-aboutteam {
  width: 15%;
  height: 1px;
  border: 1px solid rgba(112, 112, 112, 1);
  background: rgba(112, 112, 112, 1);
  margin-top: 20px;
}

.right-aboutteam {
  width: 65%;
  height: 1px;
  border: 1px solid rgba(112, 112, 112, 1);
  background: rgba(112, 112, 112, 1);
  margin-top: 20px;
}

.left-content p {
  font-family: Montserrat;
  font-style: normal;
  font-size: 2vw;
  line-height: 60px;
  text-align: justify;
  margin: 0 auto;
  /* width: 800px; */
  width: auto;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-content h2 {
  margin: 10px auto;
  font-weight: bold;
  font-family: Montserrat;
  font-size: 37px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
}

.right-content {
  position: relative;
}

.robo {
  position: absolute;
  z-index: 3;
  top: 418px;
  left: 730px;
}

.vector {
  position: absolute;
  top: 680px;
  left: 680px;
  z-index: 2;
}

.roda {
  position: absolute;
  top: 580px;
  left: 520px;
  z-index: 3;
}
@media only screen and (min-width: 768px) {
  .right-content {
    display: block;
  }
}
@media only screen and (min-width: 600px) {
  .right-content {
    display: block;
  }
}
@media only screen and (max-width: 600px) {
  /* .robot-kanan{
    transform: scale(1);
    overflow:hidden;
    
  } */
  .right-content {
    display: none;
  }
  .right-aboutteam {
    width: 10%;
  }
  .p-relative {
    max-width: 80%;
  }
}
</style>
