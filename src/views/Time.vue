<template>
  <div class="container">
    <div class="time-top">
      <p class="time-top-t">宝宝</p>
      <div class="time-top-c">
        <img class="headimg" :src="clist.photourl">
      </div>
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
      active: 0,
      clist: {}
    };
  },
  mounted() {
    this.$emit("totitle", this.title);
    var _this = this;
    axios({
      method: "get",
      url: "/ssm-1.0/headlist/queryoneall.do",
      params: { u_id: 1 }
    }).then(data => {
      console.log(data.data.data);
      _this.clist = data.data.data;
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
  height: 2.47rem;
  background: #f2f2f2 100%;
  position: relative;
  overflow: hidden;
}
.time-top-t {
  height: 0.3rem;
  width: 0.55rem;
  position: absolute;
  top: 0.06rem;
  right: 0.09rem;
  line-height: 0.3rem;
  text-align: center;
  background: #fff;
}
.time-top-c {
  height: 0.85rem;
  width: 0.85rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 0.51rem;
  left: 50%;
  margin-left: -0.425rem;
}
.time-top-c .headimg {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.time-top-b {
  height: 0.3rem;
  line-height: 0.3rem;
  margin-top: 1.66rem;
  display: flex;
  justify-content: space-around;
}
.time-top-b p {
  height: 0.3rem;
  width: 0.94rem;
  text-align: center;
  background: #fff;
}
.time-center {
  height: 0.5rem;
  font-size: 0.16rem;
}

.time-bottom {
  flex: 1;
  overflow: auto;
  display: flex;
}
.time-slider {
  margin-left: 0.12rem;
  margin-top: 0.12rem;
}
.time-list {
  margin-left: 0.13rem;
}
.time-l {
  height: 2.1rem;
  border-radius: 0.1rem;
  margin-top: 0.17rem;
  background: #f2f2f2;
  width: 90vw;
}
</style>

