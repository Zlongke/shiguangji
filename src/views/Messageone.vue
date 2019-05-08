<template>
  <div>
    <van-nav-bar
      title="XXX"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
<van-popup  class="tanchu" v-model="show" position="bottom"
 close-on-click-overlay="true" :overlay="true">
<van-tabbar class="di" v-model="active">
      <div class="kuang">
     <span><van-icon name="volume"/></span>
     <input type="text" @click="taa()">
     <span><van-icon name="smile-o"/></span>
     <span><van-icon name="add"/></span>
      </div>
    </van-tabbar>






</van-popup>

    <van-tabbar class="di" v-model="active">
      <div class="kuang">
     <span><van-icon name="volume"/></span>
     <input type="text" @click="taa()">
     <span><van-icon name="smile-o"/></span>
     <span><van-icon name="add"/></span>
      </div>
    </van-tabbar>

  </div>
</template>
<script>
import 'vant/lib/icon/local.css';
export default {

  name:'Messageone',
  data() {
    return {
      show:false,

    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    tap(){
    this.show=!this.show;
    },
    taa(){
      this.show=!this.show;
    }
},

}
</script>
<style scoped>
.tanchu{

  height:200px}
  .di{
    height:60px;
    width:380px;
    text-align: center;
      background:grey;

    }
    input{width:230px;
    height:40px;
     background:grey;
     border:none;
 }
.tanchu .di{margin-bottom:145px}
span{font-size:30px;
line-height:60px}
</style>
