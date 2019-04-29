<template>
  <div>
    <h1>消息</h1>
  </div>
</template>

<script>
export default {
  name:'Message',
  data() {
    return {
      title:'消息'
    }
  },
  mounted() {
    this.$emit('totitle',this.title)
  },

}
</script>

<style scoped>

</style>
