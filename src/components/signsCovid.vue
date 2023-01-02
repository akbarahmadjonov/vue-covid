<template>
  <div>
    <div class="headSigns">
      <div class='signsCovid'>
        <h1>Contact us immediately if there are signs <br> of the Coronavirus</h1>
        <div class="buttonRight">
          <button><a href="#">contact us</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
 .headSigns {
   margin-top: 120px;
   padding-left: 80px;
   padding-right: 80px;
   background-image: url(~@/assets/images/covid-19_signs_background.jpg);
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
   background-position: center;
   position: relative;
   width: 100%;
   height: 150px;
}

.headSigns::before {
  position: absolute;
   content: "";
   top: 0px;
   bottom: 0px;
   left: 0px;
   right: 0px;
   background: linear-gradient(30deg, rgb(51, 0, 94) 26%, rgba(120, 11, 213, 0.63) 85%);
}

.signsCovid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;
}

.signsCovid h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
  font-size: 35px;
  font-weight: 500;
  line-height: 42px;
}

  .signsCovid button {
    padding: 11px 32px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    background: #AE4EFF;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 2px solid #AE4EFF;
    border-radius: 7px;
    outline: none;
    transition: all 0.1s ease-in-out;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .signsCovid button:hover {
    color: #ffffff;
    background: #8600F8;
    border-color: #8600F8;
  }

  .signsCovid button a {
    color: #fff;
    text-decoration: none;
  }

  /* ******************** */
  /* Media Queries */

@media screen and (min-width: 320px) and (max-width: 480px) {
  .headSigns {
    margin-top: 120px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    background-position: left;
    width: 100%;
    height: 330px;
 }

 .signsCovid {
   display: block;
   padding-top: 28px;
   width: 100%;
   /* justify-content: space-between;
   align-items: center; */
   position: relative;
   height: 100%;
 }

 .signsCovid h1 {
   font-size: 37px;
   font-weight: 500;
   line-height: 42px;
   margin-bottom: 25px;
 }

   .signsCovid button {
     padding: 11px 32px;
     line-height: 24px;
     font-size: 15px;
     font-weight: 500;
     letter-spacing: 1px;
     text-transform: uppercase;
     border-radius: 7px;
     display: block;
   }
   /* 320px and 480px */
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .headSigns {
    margin-top: 120px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    background-position: left;
    width: 100%;
    height: 250px;
 }

 .signsCovid {
   display: block;
   padding-top: 28px;
   width: 100%;
   /* justify-content: space-between;
   align-items: center; */
   position: relative;
   height: 100%;
 }

 .signsCovid h1 {
   font-size: 36px;
   font-weight: 500;
   line-height: 42px;
   margin-bottom: 25px;
 }

   .signsCovid button {
     padding: 11px 32px;
     line-height: 24px;
     font-size: 15px;
     font-weight: 500;
     letter-spacing: 1px;
     text-transform: uppercase;
     border-radius: 7px;
     display: block;
   }
   /* 481px and 768px */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .headSigns {
    margin-top: 120px;
    padding-left: 50px;
    padding-right: 50px;
    position: relative;
    background-position: left;
    width: 100%;
    height: 250px;
 }

 .signsCovid {
   display: block;
   padding-top: 28px;
   width: 100%;
   /* justify-content: space-between;
   align-items: center; */
   position: relative;
   height: 100%;
 }

 .signsCovid h1 {
   font-size: 37px;
   font-weight: 500;
   line-height: 42px;
   margin-bottom: 25px;
 }

   .signsCovid button {
     padding: 11px 32px;
     line-height: 24px;
     font-size: 15px;
     font-weight: 500;
     letter-spacing: 1px;
     text-transform: uppercase;
     border-radius: 7px;
     display: block;
   }
   /* 769px and 1024px */
}

/*
* Congratulations , This signsCovid Page ' Responsive and looks good on any device ' *
 */
</style>
