<template>
  <div>
    <van-cell-group class="pd-top">
      <van-field
        v-model="username"
        left-icon='contact'
        clearable
        label="用户名"
        size='large'
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        left-icon='bag-o'
        size='large'
      />


    </van-cell-group>
    <div class="bottom">
      <van-button type="warning" size="large" to="/Regist">注册</van-button>
      <van-button type="primary" size="large" >登录</van-button>
    </div>

  </div>
</template>

<script>
export default {
  name:'Login',
  data() {
    return {
      username:'',
      password:'',
      title:'登录'
    }
  },
  mounted() {
    this.$emit('toParent',this.title)
  },

}
</script>
<style scoped>
  .pd-top{
    margin-top: 40vh;
  }
  .bottom{
   margin-top: 10vh;
  }
</style>
