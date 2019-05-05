<template>
  <div>
    <Head :name="title"/>
    <div class="container">
      <h1>成就</h1>
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
      title: "成就"
    };
  }
};
</script>

<style scoped>
.container {
  margin-top: 46px;
}
</style>
