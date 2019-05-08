<template>
  <div>
    <van-cell-group class="pd-top">
      <van-field v-model="username" left-icon="contact" clearable label="用户名" size="large"/>

      <van-field v-model="password" type="password" label="密码" left-icon="bag-o" size="large"/>
    </van-cell-group>

    <van-button class="bottom" type="primary" size="large" @click="login({username,password})">登录</van-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },

  methods: {
    ...mapActions(["login"])
  }
};
</script>
<style scoped>
.pd-top {
  margin-top: 40vh;
}
.bottom {
  position: fixed;
  bottom: 34px;
  background: #ffb64b 100%;
  color: #101010 100%;
  height: 65px;
}
</style>
