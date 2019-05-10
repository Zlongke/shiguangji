<template>
  <div>
    <van-nav-bar
      title="问答"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-row class="zhuyi">
      <van-col class="t" span="8">
        <h4>宝宝晒太阳有哪些注意事项吗?</h4>
        <div class="beizhu">
          <p></p>
          <span>小糖果</span>
        </div>
        <section class="duanluo">
          轮播图这个案例写的有些模糊。Jqure的用法太多不熟练.轮播图这个案例写的有些模糊。Jqure的用法太多不熟练.轮播图这个案例写的有些模糊
          。Jqure的用法太多不熟练.轮
          播图这个案例写的有些模糊。Jqure的用法太多不熟练.
        </section>
      </van-col>
      <van-col class="t" span="8">
        <h4>一岁以下的宝宝不能喝水吗?</h4>
        <div class="beizhu">
          <p></p>
          <span>小糖果</span>
        </div>
        <section class="duanluo">
          轮播图这个案例写的有些模糊。Jqure的用法太多不熟练.轮播图这个案例写的有些模糊。Jqure的用法太多不熟练.轮播图这个案例写的有些模糊
          。Jqure的用法太多不熟练.轮
          播图这个案例写的有些模糊。Jqure的用法太多不熟练.
        </section>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: "wenda",
  data() {
    return {};
  },
  methods: {
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
.t {
  width: 360px;
  height: 250px;
  background: gainsboro;
  margin-top: 6px;
}
.zhuyi h4 {
  margin-left: 10px;
}
.beizhu {
  width: 200px;
  height: 40px;

  margin-left: 6px;
}
.beizhu p {
  width: 30px;
  height: 30px;
  background: palevioletred;
  border-radius: 50%;
}
.beizhu {
  display: flex;
  align-items: center;
}
.beizhu span {
  margin-left: 5px;
}
.t section {
  width: 340px;
  margin: 10px;
}
</style>
