<template>
    <div class="container">
        <div><span></span><van-cell class="order" title="全部" icon="location-o" /></div>
       
        <van-cell class="order" title="待付款" icon="location-o" />
        <van-cell class="order" title="待收货" icon="location-o" />
        <van-cell class="order" title="待发货" icon="location-o" />
        <van-cell class="order" title="已完成" icon="location-o" />
        <van-cell class="order" title="评价" icon="location-o" />
        <van-cell class="order" title="退货/售后" icon="location-o" />

     
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
         
    },
    mounted() {
        this.$emit('toTitle',this.title)
    },

}
</script>
<style scoped>
    .container{
        margin-top: 55px;
    }
    .container span{
        display: flex;
        width:35px;
        height: 35px;
        background: #ECECEC;
    }
    .order{
        height: 66px;
        line-height: 46px;
        font-size: 14px;
    }
</style>
