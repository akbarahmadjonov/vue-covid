<template>
  <div>
    <div class="footerImage">
      <img src="~@/assets/images/footer-b-line.png" alt="Footer-b-line" />
    </div>
    <!-- Footer img -->
    <div class="holdFooter">
      <div class="footerContent">
        <div class="fourLine">
          <img src="~@/assets/images/Covid-health-company_logo.png" alt="Header Logo">
          <p>We are a team of hardworkers and full of doctors,
            Coronavirus does not choose an age and people, It just
             tries to enter.
          </p>
          <a href="#"><font :icon="['fas', 'envelope']" /></a>
          <a href="#"><font :icon="['fas', 'phone']" /></a>
          <a href="#"><font :icon="['fas', 'envelope']" /></a>
          <a href="#"><font :icon="['fas', 'phone']" /></a>
          <a href="#"><font :icon="['fas', 'envelope']" /></a>
        </div>
        <!-- First Line  -->

        <div class="fourLine">
          <h4>quick links</h4>
          <li><a href="#">about</a></li>
          <li><a href="#">services</a></li>
          <li><a href="#">blog</a></li>
          <li><a href="#">prevention</a></li>
          <li><a href="#">contact</a></li>
        </div>
        <!-- Second Line -->

        <div class="fourLine">
          <h4>latest news</h4>
          <div class="footerSmallIcons">
            <img src="~@/assets/images/footer-l-news-small-icon-1.jpg" alt="Footer-one-image">
            <a href=""><h5>Use masks to avoid Coronaviruses</h5>
              <p>02 Apr 2020</p>
            </a>
          </div>

          <div class="footerSmallIcons">
            <img src="~@/assets/images/footer-l-news-small-icon-2.jpg" alt="Footer-one-image">
            <a href=""><h5>Do not delay if the symptoms appear</h5>
              <p>15 June 2021</p>
            </a>
          </div>
        </div>
        <!-- Third Line -->

        <div class="fourLine">
          <div class="holdImgCategory">
            <h4>instagram</h4>
            <img src="~@/assets/images/footer-instagram-click-image-1.jpg" alt="Image-1">
            <img src="~@/assets/images/footer-instagram-click-image-2.jpg" alt="Image-2">
            <img src="~@/assets/images/footer-instagram-click-image-3.jpg" alt="Image-3">
            <img src="~@/assets/images/footer-instagram-click-image-4.jpg" alt="Image-4">
            <img src="~@/assets/images/footer-instagram-click-image-5.jpg" alt="Image-5">
            <img src="~@/assets/images/footer-instagram-click-image-6.jpg" alt="Image-6">
          </div>
        </div>
        <!-- Last Line -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:() => {
    return {
    }
  }
}
</script>

<style scoped>
.footerImage img {
  position: absolute;
  width: 100%;
  z-index: 999;
}
/* Footer top background */

.holdFooter {
  padding-top: 90px;
  padding-bottom: 60px;
  padding-left: 50px;
  padding-right: 50px;
  background-image: url('~@/assets/images/footer-background-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  width: 100%;
  height: 100%;
}

.holdFooter::before {
  position: absolute;
  content: "";
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(246, 246, 246, 0.9);
}

.holdFooter .fourLine:nth-child(2) ul li{
  display: flex;
  list-style: none;
}

.footerContent {
  display: flex;
  position: relative;
}

.footerContent h5 {
  width: 100%;
}

.footerSmallIcons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footerSmallIcons p {
  padding-left: 20px;
  color: rgb(51, 51, 51);
  font-size: 14px;
  line-height: 24px;
}

/* Forth Line */

.fourLine .holdImgCategory{
  width: 91%;
  margin-right: -160px;
}

.fourLine .holdImgCategory img {
  width: 90px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 2px;
}

.fourLine .holdImgCategory img:hover {
  opacity: 0.8;
}

.footerContent .fourLine:nth-child(1) img {
  padding-bottom: 22px;
}

.footerContent h4 {
  padding-bottom: 22px;
  font-size: 21px;
  font-weight: 600;
  text-transform: capitalize;
  color: #222;
}

.footerContent .fourLine:nth-child(2) {
  position: absolute;
  padding-left: 30%;
}

.footerContent .fourLine:nth-child(2) li {
  list-style: square;
  color: #780bd5;
}

.footerContent .fourLine:nth-child(1) p {
  width: 50%;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 2em;
  /* padding-right: 95px; */
  color: #333;
}

.footerContent .fourLine:nth-child(1) a {
  color: #780bd5;
  margin: 0 5px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 7px;
  box-shadow: 4px 9px 16px 1px rgb(0 0 0 / 6%), -2px 0px 5px 1px rgb(0 0 0 / 2%);
  text-align: center;
  display: inline-block;
}

.footerContent .fourLine:nth-child(1) a:hover {
  box-shadow: 4px 9px 16px 1px rgb(0 0 0 / 12%), -2px 0px 5px 1px rgb(0 0 0 / 2%);
}

.footerContent .fourLine:nth-child(2) a {
  display: inline-block;
  line-height: 24px;
  color: rgb(51, 51, 51);
  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 2px 0px 5px 0px;
  transition: all 0.1s ease;
  text-decoration: none;
}

.footerContent .fourLine:nth-child(2) a:hover {
  color: #780bd5;
}

.footerContent .fourLine:nth-child(3) img {
  margin-bottom: 25px;
  border-radius: 10px;
  width: 80px;
}

.footerContent .fourLine:nth-child(3) h5 {
  padding-left: 20px;
  color: rgb(51, 51, 51);
  font-size: 18px;
  font-weight: 600;
  transition: all 0.1s ease-in-out;
  display: inline-block;
}

.footerContent .fourLine:nth-child(3) h5:hover {
  color: #780bd5;
}

.footerContent .fourLine:nth-child(3) a {
  text-decoration: none;
}

/* - Media Queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
.footerImage img {
  position: absolute;
  width: 100%;
  z-index: 999;
}
/* Footer top background */

.holdFooter {
  padding-top: 90px;
  padding-bottom: 60px;
  padding-left: 25px;
  padding-right: 60px;
  background-image: url('~@/assets/images/footer-background-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  width: 100%;
  height: 100%;
}

.holdFooter::before {
  position: absolute;
  content: "";
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.holdFooter .fourLine:nth-child(2) ul li{
  display: flex;
}

.footerContent {
  display: flex;
  flex-wrap: wrap;
}

.footerContent h5 {
  width: 100%;
}

.footerSmallIcons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footerSmallIcons p {
  padding-left: 20px;
  font-size: 14px;
  line-height: 24px;
}

/* Forth Line */

.fourLine .holdImgCategory {
  width: 80%;
  margin-right: 0px;
}

.fourLine .holdImgCategory img {
  width: 90px;
  border-radius: 10px;
  margin: 2px;
}

.fourLine .holdImgCategory img:hover {
  opacity: 0.8;
}

.footerContent .fourLine:nth-child(1) img {
  padding-bottom: 22px;
}

.footerContent h4 {
  padding-bottom: 22px;
  font-size: 21px;
  font-weight: 600;
  text-transform: capitalize;
}

.footerContent .fourLine:nth-child(2) {
  padding-left: 0px;
  position: relative;
  margin-bottom: 40px;
}

.footerContent .fourLine:nth-child(2) li {
  list-style: square;
}

.footerContent .fourLine:nth-child(1) p {
  width: 74%;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 2em;
  /* padding-right: 95px; */
}

.footerContent .fourLine:nth-child(1) a {
  margin: 0 5px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 7px;
  text-align: center;
  display: inline-block;
  margin-bottom: 40px;
}

.footerContent .fourLine:nth-child(2) a {
  display: inline-block;
  line-height: 24px;
  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 2px 0px 5px 0px;
}

.footerContent .fourLine:nth-child(3) img {
  margin-bottom: 30px;
  border-radius: 10px;
  width: 80px;
}

.footerContent .fourLine:nth-child(3) h5 {
  padding-left: 20px;
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  }
  /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .footerImage img {
  position: absolute;
  width: 100%;
  z-index: 999;
}
/* Footer top background */

.holdFooter {
  padding-top: 90px;
  padding-bottom: 60px;
  padding-left: 25px;
  padding-right: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  width: 100%;
  height: 100%;
}

.holdFooter::before {
  position: absolute;
  content: "";
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.holdFooter .fourLine:nth-child(2) ul li{
  display: flex;
}

.footerContent {
  display: flex;
  flex-wrap: wrap;
}

.holdFooter .fourLine:nth-child(3) h4 {
  display: none;
}

.footerContent h5 {
  width: 100%;
}

.footerSmallIcons {
  display: none;
  align-items: center;
  justify-content: space-between;
}


.footerContent .fourLine:nth-child(3) {
  padding-left: 80px;
}

.footerSmallIcons p {
  padding-left: 20px;
  font-size: 14px;
  line-height: 24px;
}

/* Forth Line */

.fourLine .holdImgCategory {
  width: 70%;
  margin-right: 0px;
}

.fourLine .holdImgCategory img {
  width: 90px;
  border-radius: 10px;
  margin: 2px;
}

.fourLine .holdImgCategory img:hover {
  opacity: 0.8;
}

.footerContent .fourLine:nth-child(1) img {
  padding-bottom: 22px;
}

.footerContent h4 {
  padding-bottom: 22px;
  font-size: 21px;
  font-weight: 600;
  text-transform: capitalize;
}

.footerContent .fourLine:nth-child(2) {
  padding-left: 0px;
  position: relative;
  margin-bottom: 40px;
}

.footerContent .fourLine:nth-child(2) li {
  list-style: square;
}

.footerContent .fourLine:nth-child(1) p {
  width: 80%;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 2em;
  /* padding-right: 95px; */
}

.footerContent .fourLine:nth-child(1) a {
  margin: 0 5px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 7px;
  text-align: center;
  display: inline-block;
  margin-bottom: 40px;
}

.footerContent .fourLine:nth-child(2) a {
  display: inline-block;
  line-height: 24px;
  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 2px 0px 5px 0px;
}

.footerContent .fourLine:nth-child(3) img {
  margin-bottom: 30px;
  border-radius: 10px;
  width: 80px;
}

.footerContent .fourLine:nth-child(3) h5 {
  padding-left: 20px;
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  }
  /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .footerImage img {
  position: absolute;
  width: 100%;
  z-index: 999;
}
/* Footer top background */

.holdFooter {
  padding-top: 90px;
  padding-bottom: 60px;
  padding-left: 25px;
  padding-right: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  width: 100%;
  height: 100%;
}

.holdFooter::before {
  position: absolute;
  content: "";
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.holdFooter .fourLine:nth-child(2) ul li{
  display: flex;
}

.footerContent {
  display: flex;
  flex-wrap: wrap;
}

.holdFooter .fourLine:nth-child(3) h4 {
  display: flex;
} 

.footerContent h5 {
  width: 100%;
}

.footerSmallIcons {
  display: flex;
  justify-content: space-between;
}

.footerContent .fourLine:nth-child(3) {
  padding-left: 0px;
}

.footerSmallIcons p {
  padding-left: 20px;
  font-size: 14px;
  line-height: 24px;
}

/* Forth Line */

.fourLine .holdImgCategory {
  width: 70%;
  margin-right: 0px;
}

.fourLine .holdImgCategory img {
  width: 90px;
  border-radius: 10px;
  margin: 2px;
}

.fourLine .holdImgCategory img:hover {
  opacity: 0.8;
}

.footerContent .fourLine:nth-child(1) img {
  padding-bottom: 22px;
}

.footerContent h4 {
  padding-bottom: 22px;
  font-size: 21px;
  font-weight: 600;
  text-transform: capitalize;
}

.footerContent .fourLine:nth-child(2) {
  padding-left: 0px;
  position: relative;
  margin-bottom: 40px;
}

.footerContent .fourLine:nth-child(2) li {
  list-style: square;
}

.footerContent .fourLine:nth-child(1) p {
  width: 50%;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 2em;
  /* padding-right: 95px; */
}

.footerContent .fourLine:nth-child(1) a {
  margin: 0 5px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 7px;
  text-align: center;
  display: inline-block;
  margin-bottom: 40px;
}

.footerContent .fourLine:nth-child(2) a {
  display: inline-block;
  line-height: 24px;
  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 2px 0px 5px 0px;
}

.footerContent .fourLine:nth-child(3) img {
  margin-bottom: 30px;
  border-radius: 10px;
  width: 80px;
}

.footerContent .fourLine:nth-child(3) h5 {
  padding-left: 20px;
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  }
  /* 769px and 1024px */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
.footerImage img {
  position: absolute;
  width: 100%;
  z-index: 999;
}
/* Footer top background */

.holdFooter {
  padding-top: 90px;
  padding-bottom: 60px;
  padding-left: 25px;
  padding-right: 0px;
  background-image: url('~@/assets/images/footer-background-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  width: 100%;
  height: 100%;
}

.holdFooter::before {
  position: absolute;
  content: "";
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.holdFooter .fourLine:nth-child(2) ul li{
  display: flex;
}

.footerContent {
  display: flex;
  position: relative;
}

.footerContent h5 {
  width: 100%;
}

.footerSmallIcons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footerSmallIcons p {
  padding-left: 20px;
  font-size: 14px;
  line-height: 24px;
}

/* Forth Line */

.fourLine .holdImgCategory{
  width: 90%;
  margin-right: 0px;
}

.fourLine .holdImgCategory img {
  width: 85px;
  border-radius: 10px;
  margin: 2px;
}

.fourLine .holdImgCategory img:hover {
  opacity: 0.8;
}

.footerContent .fourLine:nth-child(1) img {
  padding-bottom: 22px;
}

.footerContent h4 {
  padding-bottom: 22px;
  font-size: 21px;
  font-weight: 600;
}

.footerContent .fourLine:nth-child(2) {
  position: absolute;
  padding-left: 28%;
}

.footerContent .fourLine:nth-child(1) p {
  width: 50%;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 2em;
}

.footerContent .fourLine:nth-child(1) a {
  margin: 0 5px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 7px;
  text-align: center;
  display: inline-block;
}

.footerContent .fourLine:nth-child(2) a {
  display: inline-block;
  line-height: 24px;
  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 2px 0px 5px 0px;
}

.footerContent .fourLine:nth-child(3) img {
  margin-bottom: 25px;
  border-radius: 10px;
  width: 80px;
}

.footerContent .fourLine:nth-child(3) {
  margin-left: -70px;
}

.footerContent .fourLine:nth-child(3) h5 {
  padding-left: 20px;
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  }
  /* 1025px and 1200px */
}

@media screen and (min-width: 1201px) and (max-width: 1315px) {
.footerImage img {
  position: absolute;
  width: 100%;
  z-index: 999;
 }

 .fourLine .holdImgCategory{
  width: 100%;
  margin-right: 0px;
}
} 

/* Congratulations , This Contagion Page ' Responsive and looks good on any device ' */
</style>
