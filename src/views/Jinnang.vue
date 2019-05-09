<template>
  <div>
    <h1>{{username}}</h1>
 <router-link to="/jiuniang">
<van-swipe :autoplay="3000" indicator-color="#fff" height="150">
  <van-swipe-item style="background:red">1</van-swipe-item>
  <van-swipe-item style="background:yellow">2</van-swipe-item>
  <van-swipe-item style="background:green">3</van-swipe-item>
  <van-swipe-item style="background:blue">4</van-swipe-item>
</van-swipe>
</router-link>
<p>
    <router-link class="sp" to="/shipu">锦囊</router-link>
   <router-link class="sp" to="/baike">百科</router-link>
    <router-link class="sp" to="/wenda">问答</router-link>
</p>
<van-card

  price="2.00"
  desc="描述信息"
  title="商品标题"
  :thumb="imageURL"
/>
<van-card

  price="2.00"
  desc="描述信息"
  title="商品标题"
  :thumb="imageURL"
/>
<van-card

  price="2.00"
  desc="描述信息"
  title="商品标题"
  :thumb="imageURL"
/>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Jinnang",
  data() {
    return {
      title: "锦囊"
    };
  },
   methods: {
    tap(msg) {
      //console.log(msg)
      this.title = msg;
    }
  },
  computed: {
    ...mapState(["username"])
  },
  mounted() {
    this.$emit("totitle", this.title);
  },


};

</script>

<style scoped="">
p{height:20px;
background:gainsboro;

font-size:14px;
color:black}
.sp{
  margin-left:60px
}
</style>
