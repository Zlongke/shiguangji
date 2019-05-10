<template>
  <div>
    <Head :name="title"/>
    <div class="container-list">
      <van-tabs v-model="active" color="#cecece">
        <van-tab title="记录列表">
          <van-button @click="addChengzhang" class="daoru" round type="danger">添加成长记录</van-button>
          <div class="list" v-for="(item,index) in chengjiuList" :key="index">
            <p>
              {{item.data}}
              <span style="float:right">{{item.size}}天</span>
            </p>
            <p>{{item.detail}}</p>
            <p>
              身高{{item.height}}cm
              <span style="margin-left:50vw;">头围{{item.head}}CM</span>
            </p>
            <p>体重{{item.weight}}KG</p>
          </div>
        </van-tab>
        <van-tab title="身高曲线">身高曲线</van-tab>
        <van-tab title="体重曲线">体重曲线</van-tab>
        <van-tab title="头围曲线">头围曲线</van-tab>
      </van-tabs>
    </div>

    <van-popup class="babylist" v-model="show">
      <h3>添加成长记录信息</h3>
      <van-field v-model="date" label="时间"/>
      <van-field v-model="size" label="宝宝年龄"/>
      <van-field v-model="detail" label="宝宝详情"/>
      <van-field v-model="height" label="宝宝身高"/>
      <van-field v-model="head" label="宝宝头围"/>
      <van-field v-model="weight" label="宝宝体重"/>

      <van-button class="m-t" @click="addchengjiuList" type="warning">提交</van-button>
    </van-popup>
  </div>
</template>

<script>
import Head from "@/components/Head";
import axios from "axios";
//import { mapState } from "vuex";
export default {
  components: {
    Head
  },
  data() {
    return {
      title: "成长记录",
      active: 0,
      show: false,
      date: "",
      size: "",
      detail: "",
      height: "",
      head: "",
      weight: "",
      chengjiuList: ""
    };
  },
  mounted() {
    var _this = this;
    axios({
      url: "/ssm-1.0/growup/growup.do",
      params: { u_id: 1 }
    }).then(data => {
      console.log(data.data);
      _this.chengjiuList = data.data.data;
    });
  },
  /* updated() {
    var _this = this;
    axios({
      url: "/ssm-1.0/growup/growup.do",
      params: { u_id: 1 }
    }).then(data => {
      console.log(data.data);
      _this.chengjiuList = data.data.data;
    });
  }, */
  /*  computed: {
    ...mapState(["u_id", "username"])
  }, */
  methods: {
    addChengzhang() {
      this.show = !this.show;
    },
    addchengjiuList() {
      var _this = this;
      axios({
        url: "/ssm-1.0/growup/addgrowup.do",

        params: {
          data: _this.date,
          size: _this.size,
          detail: _this.detail,
          height: _this.height,
          head: _this.head,
          weight: _this.weight,
          u_id: 1
        }
      }).then(data => {
        console.log(data.data);
        if (data.data.code == 1000) {
          _this.show = !_this.show;
          _this.chengjiuList.unshift({
            data: _this.date,
            size: _this.size,
            detail: _this.detail,
            height: _this.height,
            head: _this.head,
            weight: _this.weight
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.container-list {
  margin-top: 46px;
}
.list {
  margin-top: 20px;
  height: 18vh;
  width: 90vw;
  margin-left: 2vw;
  background: #e3e3e3;
  border-radius: 5vw;
  position: relative;
  padding: 1vw 3vw;
}
.list p {
  margin: 2vw 0;
}
.babylist {
  width: 70vw;
  height: 60vh;
  text-align: center;
}
.babylist h3 {
  text-align: center;
  line-height: 10vh;
}
.babylist .m-t {
  margin-top: 6vh;
}
</style>
