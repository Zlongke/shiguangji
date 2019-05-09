<template>
  <div class="container">
    <div class="time-top">
      <p class="time-top-t">宝宝</p>
      <div class="time-top-c"></div>
      <div class="time-top-b">
        <p class="time-top-b-l">ABC</p>
        <p class="time-top-b-r">1个月2天</p>
      </div>
    </div>
    <div class="time-center">
      <van-tabbar v-model="active" active-color="#cecece" :fixed="false">
        <van-tabbar-item to="/yunxiangce">云相册</van-tabbar-item>
        <van-tabbar-item to="/chengzhangjilu">成长记录</van-tabbar-item>
        <van-tabbar-item to="/chengjiu">成就</van-tabbar-item>
        <van-tabbar-item to="qinyoutuan">亲友团</van-tabbar-item>
      </van-tabbar>
    </div>

    <div class="time-bottom">
      <div class="time-slider" :style="{ height: '100%' }">
        <van-slider v-model="value" vertical/>
      </div>
      <div class="time-list">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell class="time-l" v-for="item in list" :key="item" :title="item"/>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Time",
  data() {
    return {
      title: "时光记",
      value: 0,
      list: [],
      loading: false,
      finished: false,
      active: 0
    };
  },
  mounted() {
    this.$emit("totitle", this.title);
    var _this = this;
    axios({
      url: "/ssm-1.0/my/head.do",
      params: { id: 1 }
    }).then(data => {
      console.log(data.data);
    });
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.time-top {
  height: 247px;
  background: #f2f2f2 100%;
  position: relative;
  overflow: hidden;
}
.time-top-t {
  height: 30px;
  width: 55px;
  position: absolute;
  top: 6px;
  right: 9px;
  line-height: 30px;
  text-align: center;
  background: #fff;
}
.time-top-c {
  height: 85px;
  width: 85px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 51px;
  left: 50%;
  margin-left: -42.5px;
}
.time-top-b {
  height: 30px;
  line-height: 30px;
  margin-top: 166px;
  display: flex;
  justify-content: space-around;
}
.time-top-b p {
  height: 30px;
  width: 94px;
  text-align: center;
  background: #fff;
}
.time-center {
  height: 50px;
  font-size: 16px;
}

.time-bottom {
  flex: 1;
  overflow: auto;
  display: flex;
}
.time-slider {
  margin-left: 12px;
  margin-top: 12px;
}
.time-list {
  margin-left: 13px;
}
.time-l {
  height: 210px;
  border-radius: 10px;
  margin-top: 17px;
  background: #f2f2f2;
  width: 90vw;
}
</style>

