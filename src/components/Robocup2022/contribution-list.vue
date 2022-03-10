<template>
  <div>
    <div class="text-center cta-area-contrib d-flex flex-column" style="">
      <h1 class="h1-contact-contrib text-center">Team's Contribution</h1>
      <ul>
        <li class="li-contact-contrib">
          Participate on Robocup 2019
        </li>
        <li class="li-contact-contrib">
          Participate on Robocup 2021
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data: () => {
    return {
      contribution: [
        {
          id: 1,
          title: "Participate on Robocup 2019",
        },
        {
          id: 2,
          title: "Participate on Robocup 2021",
        },
      ],
    };
  },
};
</script>

<style>
.cta-area-contrib {
  background: linear-gradient(
      179.37deg,
      rgba(21, 17, 49, 0.8) 60.07%,
      rgba(134, 129, 168, 0) 100.03%
    ),
    url("../../../public/Home/kri-2017.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center 70%;
  position: relative;
  padding: 100px 0;
  z-index: 1;  
  color: #fff;
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
    /* min-width: 50px; */
    display: none;
  }
  .teamDesc::before {
    min-width: 50px;
  }
}

.h1-contact-contrib{
  color: #fff;
  font-weight: bold!important;;
  font-size: 30px;
  letter-spacing: 30px;
}
.li-contact-contrib{
    color: #fff;
  font-weight: bold!important;;
  font-size: 20px;
}

@media only screen and (max-width: 600px)
{
  .h1-contact-contrib{
    font-size: 5vw;
    letter-spacing: 5px;
    /* display: none; */
  }
  .li-contact-contrib{
    color: #fff;
  font-weight: bold!important;;
  font-size: 20px;
}
}
</style>