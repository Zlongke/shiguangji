<template>
  <div class="top">
    <div class="left">时光记</div>

    <van-button round type="danger" class="center" to="/login" :style="{'background':bgc}">登录</van-button>

    <van-button round type="danger" class="right" to="/regist" :style="{'background':bgc1}">注册</van-button>
  </div>
</template>

<script>
export default {
  name: "LoginTop",

  data() {
    return {
      bgc: "#FFB64B",
      bgc1: "#e8e7e7"
    };
  },
  watch: {
    "$route.path": function(a, b) {
      if (a === "/login") {
        this.bgc = "#FFB64B";
        this.bgc1 = "#e8e7e7";
      }
      if (a === "/regist") {
        this.bgc = "#e8e7e7";
        this.bgc1 = "#FFB64B";
      }
    }
  }
};
</script>

<style scoped>
.top {
  height: 46px;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 100px;
  height: 46px;
  background: #e8e7e7 100%;
  border-radius: 30px;
  text-align: center;
  line-height: 46px;
  color: #fff;
}
.center {
  width: 100px;
  background: #e8e7e7;
  border: none;
}
.right {
  width: 100px;
  background: #e8e7e7;
  border: none;
}
.van-button-active {
  background: #ffb64b;
}
</style>
