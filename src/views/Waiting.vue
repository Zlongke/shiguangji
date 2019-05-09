<template>
    <div>
        <van-row type="flex" justify="center">
            <van-col span="24" tag="img">
                <img src="">
            </van-col>
        </van-row>
        
        <div>
            <div class="mine">
                <figure>
                <img src="">
                <figcaption>
                    <p>{{daoda}}</p>
                    <p>配送员{{peis}}</p>
                    <div>
                        <van-button round  size="small">取消订单</van-button>
                        <van-button round  size="small">联系配送员</van-button>
                        <van-button round  size="small">催单</van-button>
                    </div>
                </figcaption>
                </figure>
            </div>
            
        
            <div id="info">
                <p>商品信息</p>
                <div class="img">
                    <img src="">
                    <img src="">
                    <img src="">
                </div>
                <van-cell-group class="neirong">
                <van-cell title="商品总价" value="￥999" />
                <van-cell title="配送费" value="免运费" />
                <van-cell title="运费险" value="卖家赠送" />
                <van-cell title="" value="总计：￥233" />
                </van-cell-group>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'Waiting',
    data() {
        return {
            daoda:'预计明天到达',
            peis:'张师傅',
            list:[]
        }
    },
    mounted() {
        var _this = this;
        axios({
            method:'get',
            url:'/ssm-1.0/order/findAll.do',
            params:{u_id:1}
        }).then((data)=>{
            console.log(data.data.data)
            _this.list = data.data.data
        })
    },
}
</script>
<style scoped>
    .img{
        display: flex;
        justify-content: space-around;
    }
    img{
        height: 2.3rem;
    }
    .mine{
        position: relative;
        top: -0.86rem;
        width:3.3rem;
        /* height:1.73rem; */
        border-radius: 0.08rem;
        background: #FBFBFB;
        font-size: 0.12rem;
         text-align: center;
         margin: 0 auto;
    }
    .mine figure img{
        position: absolute;
        top: -0.5rem;
        left:1.2rem; 
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 0.01rem solid #FF9800;
    }
    .mine figcaption{
        height: 1rem;
        padding-top:0.73rem;
    }
    .mine figcaption p{
       height: 0.17rem;
       line-height: 0.17rem;
    }
     .mine figcaption div{
         display: flex;
         justify-content: space-around;
            margin-top: 0.2rem;
    }
    #info{
        width:3.28rem;
        height: 3.16rem;
        background: #F2F2F2;
        margin-top: 0px;
        margin: 0 auto;
        font-size: 0.14rem;
         border-radius: 0.08rem;
    }
    .neirong{
        background: #F2F2F2;
    }
    #info img{
        width:0.87rem;
        height: 0.87rem;
        background: #cccccc;
    }
</style>

