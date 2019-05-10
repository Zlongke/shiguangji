<template>
    <div id="cart">
        <van-row v-for="(item,index) in cart" :key=index type="flex" justify="center" align="center" class="list">
            <van-col span="2"> <van-checkbox v-model="checked"></van-checkbox></van-col> 
            <van-col span="20" >
                <van-card
                :num="item.pnum"
                :price="item.pprice"
                :desc="item.pdesc"  
                :title="item.pname"
                :thumb="item.pimg"
                >
                 <div slot="footer">
                    <van-button size="mini">添加</van-button>
                    <van-button size="mini">删除</van-button>
                </div>
            </van-card>
            </van-col>

        </van-row>

        <van-row type="flex" justify="center" align="center" class="need">
            <van-col span="8">宝宝可能还需要</van-col>
        </van-row>

         <van-row  type="flex" justify="space-around" align="center">
             <div class="list" v-for="(item,index) in list" :key="index">
                <van-col span="10" >
                    <div id="nav" >
                        <img class="img" :src="item.pimg" />
                        <p>{{item.pname}}</p>
                        <p>会员价￥{{item.pprice}}</p>
                    </div>
                </van-col>   
            </div>    
        </van-row>
       
            <van-row type="flex" justify="center">
                <van-col span="20" >
                    <van-submit-bar
                    class="tijiao"
                    :price="0"
                    button-text="提交订单"
                    @submit="onSubmit"
                    >
                    <van-checkbox v-model="checked">全选</van-checkbox>
                
                    </van-submit-bar>
                </van-col>
            </van-row>
            
      
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'Cart',
    data() {
        return {
            title:'购物车',
            checked:'false',
            cart:'',
            list:''
        }
    },
    methods: {
        onSubmit(){

        }
    },
    mounted() {
        this.$emit('toTitle',this.title);
        var _this = this;
        axios({
            method:'get',
            url:'http://jx.xuzhixiang.top/ap/api/cart-list.php',
            params:{id:5484}
        }).then((data)=>{
            console.log(data.data.data)
            _this.cart = data.data.data
        })

        axios({
            method:'get',
            url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
            params:{uid:5484}
        }).then((data)=>{
            console.log(data.data.data)
            _this.list = data.data.data
        })

    },
    
}
</script>
<style scoped>
    #cart{
        margin-top: 50px;
        padding: 0px 10px;
    }
   
    .need{
        margin-top: 20px;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
    }
    #nav img{
        margin-top: 10px;
        width:86px;
        height: 86px;
    }
    #nav p:nth-of-type(1){
        font-size: 12px;
        color: #666666;
    }
     #nav p:nth-of-type(2){
        font-size: 10px;
        color: #999999;
    }
    .tijao{
        background:#666;    
    }
</style>


