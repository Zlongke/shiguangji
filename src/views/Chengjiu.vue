<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text
      right-text="全部"
      left-arrow
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="container">
      <van-row type="flex" justify="space-around" class="flex-wrap">
        <van-col span="18" class="content">
          <img class="showimg" src>
          <van-field v-model="cname" type="textarea" placeholder="第一次叫妈妈" rows="1" autosize/>
          <van-field
            v-model="message"
            type="textarea"
            placeholder="宝宝1岁2个月是18天了，第一次明确的在喊妈妈了，心都给我萌化了..."
            rows="1"
            autosize
          />
          <van-button @click="addChengjiu" class="daoru" round type="danger">添加成就</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
import axios from "axios";

export default {
  components: {
    Head
  },
  data() {
    return {
      title: "成就",
      cname: "",
      message: "",
      chengjiu: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/quanbu");
    },
    addChengjiu() {
      var _this = this;
      _this.chengjiu.cname = _this.cname;
      _this.chengjiu.cnamelist = _this.message;
      console.log(_this.chengjiu);
      axios({
        url: "/ssm-1.0/photolist/addphotolist.do",
        params: { chengJiu: _this.chengjiu }
      }).then(data => {
        console.log(data.data.data);
      });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 46px;
}
.content {
  height: 70vh;
  margin-top: 8vh;
  background: #cecece;
  border-radius: 5vw;
  padding: 2vw 2vw;
  text-align: center;
}
.showimg {
  width: 100%;
  height: 35vh;
  border-bottom: 2px solid #fff;
}
.daoru {
  height: 5vh;
  width: 40vw;
  line-height: 5vh;
  margin-top: 5vh;
}
</style>
