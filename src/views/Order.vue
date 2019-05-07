<template>
    <div class="container">
    <van-row type="flex"  align="center">
    <van-col span="12" >
        <div class="spa">
            <span></span>
            <p>全部</p>
        </div>   
    </van-col>
    </van-row>
     <van-row type="flex"  align="center">
    <van-col span="12" >
        <div class="spa">
            <span></span>
            <p>待付款</p>
        </div>   
    </van-col>
    </van-row>
    <van-row type="flex"  align="center">
        <van-col span="12" >
            <div class="spa" @click="wait">
                <span></span>
                <p>待收货</p>
            </div>   
        </van-col>
    </van-row>
     <van-row type="flex"  align="center">
    <van-col span="12" >
        <div class="spa">
            <span></span>
            <p>待发货</p>
        </div>   
    </van-col>
    </van-row>
     <van-row type="flex"  align="center">
    <van-col span="12" >
        <div class="spa">
            <span></span>
            <p>已完成</p>
        </div>   
    </van-col>
    </van-row>
     <van-row type="flex"  align="center">
    <van-col span="12" >
        <div class="spa">
            <span></span>
            <p>退货/售后</p>
        </div>   
    </van-col>
    </van-row>       
    </div>
</template>
<script>
export default {
    name:'Order',
    data() {
        return {
            title:'我的订单',
        }
    },
    methods: {
        wait(){
            this.$router.push('/waiting')
        } 
    },
    mounted() {
        this.$emit('toTitle',this.title)
    },

}
</script>
<style scoped>
    .container{
        padding:0px 20px;
        margin-top: 55px;
    }
    .spa{
        height:66px;
        display: flex;
        align-items: center;
    }
     span{
        width:35px;
        height: 35px;
        background:#ECECEC;
        border-radius: 8px;
        margin-right: 10px;
    }
</style>
