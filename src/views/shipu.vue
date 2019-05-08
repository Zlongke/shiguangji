<template>
<div id="shipu">
  <van-nav-bar
  title="食谱"
  left-text=""
  right-text=""
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

<van-swipe :autoplay="3000" indicator-color="#fff" height="150">

  <van-swipe-item style="background:red">1</van-swipe-item>

  <van-swipe-item style="background:yellow">2</van-swipe-item>
  <van-swipe-item style="background:green">3</van-swipe-item>
  <van-swipe-item style="background:blue">4</van-swipe-item>
</van-swipe>

<van-row type="flex" justify="space-around" >
  <div>
    <router-link to="/eat">
    <van-col class="tu" style="background:gray" span="6"></van-col>
    <p>能不能吃</p>
    </router-link>
  </div>
  <div>
    <router-link to="/yyshipu2">
    <van-col class="tu" style="background:gray" span="6"></van-col>
    <p>营养食谱</p>
    </router-link>
  </div>
  <div>
    <router-link to="/wdshoucang">
    <van-col class="tu" style="background:gray" span="6"></van-col>
    <p>我的收藏</p>
    </router-link>
  </div>
</van-row>

<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  :thumb="imageURL"
/>
<van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  :thumb="imageURL"
/>

</div>
</template>

<script>
export default {
  name:'shipu',
  data() {
    return {

    }
},
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

.tu{
width:80px;
height:80px;
border-radius:50%;
}
p{text-align: center}
</style>
