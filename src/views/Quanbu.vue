<template>
  <div>
    <Head :name="title"/>
    <div class="container">
      <van-row type="flex" justify="space-around" class="flex-wrap">
        <van-col span="20" class="content" v-for="(item,index ) in chengjiuList" :key="index">
          <van-card :desc="item.cnamelist" :title="item.cname"/>
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
      chengjiuList: ""
    };
  },
  mounted() {
    var _this = this;
    axios({
      url: "/ssm-1.0/chengjiu/chengjiu.do",
      params: { u_id: 1 }
    }).then(data => {
      console.log(data.data);
      _this.chengjiuList = data.data.data;
    });
  }
};
</script>

<style scoped>
.container {
  margin-top: 47px;
}
.flex-wrap {
  flex-wrap: wrap;
  overflow: auto;
}
.content {
  height: 30vw;

  border-radius: 2vw;
  margin-top: 3vh;
  font-size: 0.2rem;
}
</style>

