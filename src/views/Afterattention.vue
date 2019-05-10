<template>
  <div class="container">
    <div class="nav clearfix" v-for="(item,i) in list" :key="i">
      <figure>
        <span>
          <img :src="photo.photourl">
        </span>
        <figcaption>
          <div>
            <span>{{item.name}}</span>
            <span>3秒前 宝宝2岁</span>
          </div>
        </figcaption>
      </figure>
      <p>{{item.neirong}}</p>
      <div>
        <textarea rows="6" cols="40"></textarea>
      </div>
      <div id="share">
        <van-popup class="mengc" v-model="show" :overlay="false">
          分享到：
          <share :config="config"></share>
        </van-popup>
        <span @click="tap()">分享</span>
        <span>评论</span>
        <span>
          <van-rate icon="like" void-icon="like-o" v-model="value" :count="1"/>
          {{item.like}}
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Afterattention",
  data() {
    return {
      list: [],
      photo: "",
      value: 1,
      show: false,
      config: {
        url: "http://www.baidu.com", // 网址，默认使用 window.location.href
        source: "", // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title: "hello", // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        description: "hi", // 描述, 默认读取head标签<meta name="description" content="PHP弱类型的实现原理分析" />
        image: "", // 图片, 默认取网页中第一个img标签
        sites: ["qzone", "qq", "weibo", "wechat", "douban"], // 启用的站点
        disabled: [], // 禁用的站点
        wechatQrcodeTitle: "微信扫一扫：分享", // 微信二维码提示文字
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>"
      }
    };
  },
  methods: {
    tap() {
      this.show = !this.show;
    }
  },
  mounted() {
    var _this = this;
    axios({
      method: "get",
      url: "/ssm-1.0/atten/ifatten.do",
      params: { u_id: 1 }
    }).then(data => {
      console.log(data.data.data);
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
.mengc {
  width: 3.15rem;
  height: 1rem;
  font-size: 0.16rem;
  line-height: 0.5rem;
  background: papayawhip;
}
.nav:nth-of-type(1) {
  margin-top: 0.46rem;
}
.nav {
  height: 4.1rem;
  padding: 0px 0.1rem;
  background-color: rgb(234, 234, 234);
  text-align: center;
  border: 0.01rem solid rgb(255, 255, 255);
  margin-bottom: 0.1rem;
}
p {
  color: rgb(94, 94, 94);
  font-size: 0.14rem;
  width: 3.33rem;
  margin-left: 0.21rem;
  text-align: center;
  line-height: 0.2rem;
  margin: 0.2rem auto;
  height: 0.8rem;
}
figure {
  display: flex;
  /* align-items: center; */
  margin: 0.2rem 0;
  height: 0.5rem;
}
figure span {
  height: 0.45rem;
  width: 0.45rem;
  border-radius: 50%;
}
img {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
}
figure figcaption {
  display: flex;
  flex-direction: column;
  font-size: 0.14rem;
  height: 0.24rem;
  padding-left: 0.2rem;
}
.nav #share {
  width: 3.33rem;
  height: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Arial;
  color: #5e5e5e;
  font-size: 0.12rem;
  top: 4.7rem;
}
.nav #share span {
  width: 0.48rem;
  height: 0.2rem;
  font-family: Arial;
  color: #5e5e5e;
  font-size: 0.12rem;
}
.nav #share span:nth-of-type(3) {
  display: flex;
  align-items: center;
}
.clearfix ::after {
  content: "";
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
</style>
