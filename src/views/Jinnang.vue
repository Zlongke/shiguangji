<template>
  <div>

 <!-- <router-link to="/jiuniang"> -->
<van-swipe :autoplay="3000" :height="150">
  <van-swipe-item v-for="(image,index) in images" :key="index">
    <img  :src="image.photo" />
  </van-swipe-item>
</van-swipe>
<!-- </router-link> -->



<section>
    <router-link class="sp" to="/shipu">锦囊</router-link>
   <router-link class="sp" to="/baike">百科</router-link>
    <router-link class="sp" to="/wenda">问答</router-link>
</section>


<router-link to="/shipu">
<van-card
  v-for="item in list"
  :num="item.size"
  :desc="item.namelist"
  :key="item.id"
  :thumb="item.photo"
/>
</router-link>

  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";
export default {
  name: "Jinnang",
  data() {
    return {
      title: "锦囊",
      images:[],
      list:[]
    };
  },
   methods: {
    tap(msg) {
      this.title = msg;
    },
    getMsg(){
      console.log(this.images)
    }
  },

  mounted() {
    this.$emit("totitle", this.title);
    var _this=this;
    axios({
      url:'ssm-1.0/homepage/querythreeall.do',

    }).then((data)=>{
       console.log('tupian1',data.data)
       _this.images=data.data.data
    }),
     axios({
      url:'ssm-1.0/homepage/querythreeall.do',

    }).then((data)=>{
       console.log('tupian2',data.data)
       _this.list=data.data.data
    })
  },


};

</script>

<style scoped="">
section{height:20px;
background:gainsboro;

font-size:14px;
color:black}
.sp{
  margin-left:60px
}
img{width: 380px;height:150px;}
</style>
