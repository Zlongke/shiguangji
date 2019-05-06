<template>
    <div>
        <h2>社区</h2>
         <div class="snav">
            <figure>
                <span></span>
                <figcaption>备孕</figcaption>
            </figure>
             <figure>
                <span></span>
                <figcaption>备期</figcaption>
            </figure>
             <figure>
                <span></span>
                <figcaption>育儿</figcaption>
            </figure>

             <figure>
                <span></span>
                <figcaption>家常</figcaption>
            </figure>
            <figure>
                <span></span>
                <figcaption>旅行</figcaption>
            </figure>
        </div>
        <div class="nav clearfix" v-for="(item,i) in list" :key="i">
            <figure  >
                <span><img :src="item.img" /></span>
                <figcaption>{{item.name}}</figcaption>
            </figure>
             <p>清晨起来打开窗，阳光美美哒，看着蝴蝶闻花香，风景美美哒，你在远处看着我，笑容美美哒，我的心就像朵花儿，开的美美哒，我爱你你爱我，感情美美哒，爸爸妈妈身体好，亲情美美哒...</p>
            <textarea rows="8" cols="45"></textarea>
            <div id="share"><span>分享</span><span>评论</span><span>点赞</span></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Community',
    data() {
        return {
            list:[],
            title:'社区'
        }
    },
    mounted() {
         this.$emit('toTitle',this.title);
        var _this = this;
       axios({
           url:'http://www.jd.com/api/attention'
       }).then((data)=>{
           _this.list = data.data.info 
       })
    },
}
</script>

<style scope="">
h2,p,div,figcaption,figure{
    margin: 0;
    padding: 0;
}
    h2{
        width:100%;
        height: 130px;
        background: #A6A4A4 100%;
    }
.snav{
    display: flex;
    flex: 1;
    width:100%;
    height: 70px;
    background: blueviolet;
     position: relative;
    /* top: 120px; */
}
.snav figure{
    margin: 10px 15px 0px 15px;
    text-align: center;    
}
.snav figure span{
       position: absolute;
       top:-20px;
       display: block;
       height: 44px;
       width: 44px;
       background: #D9D9D9 100%;
       line-height: 20px;
       text-align: center;
       border-radius: 50%
   }
.snav figure span:active{
       background: #A6A4A4;
   }
.snav  figure figcaption{
       width: 44px;
       height: 44px;
       text-align: center;
       line-height: 17px;
       margin-top: 20px;
   }




.nav:nth-of-type(1){
    margin-top: 46px;
}
.nav{
    padding: 0px 5px;
    height: 410px;
    background-color: rgb(234, 234, 234);
    text-align: center;
    border: 1px solid rgb(255, 255, 255);
    margin-bottom: 10px;
    
}
.nav p{
    color: rgb(94, 94, 94);
    font-size: 14px;
    width: 333px;
    margin-left: 21px;
    text-align: center;
}
.nav figure{
    margin-top: 20px;
    height: 50px;
}
.nav figure span{
       float: left;
       display: block;
       height: 44px;
       line-height: 20px;
       text-align: center;
       margin-left: 20px;
       border-radius: 50%
   }
.nav img{
       width:44px;
       height: 44px;
       border-radius: 50%
   }
.nav figure figcaption{
       float: left;
       width: 65px;
       height: 24px;
       text-align: center;
       line-height: 17px;
       margin-top: 10px;
   }
.nav #share{
    height: 40px;
    width: 80%;
    margin: 0 auto;
    font-family: Arial;
    color: #5E5E5E 100%;
    font-size: 12px;
    line-height: 40px;
    text-align: center;
    top: 470px;
}
.nav #share span{
    width:48px;
    height: 20px;
    display: block;
    float: left;
    font-family: Arial;
    color: #5E5E5E 100%;
    font-size: 12px;
    text-align: center;
}
.nav #share span:nth-of-type(2){
    margin-left: 90px;
}
.nav #share span:nth-of-type(3){
    float: right;
}
   .clearfix ::after{
       content: "";
       clear: both;
       display: block;
       height: 0;
       overflow: hidden;
       visibility: hidden;
   }
</style>
