<template>
	<div id="profile">
    <nav-bar class="profile-nav">
      <template v-slot:center>
        <div>我的</div>
      </template>
    </nav-bar>
	  
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
	export default{
		name:'Profile',
    components:{
      NavBar
    }
	}
</script>

<style>
  #profile {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  
  .profile-nav {
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
