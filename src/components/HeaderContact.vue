<template>
  <div class="headerContact">
    <div class="contact-box">
      <font class="left-icon" :icon="['fas', 'phone']" /> <a href="#">+1 111 222 888</a>
    </div>

    <div class="contact-box">
      <font class="left-icon" :icon="['fas', 'envelope']" />
      <a href="#">info@covid-19.com</a>
    </div>

    <div class="social-media-icons">
      <a href="#"><font :icon="['fas', 'envelope']" /></a>
      <a href="#"><font :icon="['fas', 'phone']" /></a>
      <a href="#"><font :icon="['fas', 'envelope']" /></a>
      <a href="#"><font :icon="['fas', 'phone']" /></a>
      <a href="#"><font :icon="['fas', 'envelope']" /></a>
    </div>
  </div>
  <!--headerContact-->
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.headerContact {
  display: flex;
  justify-content: space-between;
  padding-left: 85px;
  padding-right: 85px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: #780bd5;
}

.contact-box a {
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  margin-left: 5px;
  text-decoration: none;
}

.left-icon {
  color: #fff;
}

.headerContact > div:nth-child(2) {
  position: absolute;
  right: 71%;
}

.social-media-icons a {
  color: #fff;
  margin: 0 10px;
  font-size: 15px;
}

/* ################*/
/* Media queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  .headerContact {
    display: flex;
    justify-content: space-between;
    padding-left: 3px;
    padding-right: 3px;
    padding-top: 15px;
    padding-bottom: 40px;
  }

  .contact-box a {
    font-size: 14px;
    font-weight: 600;
    margin-left: 5px;
  }

  .headerContact > div:nth-child(2) {
    position: absolute;
    right: 30.5%;
    top: 50px;
  }

  .social-media-icons a {
    margin: 0 4px;
    font-size: 15px;
  }
  /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .headerContact {
    display: flex;
    justify-content: space-between;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .contact-box a {
    font-size: 15px;
    font-weight: 600;
    margin-left: 5px;
  }

  .headerContact > div:nth-child(2) {
    position: absolute;
    right: 37%;
    display: none;
  }

  .social-media-icons a {
    margin: 0 8px;
    font-size: 15px;
  }
  /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .headerContact {
    display: flex;
    justify-content: space-between;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .contact-box a {
    font-size: 15px;
    font-weight: 600;
    margin-left: 5px;
  }

  .headerContact > div:nth-child(2) {
    position: absolute;
    right: 61%;
  }

  .social-media-icons a {
    margin: 0 10px;
    font-size: 15px;
  }
  /* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .headerContact {
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .contact-box a {
    font-size: 15px;
    font-weight: 600;
    margin-left: 5px;
  }

  .headerContact > div:nth-child(2) {
    position: absolute;
    right: 71%;
  }

  .social-media-icons a {
    margin: 0 10px;
    font-size: 15px;
  }
  /* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px) {
  .headerContact {
    display: flex;
    justify-content: space-between;
    padding-left: 45px;
    padding-right: 45px;
    padding-top: 13px;
    padding-bottom: 13px;
  }

  .contact-box a {
    font-size: 16px;
    font-weight: 600;
    margin-left: 5px;
  }

  .headerContact > div:nth-child(2) {
    position: absolute;
    right: 71%;
  }

  .social-media-icons a {
    margin: 0 10px;
    font-size: 15px;
  }
  /* 1201px and 1315px */
}

/*
* Congratulations , This HeaderContact Page ' Responsive and looks good on any device ' *
 */
</style>
