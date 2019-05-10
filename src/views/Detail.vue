<template>
  <div>
    <header>
      <van-nav-bar fixed @click-left="onClickLeft" title left-text="返回" left-arrow>
        <van-icon name="search" slot="right"/>
      </van-nav-bar>
    </header>
    <van-row type="flex" justify="center">
      <van-col span="24">
        <aside class="banner">
          <h2>
            <img :src="detail.pimg">
          </h2>
        </aside>
      </van-col>
    </van-row>

    <van-row type="flex" justify="center">
      <van-col span="24" tag="aside">
        <aside>
          <p style="font-size:0.16rem">{{detail.pname}}</p>
          <van-button :class="{'yangshi':'cla'}" round size="mini">￥{{detail.pprice}}</van-button>
          <van-button :class="{'yangshi':'cla'}" round size="mini">好评99%</van-button>
          <span class="price">会员价：￥{{detail.pprice}}</span>
        </aside>
      </van-col>
    </van-row>

    <section>
      <div class="detail">
        <figure>
          <div>
            <p>设计者：WYYZMc</p>
            <p>颜 色：浅蓝、浅粉、浅绿</p>
          </div>

          <figcaption>
            <div>
              <p>材 质：100%纯棉</p>
              <p>适龄期：3~5岁宝宝</p>
            </div>
          </figcaption>
        </figure>
      </div>
      <div class="pingjia">
        <van-button to="/appraise" :class="{'yangshia':'clb'}" round size="small">评价</van-button>
        <van-button :class="{'yangshia':'clb'}" round size="small">规格</van-button>
      </div>

      <div class="ping">
        <figure>
          <p>vivi妈妈</p>
          <figcaption>
            <p>{{detail.pname}}</p>
          </figcaption>
        </figure>
      </div>
      <div class="btn">
        <van-button :class="{'classb':'btn'}" size="normal" @click="addcart(detail.pid)">加入购物车</van-button>
        <van-button :class="{'classb':'btn'}" size="normal" @click="buy(detail.pid)">立即购买</van-button>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      cla: true,
      clb: true,
      btn: true,
      detail: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    addcart(id) {
      console.log(id);
      this.$router.push({ name: "Addcart", query: { id: id } });
    },
    buy(id) {
      this.$router.push({ name: "Buy", query: { id: id } });
    }
  },
  mounted() {
    var _this = this;

    axios({
      url: "http://jx.xuzhixiang.top/ap/api/detail.php",
      params: { id: _this.$route.query.id }
    }).then(data => {
      console.log(data.data.data);
      _this.detail = data.data.data;
    });
  }
};
</script>
<style scoped>
section {
  width: 304px;
  height: 53px;
  margin: 0 auto;
}
.banner img {
  font-size: 0.14rem;
  margin-top: 0.46rem;
  height: 2.6rem;
  border-radius: 0.12rem;
  background: #a6a4a4;
}
aside {
  text-align: center;
}
aside .yangshi {
  font-size: 10px;
  color: #6a6a6a;
  margin-bottom: 5px;
}
aside .price {
  margin: 0 auto;
  display: block;
  width: 102px;
  height: 18px;
  font-size: 10px;
  color: #a6a4a4;
  border: 1px solid #bbbbbb;
  border-radius: 26px;
  background: #eaeaea;
}
.detail {
  /* display: flex; */
  width: 304px;
  height: 53px;
  border: 1px solid #bbbbbb;
  border-radius: 8px;
  margin: 10px auto;
  font-size: 10px;
  color: #6a6a6a;
  line-height: 20px;
}
.detail figure {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail figure div p {
  height: 30px;
}
.pingjia {
  display: flex;
  justify-content: space-between;
}
.yangshia {
  padding: 0 40px;
}
.ping {
  margin: 20px 0px;
  width: 304px;
  height: 53px;
  border: 1px solid #bbbbbb;
  border-radius: 8px;
  font-size: 10px;
  color: #101010;
  line-height: 25px;
  padding: 0px 5px;
}
.btn {
  display: flex;
}
.classb {
  width: 180px;
  height: 70px;
  background: #eae8e8;
  border-radius: 10px 10px 0px 0px;
}
</style>
