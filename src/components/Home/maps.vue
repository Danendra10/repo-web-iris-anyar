<template>
  <section class="section-margin toTop">
    <div class="container-fluid" style="background: rgba(109, 220, 207, 1)">
      <div class="row p-lg-5">
        <div class="col-lg-2"></div>
        <div
          class="
            col-lg-4 col-md-12 col-sm-12
            d-flex
            flex-column
            align-self-center
            toRightOnScroll
          "
        >
          <h1 style="color: #fff" class="contact-us-footer-title text-center">
            Contact Us!
          </h1>
          <h4 class="contact-us-footer-content text-center">
            Laboratorium Workshop, Lantai II, Pusat Robotika ITSJl. Teknik
            Kimia, Kampus ITS Sukolilo, Surabaya, 60111+62
            822-3010-4565iris@its.ac.id
          </h4>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 toLeftOnScroll d-flex
            flex-column
            align-self-center
            toRightOnScroll">
          <div class="maps mb-5 py-5 ">
            <div id="map" style="height: 480px" class=" text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6770334679277!2d112.79825906334037!3d-7.277541360604612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa11c65fcca3%3A0x93e17758d6eeb2b1!2sITS%20Robotics%20Center!5e0!3m2!1sen!2sid!4v1645618639335!5m2!1sen!2sid"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style>
#map {
  height: 100%;
}

iframe{
  width: 600px;
  height: 450px;
}

.contact-us-footer-title{
  font-size: 30px;
}
h4.contact-us-footer-content{
    font-size: 15px;
  }

@media only screen and (max-width: 600px)
{
  iframe{
    max-width: 300px;
    max-height: 225px;
  }
  .contact-us-footer-title{
    font-size: 20px;
  }
  h4.contact-us-footer-content{
    font-size: 15px;
  }
}

@media only screen and (min-width: 600px)
{
  iframe{
    max-width: 400px;
    max-height: 300px;
  }
}

@media only screen and (min-width: 768px)
{
  iframe{
    max-width: 300px;
    max-height: 225px;
  }
}

@media only screen and (min-width: 992px)
{
  iframe{
    max-width: 600px;
    max-height: 450px;
  }
}

@media only screen and (min-width: 1200px)
{
  iframe{
    max-width: 600px;
    max-height: 450px;
  }
}

@media only screen and (min-width: 1400px)
{
  iframe{
    max-width: 600px;
    max-height: 450px;
  }
}
</style>