<template>
    <div>
        <header>
            <van-nav-bar  @click-left="onClickLeft" title="" left-text="" left-arrow>
            </van-nav-bar>
        </header>
        <section>
            <article>
                <img src="">
                <div>
                    <p>宝宝秋冬加棉保暖套装</p>
                    <p>￥999</p>
                </div> 
            </article>
            <div class="num">
               <span>数量</span> 
               <van-stepper input-width="60px" v-model="value" />            
            </div>
             <div class="size" @click="nextStep">
               <span>尺寸</span> 
               <van-steps :active="active">
                <van-step>30cm</van-step>
                <van-step>40cm</van-step>
                <van-step>50cm</van-step>
                <van-step>60cm</van-step>
                <van-step>70cm</van-step>
                </van-steps>          
            </div>
              <div class="color">
               <span>颜色</span> 
               <div>
                    <van-checkbox v-model="checked" checked-color="#07c160"></van-checkbox> 
                    <van-checkbox v-model="checked" checked-color="red"></van-checkbox>     
                    <van-checkbox v-model="checked" checked-color="blue"></van-checkbox>     
                    <van-checkbox v-model="checked" checked-color="#07c160"></van-checkbox>         
               </div>
             
            </div>
             <div class="addressed">
               <span>地址</span> 
               <van-cell-group>
                    <van-field @click="dizhi" v-model="value" placeholder="请输入用户名" />
                </van-cell-group>
             <van-popup class="address" v-model="show">
                  <van-address-edit
                    :area-list="areaList"
                    show-postal
                    show-delete
                    show-set-default
                    show-search-result
                    :search-result="searchResult"
                    @save="onSave"
                    @delete="onDelete"
                    @change-detail="onChangeDetail"
                    />           
             </van-popup>
               
            </div>
            <van-button type="primary" size="large">确认</van-button>
        </section>
    </div>
</template>

<script>
import areaList from '@/assets/area';
export default {
    name:'Addcart',
    data() {
        return {
            value: 1,
            active: 1,
            checked:true,
            show:false,
            areaList,
            searchResult: []
        }
    },
     methods: {
          nextStep() {
            this.active = ++this.active % 5;
            },
          dizhi(){
                this.show = !this.show
            },
        onClickLeft(){
            this.$router.go(-1)
        },
         onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  
    },
  
}
</script>
<style scope="">
.address{
    width:100%;
}

    section{
        padding: 0px 10px;
    }
    article{
        display: flex;
        flex-direction: column;
    }
    article img{
        width:100%;
        height: 380px;
        background: yellowgreen;
    }
    article div{
        display: flex;
        justify-content: space-between;
    }
    article div p:nth-of-type(1){
        font-size: 16px;
        color: #646464;
        line-height: 24px;
    }
     article div p:nth-of-type(2){
        font-size: 14px;
        color: #646464;
        line-height: 20px;
    }
    .num{
        margin: 10px 0px;
        display: flex;
    }
    span{
        width:56px;
        height:34px;
        font-size: 14px;
        color: #6A6A6A;
        line-height: 20px;
    }
    .color div{
        margin-top: 2px;
        display: flex;
        justify-content: space-around;
    }
</style>
