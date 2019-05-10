<template>
  <div>
    <van-nav-bar
      title="营养"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <!-- <Head :name="title"/> -->
    <div class="container">
      <router-view></router-view>
    </div>

    <van-tabbar v-model="active" class="liebiao">
      <van-tabbar-item class="lb" to="/fenlei">阶段</van-tabbar-item>
      <van-tabbar-item class="lb" to="/feilei2">功效</van-tabbar-item>
      <van-tabbar-item class="lb" to>五谷</van-tabbar-item>
      <van-tabbar-item class="lb" to>肉蛋类</van-tabbar-item>
      <van-tabbar-item class="lb" to>海鲜类</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Head from "@/components/Head";
export default {
  name: "Home",
  components: {
    Head
  },
  data() {
    return {
      active: 0,

      title: "锦囊"
    };
  },
  methods: {
    tap(msg) {
      //console.log(msg)
      this.title = msg;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style scoped>
.container {
  /* margin-top: 46px; */
  margin-bottom: 50px;
}
.liebiao {
  width: 100px;
  height: 400px;
  display: flex;
  background: gainsboro;
  flex-direction: column;
  margin-top: 45px;
  position: fixed;
  top: 0px;
  left: 0px;
}
.lb {
  font-size: 16px;
  color: #000;
}
</style>
