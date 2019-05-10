<template>
  <div id="contain">
    <van-swipe :autoplay="3000" :height="300">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.banner_img_url">
      </van-swipe-item>
    </van-swipe>

    <div class="coupon">
      <P>优惠劵</P>
    </div>
    <div id="snav">
      <figure @click="clean()">
        <span class="icon">
          <img :src="image.photourl">
        </span>
        <figcaption>清洁</figcaption>
      </figure>
      <figure>
        <span class="icon">
          <img :src="image.photourl">
        </span>
        <figcaption>喂养</figcaption>
      </figure>
      <figure>
        <span class="icon">
          <img :src="image.photourl">
        </span>
        <figcaption>童装</figcaption>
      </figure>
      <figure>
        <span class="icon">
          <img :src="image.photourl">
        </span>
        <figcaption>更多</figcaption>
      </figure>
    </div>
    <div class="baby">
      <p>宝宝必备</p>
      <p>all</p>
    </div>
    <article id="list">
      <figure v-for="(item,index) in list" :key="index">
        <span @click="detail(item.pid)" class="icon">
          <img :src="item.pimg">
        </span>
        <figcaption>
          <p>笛莎2018春秋</p>
          <p>￥{{item.pprice}}</p>
        </figcaption>
      </figure>
    </article>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Suproduct",
  data() {
    return {
      title: "优品",
      list: "",
      images: "",
      image: ""
    };
  },
  methods: {
    detail(id) {
      //    console.log(id)
      this.$router.push({ name: "Detail", query: { id: id } });
    },
    clean() {
      this.$router.push("/clean");
    }
  },
  mounted() {
    this.$emit("toTitle", this.title);
    var _this = this;

    axios({
      url: "http://jx.xuzhixiang.top/ap/api/bannerlist.php",
      params: { uid: 5484 }
    }).then(data => {
      // console.log(data.data.data)
      _this.images = data.data.data;
    });

    axios({
      method: "get",
      type: "json",
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 5484 }
    }).then(data => {
      console.log(data.data);
      _this.list = data.data.data;
    });

    axios({
      method: "get",
      url: "/ssm-1.0//headlist/queryoneall.do"
      //    params:{u_id:1}
    }).then(data => {
      console.log(data.data.data);
      _this.image = data.data.data;
    });
  }
};
</script>

<style scoped>
#contain {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 0.1rem;
  font-size: 0.12rem;
}
#list p {
  font-size: 0.12rem;
}
.banner {
  font-size: 0.14rem;
  margin-top: 0.46rem;
  width: 3.48rem;
  height: 1.5rem;
  background: #a6a4a4;
  border-radius: 0.12rem;
}
.coupon {
  font-size: 0.12rem;
  width: 3.48rem;
  margin: 0.05rem 0;
  height: 0.5rem;
  background: #d9d9d9;
  border-radius: 0.12rem;
}

#contain #snav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#contain #snav figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
#contain #snav figure .icon img {
  height: 0.44rem;
  width: 0.44rem;
  font-size: 0.15rem;
  border-radius: 0.2rem;
  background: #d9d9d9;
}
#contain #snav figcaption {
  margin: 0.1rem 0px;
  width: 0.65rem;
  height: 0.24rem;
  background: #f8f8f8;
  line-height: 0.24rem;
  text-align: center;
  font-size: 0.12rem;
  color: #a6a4a4;
}
#contain .baby {
  display: flex;
  margin-top: 0.3rem;
  justify-content: space-between;
  font-size: 0.12rem;
  color: #777676;
}
article {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
article figure {
  margin: 0.1rem 0.05rem;
  height: 1.15rem;
  width: 0.88rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
}
article figure span img {
  width: 0.86rem;
  height: 0.86rem;
  border: 1px solid #bbbbbb;
}
article figure figcaption {
  height: 0.16rem;
  font-size: 0.12rem;
  color: #101010;
  line-height: 0.17rem;
  text-align: center;
}
</style>
