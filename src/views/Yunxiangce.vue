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
      <van-row type="flex" justify="space-around" class="flex-wrap">
        <van-col span="11">
          <img class="showimg" :src="img" @click="imgshow">
          <van-popup class="show-model" v-model="show">
            <div class="show-container">
              <div class="show-top">
                <img :src="img">
              </div>
              <div class="show-bottom">
                <P class="show-p1">萌小宝</P>
                <p>2019.05.07</p>
                <p class="show-p3">
                  宝宝第一次见到雪的样子，真是个没见过世面的
                  宝宝！！！
                </p>
              </div>
            </div>
          </van-popup>
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
      title: "时光记",
      show: false
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
    },
    /* yl() {
      ImagePreview([this.img]);
    } */
    imgshow() {
      this.show = !this.show;
    }
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
.showimg {
  width: 45vw;
  height: 45vw;
}
.show-model {
  border-radius: 5vw;
}
.show-container {
  height: 63vh;
  width: 80vw;
  padding: 3vh 5vw;
  background: #ccc;
}
.show-top {
  height: 40vh;
  border-bottom: 2px solid #ccc;
}
.show-top img {
  height: 100%;
  width: 100%;
}
.show-p1 {
  margin-top: 1vh;
}
.show-p3 {
  margin-top: 5vh;
}
</style>
