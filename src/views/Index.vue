<template>
  <div>
    <Head :name="title"/>
    <div class="container"></div>
    <router-view @toParent="tap"></router-view>
  </div>
</template>

<script>
import Head from '@/components/Head'
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
    Head
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
