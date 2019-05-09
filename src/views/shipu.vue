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

<van-swipe :autoplay="3000" :height="150">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img  :src="image.banner_img_url" />
  </van-swipe-item>
</van-swipe>

<van-row type="flex" justify="space-around" >
  <div>
    <router-link to="/eat">
    <van-col class="tu" style="background:gray" span="6"></van-col>
    <section>能不能吃</section>
    </router-link>
  </div>
  <div>
    <router-link to="/yyshipu2">
    <van-col class="tu" style="background:gray" span="6"></van-col>
    <section>营养食谱</section>
    </router-link>
  </div>
  <div>
    <router-link to="/wdshoucang">
    <van-col class="tu" style="background:gray" span="6"></van-col>
    <section>我的收藏</section>
    </router-link>
  </div>
</van-row>

<van-row class="ttu">

  <van-col class="tu1" span="8">
    <p></p>
    <div class="kuai">
      <h4>我有一只猫</h4>
      <span>哈哈哈哈</span>
      </div>
  </van-col>

  <van-col class="tu1" span="8"><p></p></van-col>
  <van-col class="tu1" span="8"><p></p></van-col>
</van-row>

</div>
</template>

<script>

import axios from 'axios'
export default {
  name:'shipu',
  data() {
    return {
images:[]
    }
},
 methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast('按钮');
    }
  },
   mounted() {
    var _this=this;
    axios({
      url:' http://jx.xuzhixiang.top/ap/api/bannerlist.php',
      params:{uid:2006}
    }).then((data)=>{
       //console.log(data.data.data)
       _this.images=data.data.data
    })
  },
}
</script>
<style scoped="">
img{width:380px;height:150px}
.tu{
width:80px;
height:80px;
border-radius:50%;
}
section{text-align: center}



.ttu{
  background: white;
 display: flex;
 flex-direction:column

}
.tu1{
  background: whitesmoke;
 margin-left:5px;
 margin-top:10px;
margin-bottom:10px;
height:100px;
width: 100%;
 display: flex;
}
p{background: powderblue;
 width:80px;
 height:80px;
margin-top:10px;

}
.kuai{width:300px;
background: whitesmoke;
height:100px;

}
h4{margin-left:10px;
margin-top:10px }
span{display:block;
margin-left:10px;}
</style>
