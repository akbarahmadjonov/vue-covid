<template>
  <div>
    <div class="servicesPage">
      <div class="headTitle">
        <h4>services</h4>
        <h1>what we do</h1>
        <img src="~@/assets/images/blue-line.png" alt="Blue Line" />
      </div>

      <!-- Services -->
      <!-- NOTE! AOS Animation library was used down here  -->
      <div data-aos='fade-right'  id="headContent">
        <div class="containerHold">
          <div class="serviceContainer">
            <img
              src="~@/assets/images/wedo-Medical-treatment-image.jpg"
              alt="Medical Treatment"
            />
            <h5>Medical treatment</h5>
            <p>
              Medical treatment is a service <br />
              Everyday our doctors take care of you
            </p>
          </div>
        </div>

        <div class="containerHold">
          <div class="serviceContainer">
            <img
              src="~@/assets/images/wedo-Health-advice-image.jpg"
              alt="Health Advice"
            />
            <h5>Health advice</h5>
            <p>
              Our Health advice service is good enough, <br />
              Your compliment is solved immediately
            </p>
          </div>
        </div>

        <div class="containerHold">
          <div class="serviceContainer">
            <img
              src="~@/assets/images/wedo-Social-awareness-image.jpg"
              alt="Social Awareness"
            />
            <h5>Social awareness</h5>
            <p>
              Social awareness is a meeting, All doctor<br />
              and professors gather at the weekend
            </p>
          </div>
        </div>

        <div class="containerHold">
          <div class="serviceContainer">
            <img
              src="~@/assets/images/wedo-Ambulance-service-image.jpg"
              alt="Ambulance Service"
            />
            <h5>Ambulance service</h5>
            <p>
              If you find anybody detected, Our<br />
              Ambulance service is absolutely for you
            </p>
          </div>
        </div>

        <div class="containerHold">
          <div class="serviceContainer">
            <img
              src="~@/assets/images/wedo-Coronavirus-test-image.jpg"
              alt="Coronavirus Test"
            />
            <h5>Coronavirus test</h5>
            <p>
              Your Covid-19 test is tested in just 2 days <br />
              and you don't need to wait for a long time
            </p>
          </div>
        </div>

        <div class="containerHold">
          <div class="serviceContainer">
            <img
              src="~@/assets/images/wedo-Online-consulting-image.jpg"
              alt="Online Consulting"
            />
            <h5>Online consulting</h5>
            <p>
              Excepteur sint occaecat cupidatat non <br />
              proident sunt culpa officia deserunt
            </p>
          </div>
        </div>
      </div>

      <!--headContent DIV -->
    </div>
  </div>
</template>

<!-- Styles -->

<style scoped>
.servicesPage .headTitle {
  text-align: center;
}

.servicesPage .headTitle h4 {
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #780bd5;
  margin-bottom: 8px;
}

.headTitle h1 {
  text-transform: capitalize;
  color: #333;
  font-size: 38px;
  font-weight: 500;
  line-height: 38px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

#headContent .containerHold .serviceContainer h5 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 24px;
  margin-top: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #333;
  transition: 0.5s;
  cursor: default;
}

#headContent .containerHold .serviceContainer p {
  color: #808080;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  z-index: 999;
  cursor: default;
}

.headTitle img {
  user-select: none;
  -webkit-user-drag: none;
}

/* Services */

#headContent {
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 40px;
  flex-wrap: wrap;
}

#headContent .containerHold .serviceContainer img {
  width: 300px;
}

.serviceContainer {
  margin-top: 40px;
  box-shadow: 4px 9px 16px 1px rgba(0, 0, 0, 0.04), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 20px;
}

.serviceContainer img {
  -webkit-user-drag: none;
  user-select: none;
}

/* *************** */
/* Media Queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  .servicesPage .headTitle h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .headTitle h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  }

  #headContent .containerHold .serviceContainer h5 {
    font-size: 1.20rem;
    font-weight: 600;
    line-height: 24px;
    margin-top: 14px;
  }

  /* Services */

  #headContent {
    display: flex;
    justify-content: space-around;
    margin-left: 20px;
    margin-right: 10px;
    /* width: 100%; */
    margin-top: 40px;
  }

  #headContent .containerHold .serviceContainer img {
    width: 100%;
  }

  .serviceContainer {
    margin-top: 40px;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
  }
  /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .servicesPage .headTitle h4 {
    font-size: 18px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .headTitle h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 38px;
  }

  #headContent .containerHold .serviceContainer h5 {
    font-size: 1.20rem;
    font-weight: 600;
    line-height: 24px;
    margin-top: 14px;
  }

  /* Services */

  #headContent {
    display: flex;
    justify-content: space-around;
    margin-left: 24px;
    margin-right: 0px;
    margin-top: 40px;
  }

  #headContent .containerHold .serviceContainer img {
    width: 100%;
  }

  .serviceContainer {
    margin-top: 40px;
    border-radius: 10px;
    padding: 20px;
    /* width: 100%; */
  }
  /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .servicesPage .headTitle h4 {
    font-size: 19px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .headTitle h1 {
    font-size: 35px;
    font-weight: 500;
    line-height: 38px;
  }

  #headContent .containerHold .serviceContainer h5 {
    font-size: 1.20rem;
    font-weight: 600;
    line-height: 24px;
    margin-top: 14px;
  }

  /* Services */

  #headContent {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    margin-top: 40px;
  }

  #headContent .containerHold .serviceContainer img {
    width: 100%;
  }

  .serviceContainer {
    margin-top: 40px;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
  }
  /* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .servicesPage .headTitle h4 {
    font-size: 19px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .headTitle h1 {
    font-size: 37px;
    font-weight: 500;
    line-height: 38px;
  }

  #headContent .containerHold .serviceContainer h5 {
    font-size: 1.24rem;
    font-weight: 600;
    line-height: 24px;
    margin-top: 14px;
  }

  /* Services */

  #headContent {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    margin-top: 40px;
  }

  #headContent .containerHold .serviceContainer img {
    width: 100%;
  }

  .serviceContainer {
    margin-top: 40px;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
  }
  /* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px){
  .servicesPage .headTitle h4 {
    font-size: 19px;
    font-weight: 550;
    margin-bottom: 8px;
  }

  .headTitle h1 {
    font-size: 37px;
    font-weight: 500;
    line-height: 38px;
  }

  #headContent .containerHold .serviceContainer h5 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 24px;
    margin-top: 14px;
  }

  /* Services */

  #headContent {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    margin-top: 40px;
  }

  #headContent .containerHold .serviceContainer img {
    width: 100%;
  }

  .serviceContainer {
    margin-top: 40px;
    border-radius: 10px;
    padding: 20px;
    width: 95%;
  }
  /* 1201px and 1315px */
}

/*
* Congratulations , This Services Page ' Responsive and looks good on any device ' *
 */
</style>
