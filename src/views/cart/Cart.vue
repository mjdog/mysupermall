<template>
	<div id="cart">
	  <nav-bar class="cart-nav">
      <template v-slot:center>
        <div>购物车</div>
      </template>
    </nav-bar>
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
	export default{
		name:'Cart',
    components:{
      NavBar
    }
	}
</script>

<style>
  
  
  #cart {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  
  .cart-nav {
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
