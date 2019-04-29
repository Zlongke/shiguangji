<template>
  <div>
    <Head :name="title"/>
    <div class="container">
      <router-view @totitle="tap"></router-view>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="send-gift-o" to="/jinnang">锦囊</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/live">生活</van-tabbar-item>
      <van-tabbar-item icon="clock-o" to="/time">时光记</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Head from '@/components/Head'
export default {
  name:'Home',
  components:{
    Head
  },
  data() {
    return {
      active:0,
      title:'锦囊'
    }
  },
  methods: {
    tap(msg){
      //console.log(msg)
      this.title = msg;
    }
  },
}
</script>

<style scoped>
  .container{
    margin-top: 46px;
    margin-bottom: 50px;
  }
</style>
