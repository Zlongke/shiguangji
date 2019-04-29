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
      <van-field
        v-model="email"
        left-icon='envelop-o'
        clearable
        label="邮箱"
        size='large'
      />
      <van-field
        v-model="phone"
        left-icon='phone-o'
        clearable
        label="电话"
        size='large'
      />

    </van-cell-group>

      <van-button class="bottom" type="warning" size="large" >注册</van-button>



  </div>
</template>

<script>
export default {
  name:'Regist',
  data() {
    return {
      username:'',
      password:'',
      email:'',
      phone:'',
      title:'注册'
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
   position: fixed;
  bottom: 34px;
  background: #FFB64B 100%;
  color: #101010 100%;
  height: 65px;
  }
</style>
