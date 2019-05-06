<template>
    <div>
        <van-row type="flex">
            <van-col span="24" tag="div" class="lunbo">
                 <van-swipe :autoplay="3000" indicator-color="white" :width="1000" :height="200">
                    <van-swipe-item style="background:red">1</van-swipe-item>
                    <van-swipe-item style="background:red">2</van-swipe-item>
                    <van-swipe-item style="background:red">3</van-swipe-item>
                    <van-swipe-item style="background:red">4</van-swipe-item>
                </van-swipe>
            </van-col>
        </van-row>
        <van-row type="flex">
            <van-col span="8" tag="div" justify="space-around" align="center">
                <div id="nav">
                    <img class="img" src="" />
                    <p>我的积分</p>
                 </div>
             </van-col>
               <van-col span="8" tag="div" justify="space-around" align="center">
                <div id="nav">
                    <img class="img" src="" />
                    <p>每日签到</p>
                 </div>
             </van-col>
               <van-col span="8" tag="div" justify="space-around" align="center">
                <div id="nav">
                    <img class="img" src="" />
                    <p>我的奖品</p>
                 </div>
             </van-col>
                    
        </van-row>

        <van-row type="flex" justify="center">
            <van-col span="10" tag="p">
                <p class="time">时光会员 专享好货</p>
            </van-col>    
        </van-row>
   
        <van-row type="flex" justify="space-around">
             <van-col span="10">
                   <div id="subnav" @click="detail()">
                    <img src="" />
                    <p class="name">{{name}}</p>
                    <p class="title">{{ptitle}}</p>
                    <p class="price">{{price}}</p>
                </div>
             </van-col>
            <van-col span="10">
                <div id="subnav" >
                    <img src="" />
                    <p class="name">{{name}}</p>
                    <p class="title">{{ptitle}}</p>
                    <p class="price">{{price}}</p>
                </div>
              
             
            </van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    name:'Vipcenter',
    data() {
        return {
            title:'会员中心',
            name:'益智不倒翁玩具',
            ptitle:'锻炼小手灵活度',
            price:'¥29.9'
            
        }
    },
    mounted() {
        this.$emit('toTitle',this.title)
    },
    methods: {
        detail(){
            this.$router.push('/detail')
        }
    },
}
</script>
<style scoped>
   .lunbo{
       margin-top: 46px;
   }
   #nav{
       margin-top: 10px;
       height: 100px;
       font-size: 12px;
       color: #666666;
   }
   #nav .img{
       width:50px;
       height: 50px;
       border-radius: 8px;
       margin:10px 0px;
   }
   .time{
       height:30px;
        font-size:18px; 
        color:#666666;
        font-family: Microsoft Yahei;
   }
 
  #subnav img{
      width:150px;
      height: 150px;
      border-radius: 8px;
  }
  #subnav .name{
      font-size: 12px;
      color: #666666;
  }
   #subnav .title{
      font-size: 10px;
      color: #BDBDBD;
  }
   #subnav .price{
      font-size: 10px;
      color: #D2D2D2;
  }
</style>
