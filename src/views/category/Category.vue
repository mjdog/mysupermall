<template>
	<div id="category">
    <nav-bar class="category-nav">
      <template v-slot:center>
        <div>分类</div>
      </template>
    </nav-bar>
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
	export default{
		name:"Category",
    components:{
      NavBar
    }
	}
</script>

<style>

  #category {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .category-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
</style>
