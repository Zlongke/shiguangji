<template>
  <div>
    <h2></h2>
    <article @click="detail(item.p_id)" v-for="(item,index) in baby" :key="index">
      <img :src="item.picture" width="111px" height="108px">
      <div>
        <p>{{item.title}}</p>
        <p>{{item.caizhi}}</p>
        <p>会员价：￥{{item.price}}</p>
        <p>宝马亲测：{{item.text}}</p>
      </div>
    </article>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Babynecessary",
  data() {
    return {
      title: "宝宝必备",
      baby: ""
    };
  },
  methods: {
    detail(id) {
      this.$router.push({ name: "Buy", query: { id: id } });
    }
  },
  mounted() {
    var _this = this;
    axios({
      method: "get",
      url: "ssm-1.0/baby/all.do",
      params: { u_id: 1 }
    }).then(data => {
      console.log(data.data.data);
      _this.baby = data.data.data;
    });
  }
};
</script>
<style scoped>
h2 {
  margin-top: 46px;
  width: 100%;
  height: 130px;
  border-radius: 8px;
  background: pink;
}
article {
  border-radius: 12px;
  height: 149px;
  padding: 0 10px;
  margin: 0px 10px 10px 10px;
  background: #dfdfdf;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
article div {
  padding-left: 10px;
}
p:nth-of-type(1) {
  font-size: 14px;
  color: #777676;
  line-height: 20px;
  height: 24px;
}
p:nth-of-type(2) {
  font-size: 12px;
  color: #777676;
  line-height: 17px;
  height: 24px;
}
p:nth-of-type(3) {
  font-size: 10px;
  color: #777676;
  line-height: 15px;
  height: 24px;
}
p:nth-of-type(4) {
  font-size: 8px;
  color: #a6a6a6;
  line-height: 12px;
  height: 24px;
}
</style>
