<template>
  <div class="container-fluid mt-18" style="margin-top: 10%;">
        <div class="header-publication toRight d-flex align-center">
            <img src="../../../public/assets/Publications/Vectorstrip.png" alt="" class="strip">
            <img src="../../../public/assets/Publications/its.png" alt="" class="header-pub-elem">
            <img src="../../../public/assets/Publications/robotic.png" alt="" class="header-pub-elem">
            <img src="../../../public/assets/Publications/iris.png" alt="" class="header-pub-elem">
        </div>
        <div class="row fade">
            <div class="col-lg-4 col-sm-12">
                <img src="../../../public/assets/Publications/robo1.png" alt="" width=100%;>
            </div>
            <div class="col-lg-8 col-sm-12 publ d-flex flex-wrap align-items-center">
                <h1>IRIS ITS Publications</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  font-family: Montserrat;
}
.header-pub-elem {
  margin: 0 20px;
}

.header-publication .strip {
  width: 80%;
  height: 1px;
}

.header-publication {
  display: inline-block;
  width: 100%;
  margin: 10px auto;
}

.publ h1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 90px;
  line-height: 188px;
  font-weight: 900;
  color: rgba(18, 13, 49, 1) !important;
}

.bottom-assets {
  position: absolute;
  left: 62.4%;
  right: 14.48%;
  top: 108.03%;
  bottom: 7.47%;

  transform: scale(1.5);
}
@media only screen and (max-width: 1400px) 
{
  .publ h1 {
    font-size: 90px;
    padding: 170px 0;
  }
}
@media only screen and (max-width: 1200px) 
{
  .publ h1 {
    font-size: 120px;
    padding: 170px 0;
  }
} 
@media only screen and (max-width: 992px) 
{
  .publ h1 {
    font-size: 80px;
    padding: 40px 0;
  }
}

@media only screen and (max-width: 768px) 
{
  .publ h1 {
    font-size: 50px;
    padding: 40px 0;
  }
}

@media only screen and (max-width: 600px) 
{
  .publ h1 {
    font-size: 30px;
    padding: 40px 0;
  }
}

@media (max-width: 1251px) {

  .publ {
    justify-content: center;
  }
}
@media (max-width: 351px) {
  .publ h1 {
    font-size: 51px;
  }
}
@media (max-width: 835px) {
  .bottom-assets {
    position: absolute;
    left: 62.4%;
    right: 14.48%;
    top: 140.03%;
    bottom: 7.47%;
    /* display: flex; */

    transform: scale(1);
  }

  .header-publication .strip {
    width: 63%;
  }
}
</style>