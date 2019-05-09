<template>
  <div>
    <van-nav-bar
      title="营养食谱"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

      <van-row class="ttu">
          <div class="biaoti">

           <van-col class="tu1" span="8" @click="app()">
             <router-link to="/lei1" tag="div"><h4>阶段</h4></router-link>
           </van-col>
          <van-col class="tu1" span="8">
             <router-link to="/lei2" tag="div"><h4>功效</h4></router-link>
          </van-col>
          <!-- <van-col class="tu1" span="8"><h4>五谷</h4></van-col>
          <van-col class="tu1" span="8"><h4>肉蛋类</h4></van-col>
          <van-col class="tu1" span="8"><h4>海鲜类</h4></van-col>
          <van-col class="tu1" span="8"><h4>菌类</h4></van-col>
          <van-col class="tu1" span="8"><h4>水果类</h4></van-col>
          <van-col class="tu1" span="8"><h4>豆制类</h4></van-col>
          <van-col class="tu1" span="8"><h4>坚果类</h4></van-col> -->
          </div>
          <div class="flq">
            <ul class="f1">
              <h3>孕期</h3>
              <li><p></p><span>孕早期</span></li>
              <li><p></p><span>孕中期</span></li>
              <li><p></p><span>孕晚期</span></li>
            </ul>
          </div>
        </van-row>
      <router-view></router-view>

    <!-- <van-tree-select class="liebiao"
       :height="600"
      :items="items"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @navclick="onNavClick"
      @itemclick="onItemClick"
    /> -->
  </div>
</template>

<script>
export default {
  name: "yyshipu",

  data() {
    return {

     };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    onNavClick(index) {
      console.log(this);
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    },
    app(){
      this.show=!this.show;
    }
  }
};
</script>
<style scoped="">
.liebiao{background:gray;}
.ttu{
  background: pink;
 display: flex;
 flex-direction:row;
height:900px;
width:100%;

}
.tu1{
  background: whitesmoke;
 margin-left:5px;
 margin-top:10px;

height:40px;
width: 100px;
 display: flex;
font-size:16px;

}

.kuai{width:300px;
background: whitesmoke;
height:100px;

}
h4{margin-left:10px;
margin-top:10px }

.flq{width:300px;height:300px;background:yellow;}
.biaoti{height:500px;width:110px;background: turquoise;}
.f1{width:300px;height:150px;border-bottom:1px solid #000 }
.f1 li{display: flex;flex-direction:column;float: left;}
.f1 li p{width:80px;height:80px;background: tomato;margin-left:15px;float: left;}
.f1 li span{width:80px;height:14px;margin-left:15px;text-align: center;display: block;background: chartreuse}
</style>
