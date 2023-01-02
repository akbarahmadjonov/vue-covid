<template>
  <div>
    <div id="backgroundContent">
      <img
        class="rotateIcon"
        src="~@/assets/images/footer-covid19-background-rotate.png"
        alt=""
      />
      <div class="containerHead">
        <h1>
          It is a virus that shows the disease within 14 days of <br />
          entering the body. Contact us immediately if <br />
          Coronavirus is detected
        </h1>
      </div>
    </div>
  </div>
</template>

<!-- Styles -->

<style scoped>
#backgroundContent {
  background-image: url(~@/assets/images/Coronavirus-isdetected-image.jpg);
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  margin-top: 105px;
  margin-bottom: 105px;
}

#backgroundContent::before {
  position: absolute;
  content: "";
  background: linear-gradient(
    30deg,
    rgba(51, 0, 94, 0.92) 26%,
    rgba(120, 11, 213, 0.9) 85%
  );
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}

.rotateIcon {
  position: absolute;
  top: 35%;
  left: 70%;
  z-index: 999;
  opacity: 0.2;
  user-select: none;
  -webkit-user-drag: none;
  animation-name: rotateIcon;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.containerHead h1 {
  position: relative;
  padding-top: 80px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
  font-size: 37px;
  font-weight: 450;
  line-height: 42px;
  text-align: center;
}

@keyframes rotateIcon {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotateIcon {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes rotateIcon {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-o-keyframes rotateIcon {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}

/* **************** */
/* Media Queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  #backgroundContent {
    background-image: url(~@/assets/images/Coronavirus-isdetected-image.jpg);
    height: 380px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    margin-top: 105px;
    margin-bottom: 105px;
  }

  #backgroundContent::before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .rotateIcon {
    position: absolute;
    top: 42%;
    left: 20%;
    z-index: 999;
    width: 45%;
    opacity: 0.3;
  }

  .containerHead h1 {
    position: relative;
    padding-top: 50px;
    font-size: 28px;
    font-weight: 450;
    width: 100%;
    line-height: 45px;
  }
  /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  #backgroundContent {
    background-image: url(~@/assets/images/Coronavirus-isdetected-image.jpg);
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    margin-top: 105px;
    margin-bottom: 105px;
  }

  #backgroundContent::before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .rotateIcon {
    position: absolute;
    top: 25%;
    left: 20%;
    z-index: 999;
    width: 33%;
    opacity: 0.3;
  }

  .containerHead h1 {
    position: relative;
    padding-top: 80px;
    font-size: 35px;
    font-weight: 450;
    width: 100%;
    line-height: 45px;
  }
  /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  #backgroundContent {
    background-image: url(~@/assets/images/Coronavirus-isdetected-image.jpg);
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    margin-top: 105px;
    margin-bottom: 105px;
  }

  #backgroundContent::before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .rotateIcon {
    position: absolute;
    top: 25%;
    left: 20%;
    z-index: 999;
    width: 25%;
    opacity: 0.3;
  }

  .containerHead h1 {
    position: relative;
    padding-top: 80px;
    font-size: 32px;
    font-weight: 450;
    width: 100%;
    line-height: 45px;
  }
  /* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  #backgroundContent {
    background-image: url(~@/assets/images/Coronavirus-isdetected-image.jpg);
    height: 340px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    margin-top: 105px;
    margin-bottom: 105px;
  }

  #backgroundContent::before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .rotateIcon {
    position: absolute;
    top: 25%;
    left: 50%;
    z-index: 999;
    width: 20%;
    opacity: 0.3;
  }

  .containerHead h1 {
    position: relative;
    padding-top: 80px;
    font-size: 36px;
    font-weight: 450;
    width: 100%;
    line-height: 45px;
  }
  /* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px) {
  #backgroundContent {
    background-image: url(~@/assets/images/Coronavirus-isdetected-image.jpg);
    height: 340px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    margin-top: 105px;
    margin-bottom: 105px;
  }

  #backgroundContent::before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .rotateIcon {
    position: absolute;
    top: 40%;
    left: 55%;
    z-index: 999;
    width: 15%;
    opacity: 0.3;
  }

  .containerHead h1 {
    position: relative;
    padding-top: 80px;
    font-size: 37px;
    font-weight: 450;
    width: 100%;
    line-height: 45px;
  }
  /* 1201px and 1315px */
}

/*
* Congratulations , This CovidDetected Page ' Responsive and looks good on any device ' *
 */
</style>
