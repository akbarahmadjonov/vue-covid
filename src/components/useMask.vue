<template>
  <div>
    <div class="headerUseMask">
      <div class="contentMask">
        <h4>how to use mask</h4>
        <h1>mask use process</h1>
        <img src="~@/assets/images/blue-line.png" alt="Blue Line" />
      </div>

      <div class="dotsLine">
        <img class="dots" src="~@/assets/images/using-mask-dots-long-line.png" alt="" />
      </div>

      <div class="useMaskProcess">
        <div class="boxImage">
          <div class="processBox">
            <img src="~@/assets/images/mask-use-process_icon_1.png" alt="Step 1" />
            <h4>step one</h4>
          </div>
        </div>

        <div class="boxImage">
          <div class="processBox">
            <img src="~@/assets/images/mask-use-process_icon_2.png" alt="Step 2" />
            <h4>step two</h4>
          </div>
        </div>

        <div class="boxImage">
          <div class="processBox">
            <img src="~@/assets/images/mask-use-process_icon_3.png" alt="Step 3" />
            <h4>step three</h4>
          </div>
        </div>

        <div class="boxImage">
          <div class="processBox">
            <img src="~@/assets/images/mask-use-process_icon_4.png" alt="Step 4" />
            <h4>step four</h4>
          </div>
        </div>
      </div>

      <div class="rotateCovidBottom">
        <img src="~@/assets/images/using-mask-icon-covid-19.png" alt="bottomIcon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "useMask",
};
</script>

<style scoped>
.headerUseMask {
  height: 570px;
  width: 100%;
}

.dotsLine {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 220px;
  padding-top: 12.5%;
}

.contentMask {
  margin-top: 120px;
  text-align: center;
}

.contentMask h1 {
  text-transform: capitalize;
  color: #333;
  font-size: 38px;
  font-weight: 500;
  line-height: 38px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.contentMask h4 {
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #780bd5;
  margin-bottom: 8px;
}

/*
  *useMask Part *
*/

.useMaskProcess {
  margin-top: 90px;
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.processBox img {
  margin-bottom: 18px;
  position: relative;
}

.processBox h4 {
  text-transform: capitalize;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 21px;
}

.boxImage {
  border-radius: 10px;
  box-shadow: 4px 9px 16px 1px rgba(0, 0, 0, 0.04), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  padding: 35px 90px;
}

.boxImage img {
  border: 1px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0px 35px 35px rgb(18 4 104 / 18%);
}

.rotateCovidBottom {
  position: absolute;
  right: 120px;
  padding-top: 45px;
}

.rotateCovidBottom img {
  -webkit-user-drag: none;
  animation-name: rotateIcon;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
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

/*
  *useMask Part *
*/

/* ************* */
/* Media Queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  .headerUseMask {
    height: 570px;
    width: 100%;
  }

  .dotsLine {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 220px;
    padding-top: 12.5%;
    display: none;
  }

  .contentMask {
    margin-top: 120px;
  }

  .contentMask h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  }

  .contentMask h4 {
    font-size: 15px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  /*
  *useMask Part *
*/

  .useMaskProcess {
    margin-top: 70px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .processBox img {
    margin-bottom: 18px;
    position: relative;
  }

  .processBox h4 {
    font-size: 20px;
  }

  .boxImage {
    border-radius: 10px;
    padding: 35px 90px;
    margin-bottom: 40px;
  }

  .rotateCovidBottom {
    position: absolute;
    right: 120px;
    padding-top: 45px;
  }
  /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .headerUseMask {
    height: 570px;
    width: 100%;
  }

  .dotsLine {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 220px;
    padding-top: 12.5%;
    display: none;
  }

  .contentMask {
    margin-top: 120px;
    text-align: center;
  }

  .contentMask h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  }

  .contentMask h4 {
    font-size: 16px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  /*
  *useMask Part *
*/

  .useMaskProcess {
    margin-top: 70px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .processBox img {
    margin-bottom: 18px;
    position: relative;
  }

  .processBox h4 {
    font-size: 20px;
  }

  .boxImage {
    border-radius: 10px;
    padding: 35px 90px;
    margin-bottom: 40px;
  }

  .rotateCovidBottom {
    position: absolute;
    right: 120px;
    padding-top: 45px;
  }
  /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .headerUseMask {
    height: 570px;
    width: 100%;
  }

  .dotsLine {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 220px;
    padding-top: 12.5%;
    display: none;
  }

  .contentMask {
    margin-top: 120px;
    text-align: center;
  }

  .contentMask h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 38px;
  }

  .contentMask h4 {
    font-size: 16px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  /*
  *useMask Part *
*/

  .useMaskProcess {
    margin-top: 70px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .processBox img {
    margin-bottom: 18px;
    position: relative;
  }

  .processBox h4 {
    font-size: 20px;
  }

  .boxImage {
    border-radius: 10px;
    padding: 35px 90px;
    width: 47%;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 40px;
  }

  .rotateCovidBottom {
    position: absolute;
    right: 120px;
    padding-top: 3px;
  }
  /* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .headerUseMask {
    height: 570px;
    width: 100%;
  }

  .dotsLine {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 220px;
    padding-top: 12.5%;
    display: none;
  }

  .contentMask {
    margin-top: 120px;
    text-align: center;
  }

  .contentMask h1 {
    font-size: 37px;
    font-weight: 500;
    line-height: 38px;
  }

  .contentMask h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  /*
  *useMask Part *
*/

  .useMaskProcess {
    margin-top: 70px;
    margin-left: 6px;
    margin-right: 6px;
    display: flex;
    justify-content: space-evenly;
    /*flex-wrap: wrap; */
  }

  .processBox img {
    margin-bottom: 18px;
    position: relative;
  }

  .processBox h4 {
    font-size: 20px;
  }

  .boxImage {
    border-radius: 10px;
    padding: 25px 68px;
    width: 50%;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 40px;
  }

  .rotateCovidBottom {
    position: absolute;
    right: 120px;
    padding-top: 3px;
  }
  /* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px) {
  .headerUseMask {
    height: 570px;
    width: 100%;
  }

  .dotsLine {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 175px;
    padding-top: 10.3%;
    display: block;
  }

  .contentMask {
    margin-top: 120px;
    text-align: center;
  }

  .contentMask h1 {
    font-size: 38px;
    font-weight: 500;
    line-height: 38px;
  }

  .contentMask h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  /*
  *useMask Part *
*/

  .useMaskProcess {
    margin-top: 70px;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
  }

  .processBox img {
    margin-bottom: 18px;
    position: relative;
  }

  .processBox h4 {
    font-size: 21px;
  }

  .boxImage {
    border-radius: 10px;
    padding: 28px 70px;
    width: 50%;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 40px;
  }

  .rotateCovidBottom {
    position: absolute;
    right: 120px;
    padding-top: 3px;
  }
  /* 1201px and 1315px */
}

/*
* Congratulations , This UseMask Page ' Responsive and looks good on any device ' *
 */
</style>
