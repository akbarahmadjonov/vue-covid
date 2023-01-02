<template>
  <div>
    <!-- NOTE! AOS Animation library was used down here  -->
    <div data-aos="zoom-in" class="headSpecialist">
      <div class="holdSpec">
        <h4>team</h4>
        <h1>coronavirus specialist</h1>
        <img src="~@/assets/images/blue-line.png" alt="Blue Line" />
      </div>

      <!-- Specialists -->
      <div class="specContainer">
        <div class="boxItem">
          <div class="infoSpecialist">
            <a href="#"
              ><img
                src="~@/assets/images/coronavirus-specialist_image_1.jpg"
                alt="Box one"
            /></a>
            <h5>dr. albert nasur</h5>
            <p>senior consultant</p>
            <div class="iconsSocial">
              <!-- You should put [Social media icons for example Facebook , conclusion: I couldn't put ] -->
              <font class="iconsSocial" :icon="['fas', 'robot']" />
              <font class="iconsSocial" :icon="['fas', 'robot']" />
              <font class="iconsSocial" :icon="['fas', 'robot']" />
            </div>
          </div>

          <div class="infoSpecialist">
            <a href="#">
              <img
                src="~@/assets/images/coronavirus-specialist_image_2.jpg"
                alt="Box two"
              />
            </a>
            <h5>dr. zash jaklin</h5>
            <p>virus expert</p>
            <div class="iconsSocial">
              <!-- You should put [Social media icons for example Facebook , conclusion: I couldn't put ] -->
              <font class="iconsSocial" :icon="['fas', 'robot']" />
              <font class="iconsSocial" :icon="['fas', 'robot']" />
              <font class="iconsSocial" :icon="['fas', 'robot']" />
            </div>
          </div>

          <div class="infoSpecialist">
            <a href="#">
              <img
                src="~@/assets/images/coronavirus-specialist_image_3.jpg"
                alt="Box three"
              />
            </a>
            <h5>dr. kom zabra</h5>
            <p>senior consultant</p>
            <div class="iconsSocial">
              <!-- You should put [Social media icons for example Facebook , conclusion: I couldn't put ] -->
              <font class="iconsSocial" :icon="['fas', 'robot']" />
              <font class="iconsSocial" :icon="['fas', 'robot']" />
              <font class="iconsSocial" :icon="['fas', 'robot']" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headSpecialist {
  margin-top: 40px;
  margin-left: 80px;
  margin-right: 80px;
}

.holdSpec {
  text-align: center;
  margin-bottom: 60px;
}

.holdSpec h4 {
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #780bd5;
  margin-bottom: 8px;
}

.holdSpec h1 {
  text-transform: capitalize;
  color: #333;
  font-size: 38px;
  font-weight: 500;
  line-height: 38px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* Specialists Images  */
.boxItem {
  display: flex;
  justify-content: space-between;
}

.infoSpecialist {
  text-align: center;
}

.infoSpecialist h5 {
  text-transform: capitalize;
  color: #222;
  transition: 0.1s ease-in;
  cursor: pointer;
}

.infoSpecialist h5:hover {
  color: #780bd5;
}

.infoSpecialist p {
  text-transform: capitalize;
  color: #9fa2a6;
  font-size: 17px;
  font-family: "Open Sans", sans-serif;
}

.infoSpecialist .iconsSocial {
  color: #222;
  font-size: 17px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.iconsSocial:hover {
  color: #780bd5;
}

.infoSpecialist:hover {
  box-shadow: 4px 9px 16px 1px rgba(0, 0, 0, 0.04), -2px 0px 8px 1px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
}

.boxItem img {
  border-radius: 7px;
  margin-bottom: 20px;
}

/* ***************** */
/* Media Queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  .headSpecialist {
    margin-top: 730px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .holdSpec {
    text-align: center;
    margin-bottom: 60px;
  }

  .holdSpec h4 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .holdSpec h1 {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Specialists Images  */
  .boxItem {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    /* width: 100%; */
  }

  .infoSpecialist {
    text-align: center;
    margin-bottom: 40px;
  }

  .infoSpecialist p {
    font-size: 17px;
  }

  .infoSpecialist .iconsSocial {
    font-size: 17px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .boxItem img {
    border-radius: 7px;
    margin-bottom: 20px;
    width: 95%;
  }
  /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .headSpecialist {
    margin-top: 730px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .holdSpec {
    text-align: center;
    margin-bottom: 60px;
  }

  .holdSpec h4 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .holdSpec h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Specialists Images  */
  .boxItem {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
  }

  .infoSpecialist {
    text-align: center;
    margin-bottom: 40px;
  }

  .infoSpecialist p {
    font-size: 17px;
  }

  .infoSpecialist .iconsSocial {
    font-size: 17px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .infoSpecialist:hover {
    box-shadow: none;
    /* border-radius: 7px; */
  }

  .boxItem img {
    border-radius: 7px;
    margin-bottom: 20px;
    width: 70%;
  }
  /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .headSpecialist {
    margin-top: 190px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .holdSpec {
    text-align: center;
    margin-bottom: 60px;
  }

  .holdSpec h4 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .holdSpec h1 {
    font-size: 35px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Specialists Images  */
  .boxItem {
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    width: 100%;
  }

  .infoSpecialist {
    text-align: center;
    margin-bottom: 40px;
  }

  .infoSpecialist p {
    font-size: 17px;
  }

  .infoSpecialist .iconsSocial {
    font-size: 17px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .infoSpecialist:hover {
    box-shadow: none;
    /* border-radius: 7px; */
  }

  .boxItem img {
    border-radius: 7px;
    margin-bottom: 20px;
    width: 95%;
  }
  /* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .headSpecialist {
    margin-top: 190px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .holdSpec {
    text-align: center;
    margin-bottom: 60px;
  }

  .holdSpec h4 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .holdSpec h1 {
    font-size: 38px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Specialists Images  */
  .boxItem {
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    width: 100%;
  }

  .infoSpecialist {
    text-align: center;
    margin-bottom: 40px;
  }

  .infoSpecialist p {
    font-size: 17.6px;
  }

  .infoSpecialist .iconsSocial {
    font-size: 17px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .infoSpecialist:hover {
    box-shadow: none;
    /* border-radius: 7px; */
  }

  .boxItem img {
    border-radius: 7px;
    margin-bottom: 20px;
    width: 93%;
  }
  /* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px) {
  .headSpecialist {
    margin-top: 190px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .holdSpec {
    text-align: center;
    margin-bottom: 60px;
  }

  .holdSpec h4 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .holdSpec h1 {
    font-size: 39px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Specialists Images  */
  .boxItem {
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    width: 100%;
  }

  .infoSpecialist {
    text-align: center;
    margin-bottom: 40px;
  }

  .infoSpecialist p {
    font-size: 17.6px;
  }

  .infoSpecialist .iconsSocial {
    font-size: 17px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .infoSpecialist:hover {
    /* box-shadow: none; */
    /* border-radius: 7px; */
    width: 100%;
  }

  .boxItem img {
    border-radius: 7px;
    margin-bottom: 20px;
  }
  /* 1201px and 1315px */
}
</style>
