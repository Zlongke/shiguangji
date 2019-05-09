<template>
  <div>
    <van-cell-group class="pd-top">
      <van-field v-model="phonenum" left-icon="phone-o" clearable label="电话" size="large"/>
      <van-field v-model="password" type="password" label="密码" left-icon="bag-o" size="large"/>
      <van-field v-model="email" left-icon="envelop-o" clearable label="邮箱" size="large"/>

      <van-cell-group>
        <van-field v-model="yzm" center clearable label="短信验证码" placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="primary" @click="tap2()">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </van-cell-group>

    <van-button class="bottom" type="warning" size="large" @click="tap1()">注册</van-button>

    <van-popup class="babylist" v-model="show">
      <h3>请完善宝宝信息</h3>
      <van-field v-model="babyname" label="宝宝姓名"/>
      <van-field v-model="babyxuexing" label="宝宝血型"/>
      <van-field v-model="babyage" label="宝宝年龄"/>
      <van-button class="m-t" @click="addUserList" type="warning">提交</van-button>
    </van-popup>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";
import qs from "qs";
export default {
  name: "Regist",
  data() {
    return {
      password: "",
      email: "",
      phonenum: "",
      yzm: "",
      show: false,
      babyname: "",
      babyxuexing: "",
      babyage: "",
      userList: {}
    };
  },
  methods: {
    tap1() {
      var _this = this;
      axios({
        method: "post",
        //headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "/ssm-1.0/user/add.do",
        data: qs.stringify({ name: _this.phonenum, password: _this.password })
      }).then(data => {
        console.log(data.data.code);
        if (data.data.code == 1000) {
          _this.show = !_this.show;
        }
      });
    },
    addUserList() {
      var _this = this;
      _this.userList.babyname = _this.babyname;
      _this.userList.babyxuexing = _this.babyxuexing;
      _this.userList.babyage = _this.babyage;
      //console.log(_this.userList);
      axios({
        url: "/ssm-1.0/my/addMsg.do",
        params: { userList: _this.userList }
      }).then(data => {
        console.log(data.data);
        if (data.data.code == 1000) {
          _this.show = !_this.show;
          router.push("/login");
        }
      });
    },
    tap2() {
      /* var _this = this;
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
      }); */
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
.babylist {
  width: 70vw;
  height: 60vh;
  text-align: center;
}
.babylist h3 {
  text-align: center;
  line-height: 10vh;
}
.babylist .m-t {
  margin-top: 6vh;
}
</style>
