<template>
  <div class="swiper-container" ref="curr">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(s,index) in skuImageList" :key="s.id">
        <img :src="s.imgUrl" :class="{active:index==currentIndex}" @click="changeCurrentIndex(index)"/>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  props: ["skuImageList"],
  data(){
    return{
      currentIndex : 0
    }
  },
  // computed:{
  //   ...mapGetters(['skuInfo'])
  // }
  methods:{
    changeCurrentIndex(index){
      this.currentIndex = index
      this.$bus.$emit('getIndex',index)
    }
  },
  watch: {
    skuImageList(newValue,oldValue) {
      this.$nextTick(() => {
        new Swiper(this.$refs.curr, {
          //显示几个图片
          slidesPerView: 3,
          //
          slidesPerGroup : 1,
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
};
</script>

<style lang="less">
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;
  .swiper-slide {
    width: 56px;
    height: 56px;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;
      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }
  .swiper-button-next {
    left: auto;
    right: 0;
  }
  .swiper-button-prev {
    left: 0;
    right: auto;
  }
  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>