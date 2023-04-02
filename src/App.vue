<template>
  <div>
    <!-- <h1 v-upper="msg"></h1> -->
    <Header></Header>
      <router-view></router-view>
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入
import Footer from './components/Footer'
import Header from './components/Header'


export default {
  name: 'App',
  data(){
    return{
      msg:'abc'
    }
  },
  components: {
    Footer,
    Header
  },
  mounted(){
    //派发action
    console.log("我是App组件，请求一次商品列表分类数据categoryList")
    this.$store.dispatch("categoryList");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  overflow: hidden;
  padding-right:0 !important;
}
a,span{
  cursor: pointer;
}
</style>
