<template>
<div>
  <div class="text-center cta-area2 d-flex flex-column" style="height:100%">
    <h1 class="h1-contact-robocup text-center">ROBOCUP</h1>
    <h1 class="h1-contact-robocup text-center">2022</h1>
    <h2 class="text-center margin-about strip">ABOUT IRIS</h2>
    <!-- <h2 class="h2-contact">You Can Contact Us On</h2>
    <a
      href="/contactus"
      class="button strip"
      style="text-decoration: none"
      >Click Here!!</a
    > -->
    <p class="text-center margin-p">Get To Know The Team</p>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style>
@media only screen and (max-width: 600px)
{
  .h1-contact-robocup{
    font-size: 5vw;
  }
}
.margin-p
{
  margin-top: 10%;
  font-weight: 100!important;
  font-size: 30px;
}
.margin-about
{
  margin-top: 7%;
}
.h1-contact-robocup{
  color: #fff;
  font-weight: bold!important;;
  /* font-size: 60px; */
  letter-spacing: 30px;
}
.cta-area2 {
  background: linear-gradient(
      179.37deg,
      rgba(21, 17, 49, 0.8) 60.07%,
      rgba(134, 129, 168, 0) 100.03%
    ),
    url("../../../public/Home/robocup.png");
  background-attachment: fixed;
  background-size: cover;
  background-position: center 70%;
  position: relative;
  z-index: 1;
}
@media (min-width: 1200px) {
  .cta-area2 {
    padding: 120px 0 130px;
  }
}

@media (min-width: 768px) {
  .cta-area2 {
    padding: 120px 0 130px;
  }
}

@media (min-width: 600px) {
  .cta-area2 {
    padding: 120px 0 130px;
  }
}

.button {
  display: inline-block;
  background-color: #1cc3b2;
  color: #fff!important;  
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  padding: 9px 25px;
  text-transform: capitalize;
  -webkit-transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  -o-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}

.strip::before {
  content: "";
  position: absolute;
  left: 67.18%;
  right: 6.17%;
  top: 53.64%;
  bottom: 45.64%;

  background: linear-gradient(
    90deg,
    #151231 0%,
    #1a1b39 5.92%,
    #28354d 15.77%,
    #3e5e6e 28.34%,
    #5d979c 42.97%,
    #7accc6 55.21%,
    #7accc6 86.52%,
    #65a7db 99.44%
  );
}

.strip::after {
  content: "";
  position: absolute;
  left: 6.14%;
  right: 67.42%;
  top: 53.64%;
  bottom: 45.64%;

  background: linear-gradient(
    270deg,
    #151231 0%,
    #1a1b39 5.92%,
    #28354d 15.77%,
    #3e5e6e 28.34%,
    #5d979c 42.97%,
    #7accc6 55.21%,
    #7accc6 86.52%,
    #65a7db 99.44%
  );
}

.text-center p,
.text-center h2 {
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff !important;
}

/* .p-contact {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 22px;
} */

.h2-contact {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 29px;

  color: #e8e1f0;

  margin-top: 2%;
  margin-bottom: 2%;
}

@media only screen and (max-width: 600px)
{
  .h2-contact{
    font-size: 40px;
    line-height: 40px;   
  }
  /* .p-contact{
    font-size: 20px;
    line-height: 40px;   
  } */
}

</style>