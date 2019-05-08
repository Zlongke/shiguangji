<template>
    <div>
        <header>
            <van-nav-bar fixed  @click-left="onClickLeft" title="" left-text="返回" left-arrow>
                <van-icon name="search" slot="right" />
            </van-nav-bar>
        </header>
        <van-row type="flex" justify="center">
            <van-col span="24">
                 <van-swipe :autoplay="3000" :height='200'>
                    <van-swipe-item v-for="(item, index) in data" :key="index">
                        <img src="data.img" />
                    </van-swipe-item>
                </van-swipe>
            </van-col>
        
        </van-row>

        <van-row type="flex" justify="center">
            <van-col span="24" tag="aside">
                <aside>
                    <p style="font-size:0.16rem">秋冬宝宝加棉保暖套装</p>
                    <van-button :class="{'yangshi':'cla'}" round size="mini">￥999</van-button>
                    <van-button  :class="{'yangshi':'cla'}" round size="mini">好评99%</van-button>
                    <span class="price">会员价：￥99</span>
                </aside>
            </van-col>
        </van-row>

        <section>
            
            <div class="detail">
                <figure>
                    <div>
                        <p>设计者：WYYZMc</p>
                    <p>颜    色：浅蓝、浅粉、浅绿</p>
                    </div>
                    
                    <figcaption>
                        <div>
                            <p>材    质：100%纯棉</p>
                        <p>适龄期：3~5岁宝宝</p>
                        </div>
                        
                    </figcaption>
                </figure>
            </div>
            <div class="pingjia">
                 <van-button :class="{'yangshia':'clb'}"  round  size="small">评价</van-button>
                <van-button :class="{'yangshia':'clb'}" round size="small">规格</van-button>
            </div>
           
            <div class="ping">
                <figure>
                    <p>vivi妈妈</p>
                    <figcaption>
                        <p>宝贝很好，材质很好，手感也很柔软，适合宝宝穿</p>                  
                    </figcaption>
                </figure>
           </div>
        <div class="btn">  
            <van-button :class="{'classb':'btn'}" size="normal" to="/addcart">加入购物车</van-button>
            <van-button :class="{'classb':'btn'}" size="normal" to="/buy">立即购买</van-button>
         </div>
        
        </section>
     
    </div>


</template>
<script>
import axios from 'axios';
export default {
    name:'Detail',
    data() {
        return {
           data:[],
           cla:true,
            clb:true,
            btn:true
        }
    },
    methods: {
       onClickLeft(){
           this.$router.go(-1)
       }
    },
    mounted() {
        var _this = this;
        axios({
            method:'get',
            url:' http://jx.xuzhixiang.top/ap/api/bannerlist.php',
            params:{uid:6436}
        }).then((data)=>{
            console.log(data.data)
            // _this.data = data.data.info
        })
    },  
}
</script>
<style scope="">
section{
     width:304px;
    height: 53px;
     margin: 0 auto;
}
aside{
    text-align: center
}
aside .yangshi{
    font-size: 10px;
    color:#6A6A6A;
    margin-bottom: 5px;
}
aside .price{
    margin: 0 auto;
    display: block;
    width:102px;
    height: 18px;
    font-size: 10px;
    color:#A6A4A4;
    border: 1px solid #BBBBBB;
    border-radius: 26px;
    background: #EAEAEA;
}
.detail{
    /* display: flex; */
    width:304px;
    height: 53px;
    border:1px solid #BBBBBB;
    border-radius: 8px;
    margin: 10px auto;
    font-size: 10px;
    color:#6A6A6A;
    line-height: 20px;
}
.detail figure{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.detail figure div p{
   height: 30px;
}
.pingjia{
    display: flex;
    justify-content: space-between
}
.yangshia{
    padding:0 40px;
}
.ping{
    margin: 20px 0px;
    width:304px;
    height: 53px;
    border:1px solid #BBBBBB;
    border-radius: 8px;
    font-size: 10px;
    color: #101010;
    line-height: 25px;
    padding:0px 5px;
}
.btn{
    display: flex;
}
.classb{
    width:180px;
    height: 70px;
    background: #EAE8E8;
    border-radius: 10px 10px 0px 0px;
}
</style>
