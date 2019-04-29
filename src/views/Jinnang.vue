<template>
  <div>
    <h1>锦囊</h1>
  </div>
</template>

<script>
export default {
  name:'Jinnang',
  data() {
    return {
      title:'锦囊'
    }
  },
  mounted() {
    this.$emit('totitle',this.title)
  },
}
</script>

<style scoped>

</style>
