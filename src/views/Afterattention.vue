<template>
    <div>
        <div class="nav clearfix" v-for="(item,i) in list" :key="i">
            <figure  >
                <span><img :src="item.img" /></span>
                <figcaption>{{item.name}}</figcaption>
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque sit necessitatibus voluptatem minima, architecto, soluta facilis quam nesciunt nulla ducimus ipsa modi id ut velit, autem vel? Dolores, nostrum?</p>
            <textarea rows="8" cols="45"></textarea>
            <div id="share"><span>分享</span><span>评论</span><span>点赞</span></div>
        </div>
   
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name:'Afterattention',
    data() {
        return {
            list:[]
        }
    },
    mounted() {
        var _this = this;
        axios({
            url:'http://www.jd.com/api/attention'
        }).then((data)=>{
            console.log(data.data)
            _this.list = data.data.info
        })
    },

}
</script>

<style scope="">
.nav:nth-of-type(1){
    margin-top: 46px;
}
.nav{
    display: flex;
    flex-direction: column;
    flex:1;
    height: 410px;
    padding:0px 10px;
    background-color: rgb(234, 234, 234);
    text-align: center;
    border: 1px solid rgb(255, 255, 255);
    margin-bottom: 10px;
    
}
p{
    color: rgb(94, 94, 94);
    font-size: 14px;
    width: 333px;
    margin-left: 21px;
    text-align: center;
}
figure{
    margin-top: 20px;
    height: 50px;
}
   figure span{
       float: left;
       height: 44px;
       line-height: 20px;
       text-align: center;
       border-radius: 50%
   }
   img{
       width:44px;
       height: 44px;
        border-radius: 50%
   }
   figure figcaption{
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
