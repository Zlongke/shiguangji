<template>
  <div>
    <h1>{{username}}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Jinnang",
  data() {
    return {
      title: "锦囊"
    };
  },
  computed: {
    ...mapState(["username"])
  },
  mounted() {
    this.$emit("totitle", this.title);
  }
};
</script>

<style scoped>
</style>
