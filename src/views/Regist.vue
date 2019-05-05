<template>
  <div>
    <van-cell-group class="pd-top">
      <van-field v-model="phonenum" left-icon="phone-o" clearable label="电话" size="large"/>
      <van-field v-model="password" type="password" label="密码" left-icon="bag-o" size="large"/>
      <van-field v-model="email" left-icon="envelop-o" clearable label="邮箱" size="large"/>

      <van-cell-group>
        <van-field v-model="yzm" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="primary" @click="tap1()">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </van-cell-group>

    <van-button class="bottom" type="warning" size="large" @click="tap2()">注册</van-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Regist",
  data() {
    return {
      password: "",
      email: "",
      phonenum: "",
      yzm: ""
    };
  },
  methods: {
    tap1() {
      var _this = this;
      axios({
        url: "http://localhost:3000/regist",
        params: { id: "0", phonenum: _this.phonenum }
      }).then(data => {
        console.log(data.data);
      });
    },
    tap2() {
      var _this = this;
      axios({
        url: "http://localhost:3000/regist",
        params: {
          id: "1",
          phonenum: _this.phonenum,
          password: _this.password,
          yzm: _this.yzm
        }
      }).then(data => {
        console.log(data.data);
      });
    }
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
