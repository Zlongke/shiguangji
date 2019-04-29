<template>
  <div>
    <h1>生活</h1>
  </div>
</template>

<script>
export default {
  name:'Live',
  data() {
    return {
      title:'生活'
    }
  },
  mounted() {
    this.$emit('totitle',this.title)
  },

}
</script>

<style scoped>

</style>
