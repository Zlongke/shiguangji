<template>
    <div>
        <Head :name="title"/>
        <router-view @click="tap()"></router-view>
        <div class="container" v-for="(item,index) in list" :key="index">
            <van-row type="flex" justify="center" align="center" class="list">
            <van-col span="2"> <van-checkbox v-model="checked"></van-checkbox></van-col>
          
            <van-col span="22" >   
                <van-card
                num="2"
                :price="item.price"
                :desc="item.goodsName"
                title="商品标题"
                :thumb="imageURL"
                />
            </van-col>
        </van-row>
        
        </div>
    </div>
</template>
<script>
import Head from "@/components/Head"
import axios from "axios"
export default {
    name:'Unpay',
    components:{
        Head
    },
    data() {
        return {
            checked:true,
            title:'待付款',
           list:[]
        }
    },
    methods: {
        tap(msg){
            this.title=msg
        }
    },
    mounted() {
        var _this =this;
        axios({
            method:"get",
            url:'/ssm-1.0/unpay/findAll.do',
            params:{u_id:1}
        }).then((data)=>{
            console.log(data.data.data)
            _this.list = data.data.data
        })
    },
}
</script>
<style scoped>
    .container{
        margin-top: 0.5rem;
    }
</style>

