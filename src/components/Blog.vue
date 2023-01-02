<template>
  <div>
    <div class="blogHeaderMain">
      <div class="holdBlogContent">
        <div class="contentBlog">
          <h4>blog</h4>
          <h1>latest news</h1>
          <img src="~@/assets/images/blue-line.png" alt="Blue Line" />
          <img
            class="rightSide"
            src="~@/assets/images/blogSideCovid-19.png"
            alt="Side covid-19"
          />
        </div>
      </div>

      <!-- Blog page Header end -->
      <div class="holdUpBoxes">
      <div class="holdEventsBoxes">
        <div class="eventsCovid">
          <a href=""><img src="~@/assets/images/latest-news-image_first.jpg" alt="" /></a>
          <div class="bottomBackground">
          <div class="date">7 Jan, 2020</div>
          <a class="readMoreLink" href=""><h4>
            Do not delay if the symptoms <br />
            appear
          </h4></a>
          <p>
            Do not delay the symptoms , otherwise <br />
            you may infect, and may cause an illness.<br />
            so Please do not delay. <a  class="author" href="http://" target="_blank">
            <strong>Paul Roma</strong></a>
          </p>
          <a class='readMoreButton' href="#">read more <font :icon="['fas', 'angle-right']" /></a>
          </div>
        </div>
      </div>

      <!-- Second Box -->
      <div class="holdEventsBoxes">
        <div class="eventsCovid">
          <a href=""><img src="~@/assets/images/latest-news-image_second.jpg" alt="" /></a>
          <div class="bottomBackground">
          <div class="date">31 Dec, 2020</div>
          <a class="readMoreLink" href=""><h4>
            Use masks to avoid  <br /> Coronaviruses
          </h4></a>
          <p>
            Clean your hands before, you put your mask <br> on, as well as before and after you take it off, <br> and after you touch it at any time.
            <a class="author" href="" target="_blank"><strong>Faraz Colin</strong></a>
          </p>
          <a class='readMoreButton' href="#">read more <font :icon="['fas', 'angle-right']" /></a>
          </div>
        </div>
      </div>

      <!-- Third Box -->
        <div class="holdEventsBoxes">
          <div class="eventsCovid">
            <a href=""><img src="~@/assets/images/latest-news-image_third.jpg" alt="" /></a>
            <div class="bottomBackground">
            <div class='date'>2 June, 2019</div>
            <a class="readMoreLink" href=""><h4>
              Experienced physicians provide <br> medical care <br />
            </h4></a>
            <p>
              Do not delay the experienced physicians , <br />
              you may have trouble, and may cause an illness.<br />
              so Please do not delay it. <a class="author" href="" target="_blank"><strong>John Devid</strong></a>
            </p>
            <a class='readMoreButton' href="#">read more <font :icon="['fas', 'angle-right']" /></a>
            </div>
          </div>
          </div> <!-- holdEventsBoxes -->
        </div>   <!-- holdUpBoxes -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data: () => {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.blogHeaderMain {
  margin-top: 95px;
  padding-top: 95px;
  padding-bottom: 95px;
  background: #f9f9f9;
  /* height: 800px; */
}

.holdBlogContent {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.contentBlog h4 {
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #780bd5;
  margin-bottom: 8px;
}

.contentBlog .rightSide {
  width: 50px;
  position: absolute;
  right: 100px;
  margin-top: -80px;
  /* Animation */
  animation-name: rotateIcon;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-user-drag: none;
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

/* Animation */

.blogHeaderMain h1 {
  text-transform: capitalize;
  color: #333;
  font-size: 38px;
  font-weight: 500;
  line-height: 38px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* Blog page Header end */
.holdUpBoxes {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.holdUpBoxes img {
  border-radius: 10px;
  margin-top: 45px;
  width: 100%;
}

.holdUpBoxes .eventsCovid {
  padding-left: 30px;
  padding-right: 30px;
}

.bottomBackground {
  display: inline-block;
  width: 100%;
  background: #fff;
  box-shadow: rgba(45, 29, 148, 0.07) 0px 35px 35px;
  border-radius: 10px;
  padding-bottom: 15px;
}

.bottomBackground h4 , p {
  padding-left: 20px;
}

.bottomBackground p {
  color: rgb(132, 132, 132);
  font-size: 17px;
  line-height: 1.6em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 20px;
  margin-top: 20px;
}

.bottomBackground .readMoreButton {
  padding-left: 20px;
  font-size: 16px;
  font-family: Rubik, sans-serif;
  color: rgb(85, 85, 85);
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none;
}

/*
 Whenever this (h4) hovers, (fa-angle-right) icon will work.
*/

.bottomBackground .readMoreButton .fa-angle-right {
  transition: all 100ms ease;
}

.bottomBackground .readMoreButton:hover .fa-angle-right {
  margin-left: 5px;
}

/*
 Whenever this (h4) hovers, (fa-angle-right) icon will work.
*/

.bottomBackground .readMoreLink h4:hover {
  color: #780bd5;
}

.bottomBackground .readMoreLink {
  text-decoration: none;
}

.bottomBackground .readMoreButton:hover {
  display: inline-block;
  transition: all 100ms ease;
  color: #780bd5;
}

.bottomBackground .author {
  font-style: italic;
  text-decoration: none;
  font-size: 16px;
  color: rgb(87, 80, 80);
}

.bottomBackground .author:hover {
  text-decoration: underline;
}

.bottomBackground .readMoreLink h4 {
  margin-bottom: 15px;
  line-height: 28px;
  color: rgb(8, 8, 8);
  font-weight: 470;
  font-size: 24px;
  transition: all 100ms ease;
}

/* Published buttons time */

.holdUpBoxes .date {
  position: relative;
  top: -20px;
  padding: 13px 24px;
  background: #780bd5;
  border-radius: 7px;
  margin-top: 0;
  font-size: 16px;
  margin-left: 20px;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
}

/* Published buttons time */

/* ***************** */
/* Media Queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
.blogHeaderMain {
  margin-top: 95px;
  padding-top: 95px;
  /* height: 800px; */
}

.holdBlogContent {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.contentBlog h4 {
  font-size: 16px;
  font-weight: 550;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.contentBlog .rightSide {
  width: 50px;
  position: absolute;
  right: 35px;
  margin-top: 0px;
  /* Animation */
}


/*
  *Animation is temporarily blocked.*
*/
/* Animation */

.blogHeaderMain h1 {
  text-transform: capitalize;
  font-size: 30px;
  font-weight: 500;
  line-height: 38px;
}

/* Blog page Header end */
.holdUpBoxes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}


.holdUpBoxes img {
  border-radius: 10px;
  margin-top: 45px;
  width: 100%;
}

.holdUpBoxes .eventsCovid {
  padding-left: 30px;
  padding-right: 30px;
}

.bottomBackground {
  display: inline-block;
  width: 100%;
  border-radius: 10px;
  padding-bottom: 15px;
}

.bottomBackground h4 , p {
  padding-left: 20px;
}

.bottomBackground p {
  font-size: 17px;
  line-height: 1.6em;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 85%;
}

.bottomBackground .readMoreButton {
  padding-left: 20px;
  font-size: 16px;
  font-weight: 700;
}

/*
 Whenever this (h4) hovers, (fa-angle-right) icon will start working.
*/

.bottomBackground .readMoreButton:hover .fa-angle-right {
  margin-left: 12px;
}

/*
 Whenever this (h4) hovers, (fa-angle-right) icon will work.
*/

.bottomBackground .readMoreButton:hover {
  display: inline-block;
}

.bottomBackground .author {
  font-size: 16px;
}

.bottomBackground .readMoreLink h4 {
  margin-bottom: 15px;
  line-height: 28px;
  font-weight: 470;
  font-size: 24px;
  width: 100%;
}

/* Published buttons time */

.holdUpBoxes .date {
  position: relative;
  top: -20px;
  padding: 13px 28px;
  border-radius: 7px;
  margin-top: 0;
  font-size: 16px;
  margin-left: 20px;
  display: inline-block;
}
/* 320px and 480px */
/* Published buttons time */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
.blogHeaderMain {
  margin-top: 95px;
  padding-top: 95px;
  /* height: 800px; */
}

.holdBlogContent {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.contentBlog h4 {
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.contentBlog .rightSide {
  width: 50px;
  position: absolute;
  right: 35px;
  margin-top: -20px;
  /* Animation */
}


/*
  *Animation is temporarily blocked.*
*/
/* Animation */

.blogHeaderMain h1 {
  text-transform: capitalize;
  font-size: 36px;
  font-weight: 500;
  line-height: 38px;
}

/* Blog page Header end */
.holdUpBoxes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.holdUpBoxes img {
  border-radius: 10px;
  margin-top: 45px;
  width: 100%;
}

.holdUpBoxes .eventsCovid {
  padding-left: 20px;
  padding-right: 20px;
}

.bottomBackground {
  display: inline-block;
  width: 70%;
  border-radius: 10px;
  padding-bottom: 15px;
}

.bottomBackground h4 , p {
  padding-left: 20px;
}

.bottomBackground p {
  font-size: 18px;
  line-height: 1.6em;
  margin-bottom: 20px;
  margin-top: 20px;
}

.bottomBackground .readMoreButton {
  padding-left: 20px;
  font-size: 16px;
  font-weight: 700;
}

/*
 Whenever this (h4) hovers, (fa-angle-right) icon will start working.
*/

.bottomBackground .readMoreButton:hover .fa-angle-right {
  margin-left: 12px;
}

/*
 Whenever this (h4) hovers, (fa-angle-right) icon will work.
*/

.bottomBackground .readMoreButton:hover {
  display: inline-block;
}

.bottomBackground .author {
  font-size: 16px;
}

.bottomBackground .readMoreLink h4 {
  margin-bottom: 15px;
  line-height: 28px;
  font-weight: 470;
  font-size: 25px;
  width: 100%;
}

/* Published buttons time */

.holdUpBoxes .date {
  position: relative;
  top: -20px;
  padding: 15px 32px;
  border-radius: 7px;
  margin-top: 0;
  font-size: 16px;
  margin-left: 20px;
  display: inline-block;
}
/* 481px and 768px */
/* Published buttons time */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
.blogHeaderMain {
  margin-top: 95px;
  padding-top: 95px;
  /* height: 800px; */
}

.holdBlogContent {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.contentBlog h4 {
  font-size: 18px;
  font-weight: 550;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.contentBlog .rightSide {
  width: 50px;
  position: absolute;
  right: 35px;
  margin-top: -20px;
  /* Animation */
}


/*
  *Animation is temporarily blocked.*
*/
/* Animation */

.blogHeaderMain h1 {
  text-transform: capitalize;
  font-size: 36px;
  font-weight: 500;
  line-height: 38px;
}

/* Blog page Header end */
.holdUpBoxes {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.holdUpBoxes img {
  border-radius: 10px;
  margin-top: 45px;
}

/* .holdUpBoxes .eventsCovid {
  padding-left: 15px;
  padding-right: 15px;
} */

.bottomBackground {
  display: block;
  border-radius: 10px;
  padding-bottom: 15px;
}

.bottomBackground h4 , p {
  padding-left: 20px;
}

.bottomBackground p {
  font-size: 18px;
  line-height: 1.6em;
  margin-bottom: 20px;
  margin-top: 20px;
}

.bottomBackground .readMoreButton {
  padding-left: 20px;
  font-size: 16px;
  font-weight: 700;
}

/*
 Whenever this (h4) hovers, (fa-angle-right) icon will start working.
*/

.bottomBackground .readMoreButton:hover .fa-angle-right {
  margin-left: 12px;
}

/*
 Whenever this (h4) hovers, (fa-angle-right) icon will work.
*/

.bottomBackground .readMoreButton:hover {
  display: inline-block;
}

.bottomBackground .author {
  font-size: 16px;
}

.bottomBackground .readMoreLink h4 {
  margin-bottom: 15px;
  line-height: 28px;
  font-weight: 470;
  font-size: 25px;
  width: 100%;
}

/* Published buttons time */

.holdUpBoxes .date {
  position: relative;
  top: -20px;
  padding: 15px 32px;
  border-radius: 7px;
  margin-top: 0;
  font-size: 16px;
  margin-left: 20px;
  display: inline-block;
}
/* 769px and 1024px */
/* Published buttons time */
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  * {
    display: none;
  }
}

@media screen and (min-width: 1201px) and (max-width: 1315px) {
  .blogHeaderMain {
    margin-top: 95px;
    padding-top: 95px;
    /* height: 800px; */
  }

  .holdBlogContent {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contentBlog h4 {
    font-size: 18px;
    font-weight: 550;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .contentBlog .rightSide {
    width: 50px;
    position: absolute;
    right: 35px;
    margin-top: -20px;
    /* Animation */
  }


  /*
    *Animation is temporarily blocked.*
  */
  /* Animation */

  .blogHeaderMain h1 {
    text-transform: capitalize;
    font-size: 38px;
    font-weight: 500;
    line-height: 38px;
  }

  /* Blog page Header end */
  .holdUpBoxes {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .holdUpBoxes img {
    border-radius: 10px;
    margin-top: 45px;
  }

  .holdUpBoxes .eventsCovid {
    padding-left: 15px;
    padding-right: 15px;
  }

  .bottomBackground {
    display: inline-block;
    border-radius: 10px;
    padding-bottom: 15px;
  }

  .bottomBackground h4 , p {
    padding-left: 15px;
  }

  .bottomBackground p {
    font-size: 1.5vw;
    line-height: 1.6em;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .bottomBackground .readMoreButton {
    padding-left: 15px;
    font-size: 16px;
    font-weight: 700;
  }

  /*
   Whenever this (h4) hovers, (fa-angle-right) icon will start working.
  */

  .bottomBackground .readMoreButton:hover .fa-angle-right {
    margin-left: 12px;
  }

  /*
   Whenever this (h4) hovers, (fa-angle-right) icon will work.
  */

  .bottomBackground .readMoreButton:hover {
    display: inline-block;
  }

  .bottomBackground .author {
    font-size: 16px;
  }

  .bottomBackground .readMoreLink h4 {
    margin-bottom: 15px;
    line-height: 28px;
    font-weight: 470;
    font-size: 23px;
    width: 100%;
  }

  /* Published buttons time */

  .holdUpBoxes .date {
    position: relative;
    top: -20px;
    padding: 15px 32px;
    border-radius: 7px;
    margin-top: 0;
    font-size: 16px;
    margin-left: 20px;
    display: inline-block;
  }
  /* 1201px and 1315px */
  /* Published buttons time */
}
</style>
