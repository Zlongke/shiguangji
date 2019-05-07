<template>
<div>
   <van-nav-bar
  title="酒酿"
  left-text=""
  right-text=""
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<div class="main"></div>
<van-card

  s="djfbniskvmosdvmldmspkvmlsdcs"
  desc="djfbniskvmosdvmldmspkvmlsdcs"
  title="djfbniskvmosdvmldmspkvmlsdcs"
  :thumb="imageURL"
/>

<van-card

  desc="描述信息djfbniskvmosdvmldmspkvmlsdcs"
  title="商品标题djfbniskvmosdvmldmspkvmlsdcs"
/>
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
name:'eat',
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
.main{
  width:100%;
  height:200px;
  background: gray
  }
</style>
