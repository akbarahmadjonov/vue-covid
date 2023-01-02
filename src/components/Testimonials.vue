<template>
  <div>
    <div class="headTest">
      <div class="testInfo">
        <h4>testimonials</h4>
        <h1>what people say</h1>
        <img src="~@/assets/images/blue-line.png" alt="Blue Line" />
      </div>
    </div>
    <!-- Header Info -->

    <div class="peopleSays">
      <transition name='fade'>
      <div v-if='slide === 1'  class="infoCarousel">
        <!-- Previous Slides -->
        <font
        @click="prevSlide"
         class="previousButton"
         :icon="['fas', 'angle-left']" />
         <!-- Next Slides -->
        <font
         @click="nextSlide"
          class="nextButton"
         :icon="['fas', 'angle-right']" />

        <img src="~@/assets/images/testimonials_patient-1.png" alt="Patient-1">
        <p>I'm so happy, Yesterday I couldn't even breathe enough <span>&#128553;</span> <br> But today I feel good than always!  <br> My please is that,  Please take care. </p>
        <div class="nameOfPatient">
          <h5>robert hasib</h5>
          <h6>happy patient</h6>
        </div>
      </div>
    </transition>
    </div>

    <div  class="peopleSays">
      <transition name='fade'>
      <div v-if='slide === 2'  class="infoCarousel">
        <!-- Previous Slides -->
        <font @click='prevSlide'
         class="previousButton"
         :icon="['fas', 'angle-left']" />
         <!-- Next Slides -->
        <font @click='nextSlide'
         class="nextButton"
         :icon="['fas', 'angle-right']" />

        <img src="~@/assets/images/testimonials_patient-2.png" alt="Patient-2">
        <p>This was great, What if this <strong>hospital</strong> wasn't available <span>&#128515;</span> <br> I really appreciate all the doctors <br> Please use , don't forget to wear a <strong>Mask</strong> and take care! </p>
        <div class="nameOfPatient">
          <h5>albert foysal</h5>
          <h6>happy patient</h6>
        </div>
      </div>
    </transition>
    </div>

    <div class="peopleSays">
      <transition name='fade'>
      <div v-if='slide === 3' class="infoCarousel">
        <!-- Previous Slides -->
        <font @click='prevSlide'
         class="previousButton"
          :icon="['fas', 'angle-left']" />
          <!-- Next Slides -->
        <font @click='nextSlide'
        class="nextButton"
         :icon="['fas', 'angle-right']" />

        <img src="~@/assets/images/testimonials_patient-3.png" alt="Patient-3">
        <p>I really appreciate Mr.John doctor, and He has enough experience, <br>  and so Thanks to those doctors who treated me :) <br> and Please use <strong>Mask</strong> everyday.   </p>
        <div class="nameOfPatient">
          <h5>willum jamil</h5>
          <h6>happy patient</h6>
        </div>
      </div>
    </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      // Testimonials [ Slides ]
        slide: 1
    }
  },
  // [Slide] onClick events
  methods: {
    // To see next [People's testimonials] click this 'nextSlide' button.
    nextSlide:function () {
       // alert('you clicked nextSlide');
       this.slide = this.slide + 1;
       if ( this.slide === 4 ) {
         this.slide = 1;
       }
  },
// To see previous [People's testimonials] click this 'prevSlide' button.
    prevSlide:function () {
      this.slide = this.slide - 1;
      if ( this.slide === 0 ) {
        this.slide = 3;
        console.log('You clicked prevSlide button');
      }
    }
}
}
</script>

<style scoped>
.headTest {
  margin-top: 90px;
  margin-bottom: 50px;
}

.testInfo h4 {
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #780bd5;
  margin-bottom: 8px;
}

.testInfo h1 {
  text-transform: capitalize;
  color: #333;
  font-size: 38px;
  font-weight: 500;
  line-height: 38px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.headTest {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Header Info */

.peopleSays {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.infoCarousel  img {
  margin-bottom: 20px;
}

/* Previous Carousel Button */
.previousButton {
  position: absolute;
  left: 15%;
  margin-top: 60px;
  background: rgb(120, 11, 213);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 25px;
  color: #fff;
  width: 60px;
  border: 2px solid #780bd5;
  height: 50px;
  border-radius: 10px;
}
/* Previous Carousel Button */

/* Next Carousel Button */
.nextButton {
  position: absolute;
  right: 15%;
  margin-top: 60px;
  background: rgb(120, 11, 213);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 25px;
  color: #fff;
  width: 60px;
  border: 2px solid #780bd5;
  height: 50px;
  border-radius: 10px;
}

.previousButton:hover,
.nextButton:hover {
  color: #780bd5;
  background: #fff;
  border: 2px solid #780bd5;
  transition: all .2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.5;
}

.fade-enter-active,
.fade-enter-leave {
  transition: all 0.3s;
}
/* Next Carousel Button */


.infoCarousel p {
  color: rgb(132, 132, 132);
  font-size: 20px;
  line-height: 1.6em;
  font-family: Calibri;
}

.infoCarousel h5 {
  font-size: 20px;
  text-transform: capitalize;
  font-family: Roboto, sans-serif;
  color: #780bd5;
  margin-top: 20px;
  margin-bottom: 15px;
}

.infoCarousel h6 {
  font-size: 16px;
  color: rgb(51, 51, 51);
  text-transform: capitalize;
}

/* ************************* */
/* Media Queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  .headTest {
    margin-top: 90px;
    margin-bottom: 50px;
  }

  .testInfo h4 {
    font-size: 18px;
    font-weight: 550;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .testInfo h1 {
    text-transform: capitalize;
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  }

  .headTest {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /* Header Info */

  .peopleSays {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .infoCarousel  img {
    margin-bottom: 20px;
  }

  /* Previous Carousel Button */
  .previousButton {
    position: absolute;
    left: 5%;
    margin-top: 60px;
    font-size: 25px;
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
  /* Previous Carousel Button */

  /* Next Carousel Button */
  .nextButton {
    position: absolute;
    right: 5%;
    margin-top: 60px;
    font-size: 25px;
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0.5;
  }

  .fade-enter-active,
  .fade-enter-leave {
    transition: all 0.3s;
  }
  /* Next Carousel Button */


  .infoCarousel p {
    font-size: 20px;
    line-height: 1.6em;
    margin-top: 18px;
    margin: 10px 10px;
  }

  .infoCarousel h5 {
    font-size: 19px;
    margin-top: 18px;
    margin-bottom: 15px;
  }

  .infoCarousel h6 {
    font-size: 15px;
  }
/* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .headTest {
    margin-top: 90px;
    margin-bottom: 50px;
  }

  .testInfo h4 {
    font-size: 18px;
    font-weight: 550;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .testInfo h1 {
    text-transform: capitalize;
    font-size: 32px;
    font-weight: 500;
    line-height: 38px;
  }

  .headTest {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /* Header Info */

  .peopleSays {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .infoCarousel  img {
    margin-bottom: 20px;
  }

  /* Previous Carousel Button */
  .previousButton {
    position: absolute;
    left: 8%;
    margin-top: 60px;
    font-size: 25px;
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
  /* Previous Carousel Button */

  /* Next Carousel Button */
  .nextButton {
    position: absolute;
    right: 8%;
    margin-top: 60px;
    font-size: 25px;
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0.6;
  }

  .fade-enter-active,
  .fade-enter-leave {
    transition: all 0.3s;
  }
  /* Next Carousel Button */


  .infoCarousel p {
    font-size: 20px;
    line-height: 1.6em;
    margin-top: 18px;
    margin: 10px 10px;
  }

  .infoCarousel h5 {
    font-size: 20px;
    margin-top: 18px;
    margin-bottom: 15px;
  }

  .infoCarousel h6 {
    font-size: 16px;
  }
/* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .headTest {
    margin-top: 90px;
    margin-bottom: 50px;
  }

  .testInfo h4 {
    font-size: 18px;
    font-weight: 550;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .testInfo h1 {
    text-transform: capitalize;
    font-size: 34px;
    font-weight: 500;
    line-height: 38px;
  }

  .headTest {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /* Header Info */

  .peopleSays {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .infoCarousel  img {
    margin-bottom: 20px;
  }

  /* Previous Carousel Button */
  .previousButton {
    position: absolute;
    left: 12%;
    margin-top: 60px;
    font-size: 25px;
    width: 55px;
    height: 50px;
    border-radius: 15px;
  }
  /* Previous Carousel Button */

  /* Next Carousel Button */
  .nextButton {
    position: absolute;
    right: 12%;
    margin-top: 60px;
    font-size: 25px;
    width: 55px;
    height: 50px;
    border-radius: 15px;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0.6;
  }

  .fade-enter-active,
  .fade-enter-leave {
    transition: all 0.3s;
  }
  /* Next Carousel Button */


  .infoCarousel p {
    font-size: 20px;
    line-height: 1.6em;
    margin-top: 18px;
    margin: 10px 10px;
  }

  .infoCarousel h5 {
    font-size: 20px;
    margin-top: 18px;
    margin-bottom: 15px;
  }

  .infoCarousel h6 {
    font-size: 16px;
  }
/* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .headTest {
    margin-top: 90px;
    margin-bottom: 50px;
  }

  .testInfo h4 {
    font-size: 18px;
    font-weight: 550;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .testInfo h1 {
    text-transform: capitalize;
    font-size: 37px;
    font-weight: 500;
    line-height: 38px;
  }

  .headTest {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /* Header Info */

  .peopleSays {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .infoCarousel  img {
    margin-bottom: 20px;
  }

  /* Previous Carousel Button */
  .previousButton {
    position: absolute;
    left: 14%;
    margin-top: 60px;
    font-size: 25px;
    width: 58px;
    height: 50px;
    border-radius: 15px;
  }
  /* Previous Carousel Button */

  /* Next Carousel Button */
  .nextButton {
    position: absolute;
    right: 14%;
    margin-top: 60px;
    font-size: 25px;
    width: 58px;
    height: 50px;
    border-radius: 15px;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0.6;
  }

  .fade-enter-active,
  .fade-enter-leave {
    transition: all 0.3s;
  }
  /* Next Carousel Button */


  .infoCarousel p {
    font-size: 20px;
    line-height: 1.6em;
    margin-top: 18px;
    margin: 10px 10px;
  }

  .infoCarousel h5 {
    font-size: 20px;
    margin-top: 18px;
    margin-bottom: 15px;
  }

  .infoCarousel h6 {
    font-size: 16px;
    margin-bottom: 40px;
  }
/* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px) {
  .headTest {
    margin-top: 90px;
    margin-bottom: 50px;
  }

  .testInfo h4 {
    font-size: 18px;
    font-weight: 550;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .testInfo h1 {
    text-transform: capitalize;
    font-size: 37px;
    font-weight: 500;
    line-height: 38px;
  }

  .headTest {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /* Header Info */

  .peopleSays {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .infoCarousel  img {
    margin-bottom: 20px;
  }

  /* Previous Carousel Button */
  .previousButton {
    position: absolute;
    left: 18%;
    margin-top: 60px;
    font-size: 25px;
    width: 60px;
    height: 50px;
    border-radius: 17px;
  }
  /* Previous Carousel Button */

  /* Next Carousel Button */
  .nextButton {
    position: absolute;
    right: 18%;
    margin-top: 60px;
    font-size: 25px;
    width: 60px;
    height: 50px;
    border-radius: 18px;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0.2;
  }

  .fade-enter-active,
  .fade-enter-leave {
    transition: all .2s ease-in;
  }
  /* Next Carousel Button */


  .infoCarousel p {
    font-size: 20px;
    line-height: 1.6em;
    margin-top: 18px;
    margin: 10px 10px;
  }

  .infoCarousel h5 {
    font-size: 20px;
    margin-top: 18px;
    margin-bottom: 15px;
  }

  .infoCarousel h6 {
    font-size: 16px;
  }
/* 1201px and 1315px */
}
</style>
