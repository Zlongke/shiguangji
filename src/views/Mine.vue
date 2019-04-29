<template>
  <div>
    <h1>我的</h1>
  </div>
</template>

<script>
export default {
  name:'Mine',
  data() {
    return {
      title:'我的'
    }
  },
  mounted() {
    this.$emit('totitle',this.title)
  },

}
</script>

<style scoped>

</style>
