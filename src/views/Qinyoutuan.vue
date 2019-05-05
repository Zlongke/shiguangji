<template>
  <div>
    <Head :name="title"/>
    <div class="container">
      <h1>亲友团</h1>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
export default {
  components: {
    Head
  },
  data() {
    return {
      title: "亲友团"
    };
  }
};
</script>

<style scoped>
.container {
  margin-top: 46px;
}
</style>
