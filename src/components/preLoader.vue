<template>
  <div>
    <div class="loaderContainer" v-if="!isLoaded">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    };
  },

  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoaded = true;
      }
    };
  },
};
</script>

<!-- Preloader Styles  -->

<style scoped>
.loaderContainer {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.loader {
  width: 70px;
  height: 70px;
  border: 6px solid;
  color: #780bd5;
  border-radius: 50%;
  border-top-color: transparent;
  animation: preLoader 1000ms linear infinite;
}

@keyframes preLoader {
  0% {
    color: tomato;
  }

  100% {
    color: #9154c7;
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
