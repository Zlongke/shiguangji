<template>
  <div id="app">
    <!--  <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  font-size: 0.14rem;
}

h2,
h3,
figure,
figcaption,
img {
  margin: 0;
  padding: 0;
  font-family: Arial;
}

li {
  list-style: none;
}
img {
  border: none;
}
</style>
