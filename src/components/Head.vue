<template>
  <div>
    <van-nav-bar
      :title="name"
      left-text="返回"
      right-text="..."
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

  </div>
</template>

<script>
export default {
  name: 'Head',
  props:['name'],
  data () {
    return {
      title: '首页'
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
