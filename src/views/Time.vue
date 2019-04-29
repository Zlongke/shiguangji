<template>
  <div>
    <h1>时光记</h1>
  </div>
</template>

<script>
export default {
  name:'Time',
  data() {
    return {
      title:'时光记'
    }
  },
  mounted() {
    this.$emit('totitle',this.title)
  },

}
</script>

<style scoped>

</style>
