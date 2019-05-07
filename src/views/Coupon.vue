<template>
    <div id="youhui">
        
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
</template>
<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1589104000,
  endAt: 1604592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
export default {
    name:'Coupon',
    data() {
        return {
            title:'优惠劵',
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
        this.$emit('toTitle',this.title)
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
