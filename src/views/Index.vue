<template>
  <div>
    <LoginTop :name="title"/>
    <div class="container"></div>
    <router-view @toParent="tap"></router-view>
  </div>
</template>

<script>
import LoginTop from '@/components/LoginTop'
import axios from 'axios'
export default {
  name:'Index',
  data() {
    return {
      title:''
    }
  },
  methods: {

    tap(msg){
      //console.log(msg)
      this.title = msg;
    }
  },
  components:{
    LoginTop
  },
  mounted() {
    axios({
      url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
      params:{uid:2000}
    }).then((data)=>{
      console.log(data.data.data)
    })
  },
}
</script>

<style scoped>
  h1{
    color: yellow;
  }
  .container{
    margin-top: 46px;
  }
</style>
