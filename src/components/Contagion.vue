<template>
  <div>
    <div class="mainCont">
      <h4>contagion</h4>
      <h1>how contagion coronavirus</h1>
      <img src="~@/assets/images/blue-line.png" alt="Blue Line" />
    </div>

    <div class="contagion">
      <div class="restriction">
        <img
          src="~@/assets/images/contagion-hand-bacteria-icon.png"
          alt="Human Contact"
        />
        <img
          class="testContBackground"
          src="~@/assets/images/contagion-test-image.png"
          alt="Test"
        />
        <h5>human contact</h5>
        <p>
          You must not contact with people <br />
          while quarantine , it is important
        </p>
      </div>

      <div class="restriction">
        <img src="~@/assets/images/contagion-mouth-icon.png" alt="Air Transmissioon" />
        <img
          class="testContBackground"
          src="~@/assets/images/contagion-test-image.png"
          alt="Test"
        />
        <h5>air transmission</h5>
        <p>
          Wearing mask while quarantine is <br />
          also very important , do not forget it
        </p>
      </div>

      <div class="restriction">
        <img src="~@/assets/images/contagion-meet-red-icon.png" alt="Meet red" />
        <img
          class="testContBackground"
          src="~@/assets/images/contagion-test-image.png"
          alt="Test"
        />
        <h5>contaminated objects</h5>
        <p>
          You should eat anything, the outside <br />
          your home do not forget it
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainCont {
  text-align: center;
  line-height: 1.6em;
}

.mainCont img {
  user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.mainCont h4 {
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #780bd5;
  margin-bottom: 8px;
}

.mainCont h1 {
  text-transform: capitalize;
  color: #333;
  font-size: 38px;
  font-weight: 500;
  line-height: 38px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* Main Cont end*/

.contagion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 85px;
  padding-right: 85px;
  margin-top: 40px;
  margin-bottom: 80px;
}

.contagion img {
  width: 65px;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

/* Rotating test */
.contagion .testContBackground {
  margin-left: 150px;
  margin-top: -50px;
  opacity: 0.2;
  animation-name: rotateCovid;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

@keyframes rotateCovid {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotateCovid {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes rotateCovid {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-o-keyframes rotateCovid {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}

/* Rotating test end */

.contagion .restriction {
  border: 10px solid #fff;
  border-radius: 10px;
  padding: 2%;
  margin-top: 60px;
  box-shadow: 4px 9px 16px 1px rgba(0, 0, 0, 0.04), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
}

/* Extra Box-shadow */
.contagion > div:nth-child(2)::after {
  content: "";
  position: absolute;
  width: 388px;
  height: 278px;
  margin-left: -55px;
  margin-top: -227px;
  box-shadow: 4px 9px 16px 1px rgba(0, 0, 0, 0.04), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  background-color: #780bd5;
  opacity: 0.1;
}
/* Extra Box-shadow end */

.contagion p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #808080;
  z-index: 999;
  position: relative;
  cursor: default;
}

.contagion .restriction h5 {
  text-transform: capitalize;
  margin-top: 15px;
  cursor: default;
  transition: 0.5s;
  line-height: 24px;
  font-weight: 600;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* ***************** */
/* Media Queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  .mainCont {
    text-align: center;
    line-height: 1.6em;
  }

  .mainCont h4 {
    font-size: 16px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .mainCont h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Main Cont end*/

  .contagion {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 40px;
    flex-wrap: wrap;
    margin-bottom: 80px;
  }

  .contagion img {
    width: 65px;
  }

  /* Rotating test */
  .contagion .testContBackground {
    margin-left: 200px;
    margin-top: -40px;
    opacity: 0.2;
  }

  /* Rotating test end */

  .contagion .restriction {
    border-radius: 10px;
    padding: 2%;
    width: 100%;
    margin-top: 40px;
  }

  /* Extra Box-shadow */
  .contagion > div:nth-child(2)::after {
    display: none;
    /* content: "";
    position: absolute;
    width: 388px;
    height: 278px;
    margin-left: -55px;
    margin-top: -227px;
    border-radius: 14px;
    opacity: 0.1; */
  }
  /* Extra Box-shadow end */

  .contagion p {
    z-index: 999;
    position: relative;
  }

  .contagion .restriction h5 {
    margin-top: 15px;
    transition: 0.5s;
    line-height: 24px;
    font-weight: 600;
  }
  /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .mainCont {
    text-align: center;
    line-height: 1.6em;
  }

  .mainCont h4 {
    font-size: 16px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .mainCont h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Main Cont end*/

  .contagion {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 40px;
    flex-wrap: wrap;
    margin-bottom: 80px;
    /* background: red; */
  }

  .contagion img {
    width: 65px;
  }

  /* Rotating test */
  .contagion .testContBackground {
    margin-left: 250px;
    margin-top: -40px;
    opacity: 0.2;
  }

  /* Rotating test end */

  .contagion .restriction {
    border-radius: 10px;
    padding: 2%;
    width: 90%;
    margin-top: 40px;
  }

  /* Extra Box-shadow */
  .contagion > div:nth-child(2)::after {
    display: none;
    /* content: "";
    position: absolute;
    width: 388px;
    height: 278px;
    margin-left: -55px;
    margin-top: -227px;
    border-radius: 14px;
    opacity: 0.1; */
  }
  /* Extra Box-shadow end */

  .contagion p {
    z-index: 999;
    position: relative;
  }

  .contagion .restriction h5 {
    margin-top: 15px;
    transition: 0.5s;
    line-height: 24px;
    font-weight: 600;
  }
  /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .mainCont {
    text-align: center;
    line-height: 1.6em;
  }

  .mainCont h4 {
    font-size: 17px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .mainCont h1 {
    font-size: 35px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Main Cont end*/

  .contagion {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 40px;
    flex-wrap: wrap;
    margin-bottom: 80px;
    /* background: red; */
  }

  .contagion img {
    width: 65px;
  }

  /* Rotating test */
  .contagion .testContBackground {
    margin-left: 250px;
    margin-top: -40px;
    opacity: 0.2;
  }

  /* Rotating test end */

  .contagion .restriction {
    border-radius: 10px;
    padding: 2%;
    width: 45%;
    margin-top: 40px;
  }

  /* Extra Box-shadow */
  .contagion > div:nth-child(2)::after {
    display: none;
    /* content: "";
    position: absolute;
    width: 388px;
    height: 278px;
    margin-left: -55px;
    margin-top: -227px;
    border-radius: 14px;
    opacity: 0.1; */
  }
  /* Extra Box-shadow end */

  .contagion p {
    z-index: 999;
    position: relative;
  }

  .contagion .restriction h5 {
    margin-top: 15px;
    transition: 0.5s;
    line-height: 24px;
    font-weight: 600;
  }
  /* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .mainCont {
    text-align: center;
    line-height: 1.6em;
  }

  .mainCont h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .mainCont h1 {
    font-size: 38px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Main Cont end*/

  .contagion {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 40px;
    flex-wrap: wrap;
    margin-bottom: 80px;
    /* background: red; */
  }

  .contagion img {
    width: 65px;
  }

  /* Rotating test */
  .contagion .testContBackground {
    margin-left: 250px;
    margin-top: -40px;
    opacity: 0.2;
  }

  /* Rotating test end */

  .contagion .restriction {
    border-radius: 10px;
    padding: 2%;
    width: 43%;
    margin-top: 40px;
  }

  /* Extra Box-shadow */
  .contagion > div:nth-child(2)::after {
    display: none;
    /* content: "";
    position: absolute;
    width: 388px;
    height: 278px;
    margin-left: -55px;
    margin-top: -227px;
    border-radius: 14px;
    opacity: 0.1; */
  }
  /* Extra Box-shadow end */

  .contagion p {
    z-index: 999;
    position: relative;
  }

  .contagion .restriction h5 {
    margin-top: 15px;
    transition: 0.5s;
    line-height: 24px;
    font-weight: 600;
  }
  /* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px)  {
  .mainCont {
    text-align: center;
    line-height: 1.6em;
  }

  .mainCont h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .mainCont h1 {
    font-size: 39px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Main Cont end*/

  .contagion {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 40px;
    flex-wrap: wrap;
    margin-bottom: 80px;
    /* background: red; */
  }

  .contagion img {
    width: 65px;
  }

  /* Rotating test */
  .contagion .testContBackground {
    margin-left: 250px;
    margin-top: -40px;
    opacity: 0.2;
  }

  /* Rotating test end */

  .contagion .restriction {
    border-radius: 10px;
    padding: 2%;
    width: 30%;
    margin-top: 40px;
  }

  /* Extra Box-shadow */
  .contagion > div:nth-child(2)::after {
    display: none;
    /* content: "";
    position: absolute;
    width: 388px;
    height: 278px;
    margin-left: -55px;
    margin-top: -227px;
    border-radius: 14px;
    opacity: 0.1; */
  }
  /* Extra Box-shadow end */

  .contagion p {
    z-index: 999;
    position: relative;
  }

  .contagion .restriction h5 {
    margin-top: 15px;
    transition: 0.5s;
    line-height: 24px;
    font-weight: 600;
  }
  /* 1201px and 1315px */
}

/*
* Congratulations , This Contagion Page ' Responsive and looks good on any device ' *
 */
</style>
