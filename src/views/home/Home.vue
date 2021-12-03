<template>
  <div id="home"  >
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>


</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import {getHomeMultidata} from 'network/home'
  import HomeSwiper  from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
	export default{
		name:"Home",
    components:{
      RecommendView,
      NavBar,
      HomeSwiper
    },
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners=res.data.data.banner.list
        this.recommends=res.data.data.recommend.list

      })
    },
    methods:{

    }
	}
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>
