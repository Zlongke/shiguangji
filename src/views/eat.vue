<template>
  <div>
    <van-nav-bar
      title="能不能吃"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-search v-model="value" placeholder="输入食品名称搜索" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <div class="nav">
      <router-link to="/eatone">
        <dl class="yi">
          <dt></dt>
          <dd>主食</dd>
        </dl>
      </router-link>

      <dl class="er">
        <dt></dt>
        <dd>肉蛋类</dd>
      </dl>
      <dl class="san">
        <dt></dt>
        <dd>水果</dd>
      </dl>
      <dl class="si">
        <dt></dt>
        <dd>零食</dd>
      </dl>

      <dl class="wu">
        <dt></dt>
        <dd>豆类</dd>
      </dl>
      <dl class="liu">
        <dt></dt>
        <dd>菌类</dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: "eat",
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
.nav {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.nav dl {
  margin: 0 auto;
  height: 90px;
  width: 110px;
  border: 1px solid gray;
}
dl:nth-child(1) {
  border-left: 0px;
  border-top: 0px;
}
dl:nth-child(2) {
  border-top: 0px;
}
dl:nth-child(3) {
  border-right: 0px;
  border-top: 0px;
}
dl:nth-child(4) {
  border-left: 0px;
  border-bottom: 0px;
}
dl:nth-child(5) {
  border-bottom: 0px;
}
dl:nth-child(6) {
  border-right: 0px;
  border-bottom: 0px;
}
.nav dl dt {
  height: 50px;
  width: 50px;
  background: gray;
  border-radius: 50%;
  margin-left: 30px;
}
.nav dl dd {
  width: 50px;
  height: 20px;
  color: black;
  font-size: 12px;
  margin-top: 5px;
  margin-left: 30px;
  text-align: center;
}
</style>
