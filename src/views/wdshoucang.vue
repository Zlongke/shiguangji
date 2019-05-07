<template>
  <div>
   <van-nav-bar
  title="我的收藏"
  left-text=""
  right-text=""
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<van-tabs @click="onClick">
  <van-tab title="食谱"></van-tab>
  <van-tab title="营养计划"></van-tab>
</van-tabs>
<van-card
  price="2.00"
  desc="描述信息"
  title="商品标题"
  :thumb="imageURL"
/>
<van-card
  price="2.00"
  desc="描述信息"
  title="商品标题"
  :thumb="imageURL"
/>

  </div>
</template>
<script>
export default {
 name:'wdshoucang',
   methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast('按钮');
    }
  }
   }

</script>
<style scoped="">

</style>
