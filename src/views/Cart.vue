<template>
    <div id="cart">
        <van-row type="flex" justify="center" align="center" class="list">
            <van-col span="2"> <van-checkbox v-model="checked"></van-checkbox></van-col>
          
            <van-col span="22" >
                
                <van-card
                num="2"
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                :thumb="imageURL"
                />
            </van-col>
        </van-row>
         <van-row type="flex" justify="center" align="center" class="list">
            <van-col span="2"> <van-checkbox v-model="checked"></van-checkbox></van-col>
          
            <van-col span="22" >
                
                <van-card
                num="2"
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                :thumb="imageURL"
                />
            </van-col>
        </van-row>

        <van-row type="flex" justify="center" align="center" class="need">
            <van-col span="8">宝宝可能还需要</van-col>
        </van-row>

         <van-row type="flex" justify="space-around">
            <van-col span="6">
                <div id="nav">
                    <img class="img" src="" />
                    <p>1片吸干6次尿</p>
                    <p>会员价￥999</p>
                 </div>
             </van-col>   
              <van-col span="6">
                <div id="nav">
                    <img class="img" src="" />
                    <p>1片吸干6次尿</p>
                    <p>会员价￥999</p>
                 </div>
             </van-col>  
             <van-col span="6">
                <div id="nav">
                    <img class="img" src="" />
                    <p>1片吸干6次尿</p>
                    <p>会员价￥999</p>
                 </div>
             </van-col>           
        </van-row>
       
            <van-row type="flex" justify="center">
                <van-col span="20" >
                    <van-submit-bar
                    class="tijiao"
                    :price="3050"
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
export default {
    name:'Cart',
    data() {
        return {
            title:'购物车',
            checked:'false'
        }
    },
    mounted() {
        this.$emit('toTitle',this.title)
    },
    
}
</script>
<style scoped>
    #cart{
        margin-top: 50px;
        padding: 0px 10px;
    }
    .list{
        padding: 10px 0px;
        background: #ffffff;
        border-bottom:1px solid #EEEEEE;
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


