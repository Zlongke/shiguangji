<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text
      right-text="+"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="container">
      <h1>云相册</h1>
      <van-row type="flex" justify="space-around" class="flex-wrap">
        <van-col span="11">
          <!-- <img :src="{{item}}" @click="yl" v-for="item in imglist"> -->
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Router from "vue-router";
import { ImagePreview } from "vant";
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "时光记"
    };
  },
  computed: {
    ...mapState(["img"])
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/daoruxiangce");
    }
    /* yl() {
      ImagePreview([this.img]);
    } */
  }
};
</script>

<style scoped>
.container {
  margin-top: 46px;
}
.flex-wrap {
  flex-wrap: wrap;
}
img {
  width: 45vw;
  height: 45vw;
}
</style>
