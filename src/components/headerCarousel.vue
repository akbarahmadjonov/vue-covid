<template>
  <div>
    <div class="holdCarousel">
      <div class="headPhoto">
        <!-- NOTE! AOS Animation library was used down here  -->
        <div  data-aos="zoom-in" class="content">
          <h1>
            coronavirus shows the disease <br />
            within 14 days of entering <br />
            the body
          </h1>

          <p>
            Consectetur adipisicing elit sed do ei usmod tempor incididunt. <br />
            Enim minim veniam, quis nostrud exer citation ullamco laboris <br />
            commodo conse inquat duis aute irure dolor.
          </p>

          <div class="buttonSub">
            <button><a href="#">OUR SERVICES</a></button>
            <button><a href="#">CONTACT US</a></button>
          </div>
        </div>
        <div class="sickGirl">
          <!-- NOTE! AOS Animation library was used down here  -->
          <img  data-aos="zoom-in" src="~@/assets/images/header-sickgirl-photo.png" alt="Sick Girl" />
        </div>
      </div>

      <div class="iconsSlider">
        <font class="arrowLeft" :icon="['fas', 'angle-left']" />
        <font class="arrowRight" :icon="['fas', 'angle-right']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Styles below -->
<style scoped>
.content {
  padding-left: 85px;
  padding-right: 85px;
  margin-right: 88px;
}

.content h1 {
  text-transform: capitalize;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
  font-size: 42px;
  font-weight: 550;
  line-height: 45px;
  margin-bottom: 30px;
}

.content p {
  margin-bottom: 30px;
  color: #fff;
  font-size: 19px;
  line-height: 1.8em;
  font-weight: 550;
  opacity: 1;
  text-transform: capitalize;
  cursor: default;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.headPhoto {
  background-image: url("~@/assets/images/Header-blue-covid_1.jpg");
  height: 850px;
  background-repeat: no-repeat;
  background-position-x: center;
}

/* Sick Girl animation  */
.sickGirl img {
  animation-name: TopBottom;
  animation-duration: 3s;  /* I think it's time of starting */
  animation-iteration-count: infinite;   /* Rotating limit */
  animation-timing-function: linear;    /* Rotating */
}

@keyframes TopBottom  {
  0% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  50% {
    -webkit-transform: translateY(-1px);
    transform: translateY(-10px);
  }

  100% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
/* Sick Girl animation  */

.headPhoto {
  display: flex;
  padding: 190px 0;
}

.buttonSub button:nth-child(1) {
  background: #780bd5;
  color: #fff;
  border: none;
  outline: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 15.5px;
  line-height: 24px;
  padding: 12px 40px;
  border-radius: 9px;
  font-weight: 550;
  margin-right: 20px;
  transition: all 0.2s ease-in-out;
  border: 2px solid #780bd5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.buttonSub button:nth-child(1):hover {
  background: #a846fa;
  border: 2px solid #a846fa;
}

.buttonSub button:nth-child(2) {
  color: #fff;
  border: none;
  outline: none;
  letter-spacing: 1px;
  border: 2px solid #fff;
  text-transform: uppercase;
  border-radius: 9px;
  background: none;
  line-height: 24px;
  font-weight: 550;
  padding: 12px 40px;
  transition: all 0.2s ease-in-out;
}

.buttonSub a {
  color: #fff;
  text-decoration: none;
}

.buttonSub button:nth-child(2):hover {
  background: #a846fa;
  border: 2px solid#a846fa;
}

.arrowRight {
  position: absolute;
  color: #fff;
  right: 10px;
  top: 88%;
  font-family: "icomoon" !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  display: inline-block;
  width: 58px;
  height: 60px;
  border-radius: 50%;
  transition: all 500ms ease;
  opacity: 0.6;
}

.arrowLeft {
  position: absolute;
  color: #fff;
  left: 10px;
  top: 88%;
  font-family: "icomoon" !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  display: inline-block;
  width: 58px;
  height: 60px;
  border-radius: 50%;
  transition: all 500ms ease;
  opacity: 0.6;
}

.arrowLeft:hover,
.arrowRight:hover {
  background: #4c1c7a;
}

/* #################*/
/* Media queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  .content {
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 0px;
  }

  .content h1 {
    font-size: 35px;
    font-weight: 550;
    line-height: 40px;
    margin-bottom: 30px;
  }

  .content p {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1.8em;
    font-weight: 550;
    opacity: 1;
    width: 90%;
  }

  .headPhoto {
    background-image: url("~@/assets/images/Header-blue-covid_1.jpg");
    height: 922px;
  }

  /*
   *Sick Girl Image*
  */
  .sickGirl img {
    display: none;
  }
  /*
   *Sick Girl Image*
  */

  .headPhoto {
    display: flex;
    padding: 80px 0;
  }

  .buttonSub button:nth-child(1) {
    letter-spacing: 1px;
    font-size: 15.5px;
    line-height: 24px;
    padding: 12px 35px;
    border-radius: 5px;
    font-weight: 550;
    margin-right: 20px;
    margin-bottom: 25px;
  }

  .buttonSub button:nth-child(2) {
    letter-spacing: 1px;
    border-radius: 5px;
    line-height: 24px;
    font-weight: 550;
    padding: 12px 40px;
  }

  .arrowRight {
    display: none;
    /*position: absolute;
    right: 10px;
    top: 88%;
    line-height: 1;
    display: inline-block;
    width: 58px;
    height: 60px; */
  }

  .arrowLeft {
    display: none;
    /*position: absolute;
    left: 10px;
    top: 88%;
    line-height: 1;
    display: inline-block;
    width: 58px;
    height: 60px;
     */
  }
  /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .content {
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 0px;
  }

  .content h1 {
    font-size: 38px;
    font-weight: 550;
    line-height: 42px;
    margin-bottom: 30px;
  }

  .content p {
    margin-bottom: 30px;
    font-size: 17px;
    line-height: 1.8em;
    font-weight: 550;
    opacity: 1;
  }

  .headPhoto {
    background-image: url("~@/assets/images/Header-blue-covid_1.jpg");
    height: 850px;
  }

  /*
   *Sick Girl Image*
  */
  .sickGirl img {
    display: none;
  }
  /*
   *Sick Girl Image*
  */

  .headPhoto {
    display: flex;
    padding: 80px 0;
  }

  .buttonSub button:nth-child(1) {
    letter-spacing: 1px;
    font-size: 15.5px;
    line-height: 24px;
    padding: 13px 37px;
    border-radius: 7px;
    font-weight: 550;
    margin-right: 20px;
    margin-bottom: 25px;
  }

  .buttonSub button:nth-child(2) {
    letter-spacing: 1px;
    border-radius: 7px;
    line-height: 24px;
    font-weight: 550;
    padding: 13px 37px;
  }

  .arrowRight {
    display: none;
    /*position: absolute;
    right: 10px;
    top: 88%;
    line-height: 1;
    display: inline-block;
    width: 58px;
    height: 60px; */
  }

  .arrowLeft {
    display: none;
    /*position: absolute;
    left: 10px;
    top: 88%;
    line-height: 1;
    display: inline-block;
    width: 58px;
    height: 60px;
     */
  }
  /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .content {
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 0px;
  }

  .content h1 {
    font-size: 40px;
    font-weight: 550;
    line-height: 42px;
    margin-bottom: 30px;
  }

  .content p {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1.8em;
    font-weight: 550;
    opacity: 1;
  }

  .headPhoto {
    background-image: url("~@/assets/images/Header-blue-covid_1.jpg");
    height: 850px;
  }

  /*
   *Sick Girl Image*
  */
  .sickGirl img {
    display: none;
  }
  /*
   *Sick Girl Image*
  */

  .headPhoto {
    display: flex;
    padding: 80px 0;
  }

  .buttonSub button:nth-child(1) {
    letter-spacing: 1px;
    font-size: 15.5px;
    line-height: 24px;
    padding: 13px 38px;
    border-radius: 7px;
    font-weight: 550;
    margin-right: 20px;
    margin-bottom: 25px;
  }

  .buttonSub button:nth-child(2) {
    letter-spacing: 1px;
    border-radius: 7px;
    line-height: 24px;
    font-weight: 550;
    padding: 13px 38px;
  }

  .arrowRight {
    display: none;
    /*position: absolute;
    right: 10px;
    top: 88%;
    line-height: 1;
    display: inline-block;
    width: 58px;
    height: 60px; */
  }

  .arrowLeft {
    display: none;
    /*position: absolute;
    left: 10px;
    top: 88%;
    line-height: 1;
    display: inline-block;
    width: 58px;
    height: 60px;
     */
  }
  /* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .content {
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 0px;
    width: 70%;
  }

  .content h1 {
    font-size: 40px;
    font-weight: 550;
    line-height: 42px;
    margin-bottom: 30px;
  }

  .content p {
    margin-bottom: 30px;
    font-size: 19px;
    line-height: 1.8em;
    font-weight: 550;
    opacity: 1;
  }

  .headPhoto {
    background-image: url("~@/assets/images/Header-blue-covid_1.jpg");
    height: 850px;
  }

  /*
   *Sick Girl Image*
  */
  .sickGirl img {
    display: block;
    width: 90%;
    margin-right: 20px;
  }
  /*
   *Sick Girl Image*
  */

  .headPhoto {
    display: flex;
    padding: 185px 0;
  }

  .buttonSub button:nth-child(1) {
    letter-spacing: 1px;
    font-size: 15.5px;
    line-height: 24px;
    padding: 13px 40px;
    border-radius: 7px;
    font-weight: 550;
    margin-right: 20px;
    margin-bottom: 25px;
  }

  .buttonSub button:nth-child(2) {
    letter-spacing: 1px;
    border-radius: 7px;
    line-height: 24px;
    font-weight: 550;
    padding: 13px 40px;
  }

  .arrowRight {
    display: none;
    /*position: absolute;
    right: 10px;
    top: 88%;
    line-height: 1;
    display: inline-block;
    width: 58px;
    height: 60px; */
  }

  .arrowLeft {
    display: none;
    /*position: absolute;
    left: 10px;
    top: 88%;
    line-height: 1;
    display: inline-block;
    width: 58px;
    height: 60px;
     */
  }
  /* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px) {
  .content {
    padding-left: 70px;
    padding-right: 70px;
    margin-right: 0px;
    width: 100%;
  }

  .content h1 {
    font-size: 42px;
    font-weight: 550;
    line-height: 42px;
    margin-bottom: 30px;
  }

  .content p {
    margin-bottom: 30px;
    font-size: 19px;
    line-height: 1.8em;
    font-weight: 550;
    opacity: 1;
  }

  .headPhoto {
    background-image: url("~@/assets/images/Header-blue-covid_1.jpg");
    height: 850px;
  }

  /*
   *Sick Girl Image*
  */
  .sickGirl img {
    display: block;
    margin-right: 70px;
  }
  /*
   *Sick Girl Image*
  */

  .headPhoto {
    display: flex;
    padding: 185px 0;
  }

  .buttonSub button:nth-child(1) {
    letter-spacing: 1px;
    font-size: 15.5px;
    line-height: 24px;
    padding: 13px 41px;
    border-radius: 7px;
    font-weight: 550;
    margin-right: 20px;
    margin-bottom: 25px;
  }

  .buttonSub button:nth-child(2) {
    letter-spacing: 1px;
    border-radius: 7px;
    line-height: 24px;
    font-weight: 550;
    padding: 13px 41px;
  }

  .arrowRight {
    display: block;
    position: absolute;
    right: 10px;
    top: 100%;
    line-height: 1;
    display: inline-block;
    width: 58px;
    height: 60px;
  }

  .arrowLeft {
    display: block;
    position: absolute;
    left: 10px;
    top: 100%;
    line-height: 1;
    display: inline-block;
    width: 58px;
    height: 60px;
  }
  /* 1201px and 1315px */
}

/*
* Congratulations , This HeadCarousel Page ' Responsive and looks good on any device ' *
 */
</style>
