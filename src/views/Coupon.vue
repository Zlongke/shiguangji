<template>
    <div id="youhui" >
        
        <div v-for="(item,index) in list" :key="index">
        <!-- 优惠券单元格 -->
            <van-coupon-cell
            class="yhj"
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
            />
      
            <!-- 优惠券列表 -->
            <van-popup v-model="showList" position="bottom">
            <van-coupon-list
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                :disabled-coupons="disabledCoupons"
                @change="onChange"
                @exchange="onExchange"
            />
            </van-popup>
        </div>
    </div>
</template>
<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: 'name',
  startAt: 1589104000,
  endAt: 1604592000,
  valueDesc: '1.5',
  unitDesc: '元'
};

import axios from "axios"
export default {
    name:'Coupon',
    data() {
        return {
            title:'优惠劵',
            list:[],
            showList:false,
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon]
        }
    },
    methods: {
         onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
        onExchange(code) {
            this.coupons.push(coupon);
            }
    },
    mounted() {
        this.$emit('toTitle',this.title);
        var _this = this;
        axios({
            method:"get",
            url:'/ssm-1.0/coupon/all.do',
            params:{u_id:1}
        }).then((data)=>{
            console.log(data.data.data)
            _this.list = data.data.data
        })

    },

}
</script>
<style scoped>
    #youhui{
        margin-top: 50px;
    }
    .yhj{
        margin: 20px 0px;
        background: #EEEEEE;
    }
</style>
