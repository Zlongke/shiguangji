<template>
  <div id="app">
   <!--  <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  width:100vw;
  height: 100vh;

}
p,h2,h3,figure,figcaption,img{
  margin:0;
  padding: 0;
  font-family: Arial;
}
</style>
