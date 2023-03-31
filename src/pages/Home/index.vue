<template>
  <div>
    <TypeNav />
    <!-- 轮播 -->
    <ListContainer />
    <!-- 今日推荐 -->
    <Recommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!-- 楼层 -->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>
    <!-- 商标 -->
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted() {
    //获取floor组件的数据
    this.$store.dispatch("getFloorList");
    this.$store.dispatch("GetQinghua");
    //获取用户信息
    // this.$store.dispatch('getUserInfo')

  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList
    }),
    // ...mapState(["qinghua"])
    
  },
};
</script>

<style>
</style>