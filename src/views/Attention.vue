<template>
    <div>
        <p>关注你感兴趣的人</p>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="nav" v-for="(item,i) in data" :key="i">
                <figure  >
                    <span><img :src="item.img" /></span>
                    <figcaption>{{item.name}}</figcaption>
                </figure>
            </div>
        </van-pull-refresh>
         <van-button class="btn" round type="danger" to="/afterattention">一键关注</van-button>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    name:'Attention',
   data(){
       return{
           data:[],
           isLoading:false
       }
   },
   methods: {
       onRefresh(){
           setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 500);
       }
   },
    mounted() {
          var  _this = this;
        axios({
            url:'http://www.jd.com/api/attention'
        }).then((data) => {
            console.log(data.data)
            _this.data  = data.data.info
        })
    },

}
</script>

<style scope="">
 p{
    margin-top: 46px;
    text-align: center;
    height:40px;
    line-height:40px;

  }
.nav{
    float: left;
    width:80px;
    height: 88px;
    margin: 12px
}

   figure span{
       display: block;
       height: 74px;
       line-height: 20px;
       text-align: center;
       border-radius: 50%
   }
   img{
       width:74px;
       height: 74px;
        border-radius: 50%
   }
   figure figcaption{
       width: 65px;
       height: 24px;
       text-align: center;
       line-height: 17px;
       margin-top: 10px;
   }
   .btn{
       position: fixed;
       width:200px;
       height: 30px;
       line-height: 30px;
       background-color:rgb(215, 213, 213);
       border:1px solid #cccccc;
        bottom: 60px;
        left: 100px;
   }
</style>
