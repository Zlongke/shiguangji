<template>
    <div>
   <van-nav-bar 
    :title="name" 
    fixed
    left-text="" 
    left-arrow
      @click-left="onClickLeft"
    >
        <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>

export default {
    name:'AttenHead',
     props:['name'],
    data() {
        return {
         title:'社区'
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
   
}
</script>

<style scope="">
</style>
