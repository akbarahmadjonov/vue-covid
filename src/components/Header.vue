<template>
  <div class="headerBottom">
    <div class="logo">
      <a href="#"
        ><img src="~@/assets/images/Covid-health-company_logo.png" alt="Header Logo"
      /></a>
    </div>

    <div v-show="showCategory" class="bottomBox">
      <ul>
        <li><a class="head-ul" href="#">home </a></li>
        <li>
          <a v-on:click="showAbout" class="head-about" href="#"
            >about <font class="dropdownIcon"
            :icon="['fas', 'angle-down']"
          />
        </a>
        </li>

        <div v-if="showDropFirst" v-on:mouseleave="hideAbout" class="head-Drop-Bottom">
          <!-- NOTE! AOS Animation library was used down here  -->
          <ul  data-aos="fade-right" data-aos-duration='100' class="dropBottom">
            <li><router-link to='/aboutUs'>about Us</router-link></li>
            <li><a href="#">medical Team</a></li>
            <li><a href="#">fAQ's</a></li>
          </ul>
        </div>

        <li><a href="#">prevention</a></li>
        <li>
          <a v-on:click="showPages" class="head-pages" href="#"
            >pages <font class="dropdownIcon" :icon="['fas', 'angle-down']"
          /></a>
        </li>

        <div
          v-if="showDropSecond"
          v-on:mouseleave="hidePages"
          class="head-Drop-Bottom-second"
        >
        <!-- NOTE! AOS Animation library was used down here  -->
          <ul data-aos="fade-right"
          data-aos-duration='100'
           class="dropBottom-second">
            <li><a href="#">services</a></li>
            <li><a href="#">testimonials</a></li>
            <li><a href="#">covid-19</a></li>
            <li><a href="#">404 page</a></li>
          </ul>
        </div>

        <li>
          <a class="head-blog" href="#"
            >blog <font class="dropdownIcon" :icon="['fas', 'angle-down']"
          /></a>
        </li>
        <li><a href="#">contact</a></li>
      </ul>
    </div>

    <div class="buttonSubmit">
      <button>Appointment</button>
    </div>
    <font v-on:click="barOpen" class="bars" :icon="['fas', 'bars']" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showDropFirst: false,
      showDropSecond: false,
      showCategory: true,
    };
  },
  methods: {
    showAbout() {
      this.showDropFirst = !this.showDropFirst;
    },
    hideAbout() {
      this.showDropFirst = false;
    },

    // Second Dropdwon Below

    showPages() {
      this.showDropSecond = !this.showDropSecond;
    },
    hidePages() {
      this.showDropSecond = false;
    },

    // show [Category] with Bar

    barOpen() {
      this.showCategory = !this.showCategory;
    },
  },
};
</script>

<!-- Styles -->
<style scoped>
.headerBottom {
  margin-left: 85px;
  margin-right: 85px;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
}

.bottomBox ul {
  display: flex;
  align-items: center;
  height: 100%;
}

.bottomBox li {
  list-style: none;
}

.bottomBox .head-ul {
  color: #780bd5;
}

.logo img {
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.logo img:hover {
  opacity: 0.8;
}

/* First Dropdown Menu */

.dropBottom {
  position: absolute;
  top: 24.6%;
  left: 34%;
  flex-direction: column;
  -webkit-transition: all 400ms ease;
  -moz-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
}

.dropBottom li a {
  padding: 12px 0;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 20px;
  font-weight: 500;
  font-size: 18px;
  transition: all 300ms ease;
  text-transform: capitalize;
}

.dropBottom li a:hover {
  color: #780bd5;
  padding-left: 8px;
}

.dropBottom li {
  padding: 17px 0;
}

.head-Drop-Bottom ul {
  border-radius: 3px;
  background: #fff;
  display: inline-block;
  text-align: left;
  transition: all 400ms ease;
  height: 30%;
  width: 19%;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
}

/* First Dropdown Menu End */

/* Second Dropdown Menu */

.dropBottom-second {
  position: absolute;
  top: 24.6%;
  left: 51%;
  flex-direction: column;
  -webkit-transition: all 400ms ease;
  -moz-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
}

.dropBottom-second li a {
  padding: 12px 0;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 20px;
  font-weight: 500;
  font-size: 18px;
  transition: all 300ms ease;
  text-transform: capitalize;
}

.dropBottom-second li a:hover {
  color: #780bd5;
  padding-left: 8px;
}

.dropBottom-second li {
  padding: 17px 0;
}

.head-Drop-Bottom-second ul {
  border-radius: 3px;
  background: #fff;
  display: inline-block;
  text-align: left;
  transition: all 400ms ease;
  height: 36.5%;
  width: 19%;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05), -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
}

/* Second Dropdown Menu End */

.dropdownIcon {
  color: #cccccc;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}

.dropdownIcon:hover {
  color: #780bd5;
}

.bottomBox .head-about:hover {
  color: #780bd5;
}

.bottomBox .head-pages:hover {
  color: #780bd5;
}

.bottomBox .head-blog:hover {
  color: #780bd5;
}

.bottomBox a {
  transition: all 300ms ease;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 18.5px;
  margin: 0 20px;
  color: #333333;
  line-height: 30px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  opacity: 1;
}

/* Buttons */

.buttonSubmit {
  display: flex;
  align-items: center;
}

.buttonSubmit button {
  outline: none;
  border: none;
  background: #780bd5;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  padding: 13px 30px;
  text-align: center;
  transition: all 0.4s ease;
  letter-spacing: 1px;
  border: 2px solid #780bd5;
  line-height: 24px;
  border-radius: 9px;
}

.buttonSubmit button:hover {
  background: #ae4eff;
  border: 2px solid #ae4eff;
}

.bars {
  cursor: pointer;
  display: none;
}

/* ################ */
/* Media queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  .headerBottom {
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 25px;
    margin-bottom: 90px;
    display: flex;
    justify-content: center;
  }

  .bottomBox ul {
    display: none;
    align-items: center;
    height: 100%;
  }

  .bars {
    display: block;
    color: #780bd5;
    position: absolute;
    left: 20px;
    margin-top: 70px;
    font-size: 30px;
  }

  /* First Dropdown Menu */

  /*.dropBottom {
    position: absolute;
    top: 25.2%;
    left: 34%;
    flex-direction: column;
  }

  .dropBottom li a {
    padding: 12px 0;
    line-height: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .dropBottom li a:hover {
    padding-left: 8px;
  }

  .dropBottom li {
    padding: 17px 0;
  }

  .head-Drop-Bottom ul {
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    height: 30%;
    width: 19%;
  } */

  /* First Dropdown Menu End */

  /* Second Dropdown Menu */

  /* .dropBottom-second {
    position: absolute;
    top: 25.2%;
    left: 51%;
    flex-direction: column;
  }

  .dropBottom-second li a {
    padding: 12px 0;
    line-height: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .dropBottom-second li a:hover {
    padding-left: 8px;
  }

  .dropBottom-second li {
    padding: 17px 0;
  }

  .head-Drop-Bottom-second ul {
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    transition: all 400ms ease;
    height: 36.5%;
    width: 19%;
  } */

  /* Second Dropdown Menu End */

  .bottomBox a {
    font-size: 18.5px;
    margin: 0 20px;
    line-height: 30px;
    font-weight: 600;
    opacity: 1;
  }

  /* Buttons */

  .buttonSubmit {
    display: flex;
    align-items: center;
  }

  .buttonSubmit button {
    position: absolute;
    right: 10px;
    margin-top: 110px;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    padding: 13px 28px;
    letter-spacing: 1px;
    line-height: 24px;
    border-radius: 9px;
  }
  /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .headerBottom {
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 25px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
  }

  .bottomBox ul {
    display: none;
    align-items: center;
    height: 100%;
  }

  .bars {
    display: block;
    color: #780bd5;
    position: absolute;
    left: 20px;
    margin-top: 70px;
    font-size: 30px;
  }

  /* First Dropdown Menu */

  /*.dropBottom {
    position: absolute;
    top: 25.2%;
    left: 34%;
    flex-direction: column;
  }

  .dropBottom li a {
    padding: 12px 0;
    line-height: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .dropBottom li a:hover {
    padding-left: 8px;
  }

  .dropBottom li {
    padding: 17px 0;
  }

  .head-Drop-Bottom ul {
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    height: 30%;
    width: 19%;
  } */

  /* First Dropdown Menu End */

  /* Second Dropdown Menu */

  /* .dropBottom-second {
    position: absolute;
    top: 25.2%;
    left: 51%;
    flex-direction: column;
  }

  .dropBottom-second li a {
    padding: 12px 0;
    line-height: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .dropBottom-second li a:hover {
    padding-left: 8px;
  }

  .dropBottom-second li {
    padding: 17px 0;
  }

  .head-Drop-Bottom-second ul {
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    transition: all 400ms ease;
    height: 36.5%;
    width: 19%;
  } */

  /* Second Dropdown Menu End */

  .bottomBox a {
    font-size: 18.5px;
    margin: 0 20px;
    line-height: 30px;
    font-weight: 600;
    opacity: 1;
  }

  /* Buttons */

  .buttonSubmit {
    display: flex;
    align-items: center;
  }

  .buttonSubmit button {
    position: absolute;
    right: 10px;
    margin-top: 110px;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    padding: 13px 28px;
    letter-spacing: 1px;
    line-height: 24px;
    border-radius: 9px;
  }
  /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .headerBottom {
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 25px;
    margin-bottom: 65px;
    display: flex;
    justify-content: center;
  }

  .bottomBox ul {
    display: none;
    align-items: center;
    height: 100%;
  }

  .bars {
    display: block;
    color: #780bd5;
    position: absolute;
    left: 20px;
    margin-top: 70px;
    font-size: 30px;
  }

  /* First Dropdown Menu */

  /*.dropBottom {
    position: absolute;
    top: 25.2%;
    left: 34%;
    flex-direction: column;
  }

  .dropBottom li a {
    padding: 12px 0;
    line-height: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .dropBottom li a:hover {
    padding-left: 8px;
  }

  .dropBottom li {
    padding: 17px 0;
  }

  .head-Drop-Bottom ul {
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    height: 30%;
    width: 19%;
  } */

  /* First Dropdown Menu End */

  /* Second Dropdown Menu */

  /* .dropBottom-second {
    position: absolute;
    top: 25.2%;
    left: 51%;
    flex-direction: column;
  }

  .dropBottom-second li a {
    padding: 12px 0;
    line-height: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .dropBottom-second li a:hover {
    padding-left: 8px;
  }

  .dropBottom-second li {
    padding: 17px 0;
  }

  .head-Drop-Bottom-second ul {
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    transition: all 400ms ease;
    height: 36.5%;
    width: 19%;
  } */

  /* Second Dropdown Menu End */

  .bottomBox a {
    font-size: 18.5px;
    margin: 0 20px;
    line-height: 30px;
    font-weight: 600;
    opacity: 1;
  }

  /* Buttons */

  .buttonSubmit {
    display: flex;
    align-items: center;
  }

  .buttonSubmit button {
    position: absolute;
    right: 10px;
    margin-top: 110px;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    padding: 13px 28px;
    letter-spacing: 1px;
    line-height: 24px;
    border-radius: 9px;
  }
  /* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .headerBottom {
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-evenly;
  }

  .bottomBox ul {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .bars {
    display: none;
  }

  /* First Dropdown Menu */

  .dropBottom {
    position: absolute;
    top: 32.4%;
    left: 34%;
    flex-direction: column;
  }

  .dropBottom li a {
    padding: 12px 0;
    line-height: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .dropBottom li a:hover {
    padding-left: 8px;
  }

  .dropBottom li {
    padding: 17px 0;
  }

  .head-Drop-Bottom ul {
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    height: 40%;
    width: 20%;
  }

  /* First Dropdown Menu End */

  /* Second Dropdown Menu */

  .dropBottom-second {
    position: absolute;
    top: 32.4%;
    left: 58%;
    flex-direction: column;
  }

  .dropBottom-second li a {
    padding: 12px 0;
    line-height: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .dropBottom-second li a:hover {
    padding-left: 8px;
  }

  .dropBottom-second li {
    padding: 17px 0;
  }

  .head-Drop-Bottom-second ul {
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    transition: all 400ms ease;
    height: 52%;
    width: 20%;
  }

  /* Second Dropdown Menu End */

  .bottomBox a {
    font-size: 18.5px;
    margin: 0 20px;
    line-height: 30px;
    font-weight: 600;
    opacity: 1;
  }

  /* Buttons */

  .buttonSubmit {
    display: flex;
    align-items: center;
  }

  .buttonSubmit button {
    display: none;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    padding: 13px 28px;
    letter-spacing: 1px;
    line-height: 24px;
    border-radius: 9px;
  }
  /* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px) {
  .headerBottom {
    margin-left: 30px;
    margin-right: 0px;
    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
  }

  .bottomBox ul {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .bars {
    display: none;
  }

  /* First Dropdown Menu */

  .dropBottom {
    position: absolute;
    top: 32.4%;
    left: 34%;
    flex-direction: column;
  }

  .dropBottom li a {
    padding: 12px 0;
    line-height: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .dropBottom li a:hover {
    padding-left: 8px;
  }

  .dropBottom li {
    padding: 17px 0;
  }

  .head-Drop-Bottom ul {
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    height: 37%;
    width: 20%;
  }

  /* First Dropdown Menu End */

  /* Second Dropdown Menu */

  .dropBottom-second {
    position: absolute;
    top: 32.4%;
    left: 58%;
    flex-direction: column;
  }

  .dropBottom-second li a {
    padding: 12px 0;
    line-height: 20px;
    font-weight: 500;
    font-size: 18px;
  }

  .dropBottom-second li a:hover {
    padding-left: 8px;
  }

  .dropBottom-second li {
    padding: 17px 0;
  }

  .head-Drop-Bottom-second ul {
    border-radius: 3px;
    display: inline-block;
    text-align: left;
    transition: all 400ms ease;
    height: 49%;
    width: 20%;
  }

  /* Second Dropdown Menu End */

  .bottomBox a {
    font-size: 18.5px;
    margin: 0 20px;
    line-height: 30px;
    font-weight: 600;
    opacity: 1;
  }

  /* Buttons */

  .buttonSubmit {
    display: flex;
    align-items: center;
  }

  .buttonSubmit button {
    display: none;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    padding: 13px 28px;
    letter-spacing: 1px;
    line-height: 24px;
    border-radius: 9px;
  }
  /* 1201px and 1315px */
}

/*
* Congratulations , This Header Page ' Responsive and looks good on any device ' *
 */
</style>
