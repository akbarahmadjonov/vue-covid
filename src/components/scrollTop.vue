<template>
  <div>
    <div @click='scrollTop' v-show='showScroll' class="buttonTop">
      <font :icon='["fas", "angle-up"]' />
    </div>
  </div>
</template>

<script>
export default {
  data:() => {
    return {
      showScroll: true
    }
  },
  methods: {
    scrollTop:function(e){
      window.scrollTo(0,0);
      console.log(e);
    },
  }
}
</script>

<style scoped>
.buttonTop {
  width: 55px;
  height: 55px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-size: 30px;
  border-radius: 20%;
  z-index: 99;
  color: #fff;
  text-align: center;
  cursor: pointer;
  background: #780bd5;
  box-shadow: 4px 9px 16px 1px rgb(0 0 0 / 30%), -2px 0px 5px 1px rgb(0 0 0 / 5%);
}

.buttonTop:hover {
  background: #6f11bf;
}

.buttonTop:active {
  background: #910fff;
}

.buttonTop .fa-angle-up {
  padding-top: 4px;
}
</style>
