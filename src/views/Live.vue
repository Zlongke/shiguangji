<template>
  <div>
        <van-nav-bar
          title="关注"
          fixed	
          left-text="社区"
          right-text="优品"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />   
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name:'Live',
  data() {
    return {

    }
  },
  mounted() {
    this.$emit('totitle',this.title)
  },
 methods: {
   onClickLeft(){
        this.$router.push('/community')
   },
   onClickRight(){
        this.$router.push('/suproduct')
   }

 },

}
</script>

<style scoped>
 
</style>
