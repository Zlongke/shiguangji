<template>
  <div>
    <p>关注你感兴趣的人</p>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="nav">
        <figure v-for="(item,index) in list" :key="index">
          <span>
            <img :src="photo.photourl">
            <van-rate
              icon="passed"
              :size="10"
              void-icon="passed"
              v-model="value"
              :count="1"
              class="icon"
            />
          </span>
          <figcaption>{{item.name}}</figcaption>
        </figure>
      </div>
    </van-pull-refresh>
    <van-button class="btn" round type="danger" to="/afterattention">一键关注</van-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Attention",
  data() {
    return {
      list: [],
      photo: "",
      isLoading: false,
      value: 0
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  mounted() {
    var _this = this;
    axios({
      method: "get",
      url: "/ssm-1.0/atten/findall.do",
      params: { u_id: 1 }
    }).then(data => {
      // console.log(data.data.data)
      _this.list = data.data.data;
    });

    axios({
      method: "get",
      url: "/ssm-1.0/headlist/queryoneall.do",
      params: { u_id: 1 }
    }).then(data => {
      console.log(data.data.data);
      _this.photo = data.data.data;
    });
  }
};
</script>

<style scoped>
p {
  margin-top: 0.46rem;
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.1rem;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 0.12rem;
}
figure {
  width: 1.2rem;
  height: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
figure span {
  position: relative;
  height: 0.74rem;
  height: 0.74rem;
  border-radius: 50%;
  background: #cccccc;
}
figure .icon {
  position: absolute;
  top: 0.05rem;
  right: 0.02rem;
}
figure img {
  width: 0.74rem;
  height: 0.74rem;
  border-radius: 50%;
  background: #cccccc;
}
figure figcaption {
  width: 0.65rem;
  height: 0.24rem;
  text-align: center;
  line-height: 0.17rem;
  margin-top: 0.1rem;
}
.btn {
  position: fixed;
  width: 2rem;
  height: 0.3rem;
  line-height: 0.3rem;
  background-color: rgb(215, 213, 213);
  border: 1px solid #cccccc;
  bottom: 0.6rem;
  left: 1rem;
}
</style>
