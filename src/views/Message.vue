
<template>
  <div>
      <van-row class="head">
  <van-col class="head1" span="8">
    <li class="to"><van-icon name="friends"/></li>
    <li class="to2">消息</li>
    <li class="to1"><van-icon name="add"/></li>
    </van-col>
</van-row>
    <!-- <van-nav-bar

  title="消息"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/> -->
<van-row class="ttu">
  <router-link to="/Messageone">
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
  </div>
</template>

<script>
import 'vant/lib/icon/local.css';
export default {
  name:'Message',
  data() {
    return {
      title:'消息'
    }
  }, methods: {
    onClickLeft() {
       this.$router.go(-1);
    },
    onClickRight() {
      Toast('按钮');
    }
  },
  mounted() {
    this.$emit('totitle',this.title)
  },

}
</script>

<style scoped>
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
border-radius: 50%;
}
.kuai{width:300px;
background: whitesmoke;
height:100px;

}
h4{margin-left:10px;
margin-top:10px }
span{display:block;
margin-left:10px;}
.head{width:100%;
height:40px;
background: yellowgreen;
display:flex}

.to{
  line-height: 40px;
  font-size:30px;
  margin-left:10px
}
.to1{
   line-height: 40px;
  font-size:25px;
  margin-right:10px
  }
  .to2{
 line-height: 40px;
  }
.head1{display: flex;
width:100%;
justify-content:space-between;}
</style>
