<template>
  <div class="separator">
    <div class="d-flex justify-center">
      <div class="left-aboutteam mr-5"></div>
      <h2 class="mx-5 toFadeOnScroll">About Team</h2>
      <div class="right-aboutteam ml-5"></div>
    </div>

    <v-row class="p-relative">
      <v-col xl="6"
        lg="6"
        md="12"
        sm="12"
         class="left-content">
        <p>
          ITS' Robot with Intellegence System, or known as IRIS is Institut
          Teknologi Sepuluh Nopember (ITS) Robotic team focusing on autonomous
          soccer playing robots. Since it’s development in 2014, IRIS ITS has
          competed in the soccer robotic league since 2017 and managed to get a
          lot of achivements. The team consist of students of Institut Teknologi
          Sepuluh Nopember Surabaya. To build a great team and a robot that is
          capable of playing football, the team is divided into 4 divisions
          which are mechanical division, electrical division, programming
          division, and official division.
        </p>
      </v-col>

      <v-col xl="6"
        lg="6"
        md="12"
        sm="12"
         class="right-content">
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
        <img src="../../../public/Home/AboutTeam/Group1.png" alt="" style=" transform: scale(1.5); float: right;" class="robot-kanan">
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
.p-relative{
  position: relative;
}
* {
  font-family: Montserrat !important;
}
.robo-pos{
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
  font-size: 50px;
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
@media only screen and (max-width: 600px) 
{
  /* .robot-kanan{
    transform: scale(1);
    overflow:hidden;
    
  } */
  .right-content{
    display: none;
  }
  .right-aboutteam{
    width: 10%;
  }
  .p-relative{
    max-width: 80%;
  }
  .left-content{
    font-size: 10vw;
    line-height: 20px;
  }
}
  /* @media (max-width: 1400px) {
    .robo {
      top: 418px;
      left: 530px;
    }
    .vector {
      top: 688px;
      left: 470px;
    }
    .roda {
      top: 600px;
      left: 300px;
    }
  }
  @media (max-width: 1200px) {
    .robo {
      top: 318px;
      left: 980px;
    }
    .vector {
      top: 588px;
      left: 870px;
    }
    .roda {
      display: none;
      top: 630px;
      left: 550px;
    }
  }

  @media only screen and (max-width: 992px) {
    .robo {
      top: 180px;
      left: 800px;
    }
    .vector {
      top: 450px;
      left: 700px;
    }
    .roda {
      top: 350px;
      left: 600px;
    }
  }

  @media only screen and (max-width: 768px) {
    .robo {
      top: 90px;
      left: 550px;
    }
    .vector {
      top: 350px;
      left: 518px;
    }
    .roda {
      top: 350px;
      left: 600px;
    }
    .left-content p {
      line-height: 30px;
    }
  }

  @media only screen and (max-width: 600px) {
    .robo {
      top: 34px;
      left: 378px;
    }
    .vector {
      top: 292px;
      left: 344px;
    }
    .roda {
      top: 350px;
      left: 600px;
    }
    .left-content p {
      line-height: 20px;
    }
  } */
</style>
