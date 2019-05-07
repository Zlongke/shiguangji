<template>
<div>
     <li>
      <van-nav-bar
      class="head"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />
       <van-search  class="sosuo" placeholder="请输入搜索关键词" v-model="value" />
     </li>
     <van-tabs v-model="active">
  <van-tab title="孕期"></van-tab>
  <van-tab title="0~1岁"></van-tab>
  <van-tab title="1~3岁"></van-tab>
  <van-tab title="3~6岁"></van-tab>
</van-tabs>

<van-row class="buju">
  <van-col  class="xb" span="8"></van-col>
</van-row>

<van-row type="flex" justify="space-around" >
  <div>
    <router-link to="">
    <van-col class="tu" style="background:gray" span="6"></van-col>
    <p>孕前准备</p>
    </router-link>
  </div>
  <div>
    <router-link to="">
    <van-col class="tu" style="background:gray" span="6"></van-col>
    <p>孕期检查</p>
    </router-link>
  </div>
  <div>
    <router-link to="">
    <van-col class="tu" style="background:gray" span="6"></van-col>
    <p>孕期生活</p>
    </router-link>
  </div>
  <div>
    <router-link to="">
    <van-col class="tu" style="background:gray" span="6"></van-col>
    <p>产后</p>
    </router-link>
  </div>
</van-row>

<footer class="foot">
<van-row class="ttu">
  <router-link to="">
  <van-col class="tu1" span="8">
    <p></p>
    <div class="kuai">
      <h4>我有一只猫</h4>
      <span>哈哈哈哈</span>
      </div>
  </van-col>
 </router-link>
  <van-col class="tu1" span="8"><p></p></van-col>
  <van-col class="tu1" span="8"><p></p></van-col>
</van-row>
</footer>



    </div>

</template>



<script>
export default {
name:'baike',
data () {
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
 .head{width:50px;}
 .sosuo{width:280px;}
 .biaoqian{margin-top:50px}
 li{width:380px;display:flex;}
 .buju{width:100%;height:150px;background: khaki;display:flex;justify-content:center;align-items:center}
 .xb{width:300px;height:140px;background: lawngreen;border-radius:10%}
 .tu{
width:60px;
height:60px;
border-radius:50%;
}
p{text-align: center;font-size:12px;color:#000}


.foot .ttu{
  background: white;
 display: flex;
 flex-direction:column

}
.foot .tu1{
  background: whitesmoke;
 margin-left:5px;
 margin-top:10px;
margin-bottom:10px;
height:100px;
width: 100%;
 display: flex;
}
.foot p{background: powderblue;
 width:80px;
 height:80px;
margin-top:10px;
border-radius: 50%;
}
.foot .kuai{width:300px;
background: whitesmoke;
height:100px;

}
.foot h4{margin-left:10px;
margin-top:10px }
.foot span{display:block;
margin-left:10px;}
.foot .head{width:100%;
height:40px;
background: yellowgreen;
display:flex}

.foot .to{
  line-height: 40px;
  font-size:30px;
  margin-left:10px
}
.foot .to1{
   line-height: 40px;
  font-size:25px;
  margin-right:10px
  }
  .foot .to2{
 line-height: 40px;
  }
.foot .head1{display: flex;
width:100%;
justify-content:space-between;}
</style>
