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

    <router-link to="/jiuniang">
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL"/>
    </router-link>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL"/>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL"/>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL"/>
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
</style>
