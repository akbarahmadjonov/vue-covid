<template>
  <div>
    <div class="omenCovid">
      <div class="omenContent">
        <h4>omen</h4>
        <h1>coronavirus symptoms</h1>
        <img class="blueLine" src="~@/assets/images/blue-line.png" alt="Blue Line" />
      </div>

      <!-- Coronavirus Symptoms -->

      <div class="covidSymptoms">
        <div class="firstLine">
          <div class="headLines">
            <h3>fever</h3>
            <p>
              Consectetur adipisicing elit, sed <br />
              do eiusmod tempor
            </p>
          </div>
        </div>

        <div class="firstLine">
          <div class="headLines">
            <h3>muscle pain</h3>
            <p>
              Consectetur adipisicing elit, sed <br />
              do eiusmod tempor
            </p>
          </div>
        </div>

        <div class="firstLine">
          <div class="headLines">
            <h3>headache</h3>
            <p>
              Consectetur adipisicing elit, sed <br />
              do eiusmod tempor
            </p>
          </div>
        </div>

        <img
          id="sickGirlPhoto"
          src="~@/assets/images/coronavirus-symptoms-image-girl.jpg"
          alt="Sick Girl"
        />

        <!-- Second Line -->

        <div class="secondLine">
          <div class="headLines">
            <h3>cough</h3>
            <p>
              Consectetur adipisicing elit, sed <br />
              do eiusmod tempor
            </p>
          </div>
        </div>

        <div class="secondLine">
          <div class="headLines">
            <h3>dyspnoea</h3>
            <p>Consectetur adipisicing elit, sed do eiusmod tempor</p>
          </div>
        </div>

        <div class="secondLine">
          <div class="headLines">
            <h3>vomit</h3>
            <p>
              Consectetur adipisicing elit, sed <br />
              do eiusmod tempor
            </p>
          </div>
        </div>
      </div>

      <!-- covidSymptoms Top-->
    </div>
  </div>
</template>
/* Styles */

<style scoped>
.omenCovid {
  background-image: url("~@/assets/images/coronavirus-symptoms-image.jpg");
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  margin-top: 120px;
}

.omenCovid::before {
  position: absolute;
  content: "";
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(255, 255, 255, 0.89);
}

.omenContent {
  text-align: center;
  position: relative;
  line-height: 1.6em;
  padding-top: 90px;
}

.omenContent .blueLine {
  user-select: none;
}

.omenContent h4 {
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #780bd5;
  margin-bottom: 8px;
}

.omenContent h1 {
  text-transform: capitalize;
  color: #333;
  font-size: 38px;
  font-weight: 500;
  line-height: 38px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* Coronavirus Symptoms */

.covidSymptoms {
  padding-top: 54px;
  padding-left: 80px;
  padding-right: 80px;
  position: relative;
  width: 50%;
}

.covidSymptoms > div:nth-child(2) {
  margin-right: 20px;
}

.firstLine {
  float: right;
  position: relative;
  height: 100%;
  left: 130%;
}

.secondLine {
  width: 100%;
  top: -80%;
}

.covidSymptoms > div:nth-child(6) {
  margin-left:  20px;
}

#sickGirlPhoto {
  position: absolute;
  left: 70%;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.covidSymptoms h3 {
  text-transform: capitalize;
  font-family: "Muli", sans-serif;
  color: #fff;
  font-size: 20px;
  cursor: default;
  font-weight: 500;
  line-height: 1.6em;
}

.covidSymptoms p {
  line-height: 1.8em;
  font-size: 16.3px;
  margin-bottom: 1rem;
}

/* Girl Sick Animation */

#sickGirlPhoto {
  animation-name: sickGirlPhoto;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-name: sickGirlPhoto;
  -webkit-animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  -moz-animation-name: sickGirlPhoto;
  -moz-animation-duration: 5s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;

  -ms-animation-name: sickGirlPhoto;
  -ms-animation-duration: 5s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;

  -o-animation-name: sickGirlPhoto;
  -o-animation-duration: 5s;
  -o-animation-iteration-count: infinite;
  -o-animation-timing-function: linear;
}

@keyframes sickGirlPhoto {
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

/* Girl Sick Animation End */

.covidSymptoms .headLines {
  padding: 20px 20px 10px;
  max-width: 280px;
  box-shadow: 4px 13px 50px 2px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #780bd5 0%, #a858ec 100%);
  margin-bottom: 40px;
  border-radius: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
}

/* ************* */
/* Media Queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  /* .omenCovid {
    background-image: url("~@/assets/images/coronavirus-symptoms-image.jpg");
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    margin-top: 120px;
  }

  .omenCovid::before {
    position: absolute;
    content: "";
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  } */

  .omenContent {
    /* text-align: center;
    position: relative;
    line-height: 1.6em;
    padding-top: 90px; */
    display: none;
  }

  /* .omenContent h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .omenContent h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  } */

  /* Coronavirus Symptoms */

  .covidSymptoms {
    padding-top: 54px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    width: 100%;
    display: none;
  }

  /* .covidSymptoms > div:nth-child(2) {
    margin-right: 0px;
  } */

  /* .firstLine {
    float: right;
    position: relative;
    height: 100%;
    left: 130%;
  } */

  /* .secondLine {
    width: 100%;
    top: -80%;
  }

  .covidSymptoms > div:nth-child(6) {
    margin-left:  0px;
  } */

  #sickGirlPhoto {
    position: absolute;
    left: 70%;
    display: none;
  }

  /* .covidSymptoms h3 {
    font-size: 19px;
    font-weight: 500;
    line-height: 1.6em;
  }

  .covidSymptoms p {
    line-height: 1.8em;
    font-size: 15px;
    margin-bottom: 1rem;
  } */

  /* .covidSymptoms .headLines {
    padding: 20px 20px 10px;
    max-width: 280px;
    margin-bottom: 40px;
    border-radius: 15px;
  } */
  /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  /* .omenCovid {
    background-image: url("~@/assets/images/coronavirus-symptoms-image.jpg");
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    margin-top: 120px;
  }

  .omenCovid::before {
    position: absolute;
    content: "";
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  } */

  .omenContent {
    /* text-align: center;
    position: relative;
    line-height: 1.6em;
    padding-top: 90px; */
    display: none;
  }

  /* .omenContent h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .omenContent h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  } */

  /* Coronavirus Symptoms */

  .covidSymptoms {
    padding-top: 54px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    width: 100%;
    display: none;
  }

  /* .covidSymptoms > div:nth-child(2) {
    margin-right: 0px;
  } */

  /* .firstLine {
    float: right;
    position: relative;
    height: 100%;
    left: 130%;
  } */

  /* .secondLine {
    width: 100%;
    top: -80%;
  }

  .covidSymptoms > div:nth-child(6) {
    margin-left:  0px;
  } */

  #sickGirlPhoto {
    position: absolute;
    left: 70%;
    display: none;
  }

  /* .covidSymptoms h3 {
    font-size: 19px;
    font-weight: 500;
    line-height: 1.6em;
  }

  .covidSymptoms p {
    line-height: 1.8em;
    font-size: 15px;
    margin-bottom: 1rem;
  } */

  /* .covidSymptoms .headLines {
    padding: 20px 20px 10px;
    max-width: 280px;
    margin-bottom: 40px;
    border-radius: 15px;
  } */
  /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  /* .omenCovid {
    background-image: url("~@/assets/images/coronavirus-symptoms-image.jpg");
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    margin-top: 120px;
  }

  .omenCovid::before {
    position: absolute;
    content: "";
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  } */

  .omenContent {
    /* text-align: center;
    position: relative;
    line-height: 1.6em;
    padding-top: 90px; */
    display: none;
  }

  /* .omenContent h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .omenContent h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  } */

  /* Coronavirus Symptoms */

  .covidSymptoms {
    padding-top: 54px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    width: 100%;
    display: none;
  }

  /* .covidSymptoms > div:nth-child(2) {
    margin-right: 0px;
  } */

  /* .firstLine {
    float: right;
    position: relative;
    height: 100%;
    left: 130%;
  } */

  /* .secondLine {
    width: 100%;
    top: -80%;
  }

  .covidSymptoms > div:nth-child(6) {
    margin-left:  0px;
  } */

  #sickGirlPhoto {
    position: absolute;
    left: 70%;
    display: none;
  }

  /* .covidSymptoms h3 {
    font-size: 19px;
    font-weight: 500;
    line-height: 1.6em;
  }

  .covidSymptoms p {
    line-height: 1.8em;
    font-size: 15px;
    margin-bottom: 1rem;
  } */

  /* .covidSymptoms .headLines {
    padding: 20px 20px 10px;
    max-width: 280px;
    margin-bottom: 40px;
    border-radius: 15px;
  } */
  /* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  /* .omenCovid {
    background-image: url("~@/assets/images/coronavirus-symptoms-image.jpg");
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    margin-top: 120px;
  }

  .omenCovid::before {
    position: absolute;
    content: "";
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  } */

  .omenContent {
    /* text-align: center;
    position: relative;
    line-height: 1.6em;
    padding-top: 90px; */
    display: none;
  }

  /* .omenContent h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .omenContent h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  } */

  /* Coronavirus Symptoms */

  .covidSymptoms {
    padding-top: 54px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    width: 100%;
    display: none;
  }

  /* .covidSymptoms > div:nth-child(2) {
    margin-right: 0px;
  } */

  /* .firstLine {
    float: right;
    position: relative;
    height: 100%;
    left: 130%;
  } */

  /* .secondLine {
    width: 100%;
    top: -80%;
  }

  .covidSymptoms > div:nth-child(6) {
    margin-left:  0px;
  } */

  #sickGirlPhoto {
    position: absolute;
    left: 70%;
    display: none;
  }

  /* .covidSymptoms h3 {
    font-size: 19px;
    font-weight: 500;
    line-height: 1.6em;
  }

  .covidSymptoms p {
    line-height: 1.8em;
    font-size: 15px;
    margin-bottom: 1rem;
  } */

  /* .covidSymptoms .headLines {
    padding: 20px 20px 10px;
    max-width: 280px;
    margin-bottom: 40px;
    border-radius: 15px;
  } */
  /* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px) {
  /* .omenCovid {
    background-image: url("~@/assets/images/coronavirus-symptoms-image.jpg");
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    margin-top: 120px;
  }

  .omenCovid::before {
    position: absolute;
    content: "";
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  } */

  .omenContent {
    /* text-align: center;
    position: relative;
    line-height: 1.6em;
    padding-top: 90px; */
    display: none;
  }

  /* .omenContent h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .omenContent h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  } */

  /* Coronavirus Symptoms */

  .covidSymptoms {
    padding-top: 54px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    width: 100%;
    display: none;
  }

  /* .covidSymptoms > div:nth-child(2) {
    margin-right: 0px;
  } */

  /* .firstLine {
    float: right;
    position: relative;
    height: 100%;
    left: 130%;
  } */

  /* .secondLine {
    width: 100%;
    top: -80%;
  }

  .covidSymptoms > div:nth-child(6) {
    margin-left:  0px;
  } */

  #sickGirlPhoto {
    position: absolute;
    left: 70%;
    display: none;
  }

  /* .covidSymptoms h3 {
    font-size: 19px;
    font-weight: 500;
    line-height: 1.6em;
  }

  .covidSymptoms p {
    line-height: 1.8em;
    font-size: 15px;
    margin-bottom: 1rem;
  } */

  /* .covidSymptoms .headLines {
    padding: 20px 20px 10px;
    max-width: 280px;
    margin-bottom: 40px;
    border-radius: 15px;
  } */
  /* 769px and 1024px */
}
</style>
