<template>
  <div>
    <LoginTop :name="bgc" :name1="bgc1"/>
    <div class="container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import LoginTop from "@/components/LoginTop";
import axios from "axios";
export default {
  name: "Index",
  data() {
    return {
      bgc: "",
      bgc1: ""
    };
  },
  methods: {
    tap(msg) {
      //console.log(msg)
      this.bgc = msg;
    },
    tap1(msg) {
      this.bgc1 = msg;
    }
  },
  components: {
    LoginTop
  },
  mounted() {
    /* axios({
      url: "http://jx.xuzhixiang.top/ap/api/productlist.php",
      params: { uid: 2000 }
    }).then(data => {
      console.log(data.data.data);
    }); */
  }
};
</script>

<style scoped>
h1 {
  color: yellow;
}
.container {
  margin-top: 46px;
}
</style>
