<template>
  <div class="top">
    <div class="left">时光记</div>

        <van-button round type="danger" class="center" to="/login">登录</van-button>


        <van-button round type="danger" class="right" to="/regist">注册</van-button>



  </div>
</template>

<script>
export default {
  name:'LoginTop',

  data() {
    return {
      bgColor:'#FFB64B'
    }
  },
}
</script>

<style scoped>
  .top{
    height: 46px;
    width:100vw;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
  }
  .left{
    width: 100px;
    height: 46px;
    background: #E8E7E7 100%;
    border-radius: 30px;
    text-align: center;
    line-height: 46px;
    color: #fff;
  }
  .center{
    width: 100px;
   background:#E8E7E7 100%;
   border: none;
  }
  .right{
    width: 100px;
     background:#FFB64B;
    border: none;
  }
  .van-button-active{
    background:#FFB64B;
  }
</style>
