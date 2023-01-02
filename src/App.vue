<template>
  <div id="app">
    <Preloader />
    <HeaderContact />
    <Header />
    <HeaderCarousel />
    <Contagion />
    <Symptoms />
    <Services />
    <DetectedCovid />
    <Gallery />
    <UseMask />
    <TeamSpecial />
    <SignsCovid />
    <Testimonials />
    <Blog />
    <Footer />
    <ScrollTop />
    <Copyright />
    <!-- Routers -->
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Preloader from "./components/preLoader"; // Import Preloader
import HeaderContact from "./components/HeaderContact"; // Import HeaderContact
import Header from "./components/Header"; // Import Header
import HeaderCarousel from "./components/headerCarousel"; // Import HeaderCarousel
import Contagion from "./components/Contagion"; // Import Contagion
import Symptoms from "./components/Symptoms"; // Import Symptoms
import Services from "./components/Services"; // Import Services
import DetectedCovid from "./components/covidDetected"; // Import DetectedCovid
import Gallery from "./components/Gallery"; // Import Gallery
import UseMask from "./components/useMask"; // Import Gallery
import TeamSpecial from "./components/teamSpecialist"; // Import Team
import SignsCovid from "./components/signsCovid";  // Import signsCovid
import Testimonials from "./components/Testimonials";  // Import Testimonials
import Blog from "./components/Blog";  // Import Blog
import Footer from "./components/Footer";  // Import Footer
import ScrollTop from "./components/scrollTop";  // Import Footer
import Copyright from "./components/Copyright";  // Import Footer

export default {
  name: "App",
  components: {
    Preloader,
    HeaderContact,
    Header,
    HeaderCarousel,
    Contagion,
    Symptoms,
    Services,
    DetectedCovid,
    Gallery,
    UseMask,
    TeamSpecial,
    SignsCovid,
    Testimonials,
    Blog,
    Footer,
    ScrollTop,
    Copyright
  },
};
</script>

<!-- Page Transition [Fade]  -->

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-15em);
}

.fade-enter-active,
.fade-enter-leave {
  transition: all 0.2s ease-in-out;
}
</style>
