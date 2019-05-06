<template>
  <div>
      <header>
        <van-nav-bar
          style="background:#E8E7E7"
          title="我的"
          left-text=""
          right-text="设置"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
        <div class="mine">
          <figure>
              <span></span>
              <figcaption>
                <p>我有一只猫c</p>
                <p>生活达人</p>
              </figcaption>
            </figure>
        </div>
      </header>
      <section>
        <van-row type="flex" justify="center">
          <van-col span="22">
            <div id="title">
                <van-row type="flex" justify="space-around" align="center">
                <van-col span="6">
                  <div>
                    <p>10</p>
                    <p>关注</p>
                  </div>
                </van-col>
                <van-col span="6">
                   <div>
                      <p>99999</p>
                      <p>粉丝</p>
                  </div>
                </van-col>
              </van-row>
            </div>
          </van-col> 
        </van-row>

        <van-row type="flex" justify="center">
          <van-col span="24">
            <div id="check">
                 <van-row type="flex" justify="start">
                    <van-col span="24">
                      <van-cell class="check" to="vipcenter" size="large" title="会员中心" icon="circle" />
                    </van-col>
                  </van-row> 

                   <van-row type="flex" justify="start">
                    <van-col span="24">
                      <van-cell class="check" to="makepicture" size="large" title="制作相册" icon="circle" />
                      <van-cell class="check" to="collect" size="large" title="我的收藏" icon="circle" />
                    </van-col>
                  </van-row> 

                   <van-row type="flex" justify="start">
                    <van-col span="24">
                      <van-cell to="cart" size="large" title="购物车" icon="circle" />
                      <van-cell to="order" size="large" title="我的订单" icon="circle" />
                      <van-cell to="coupon" size="large" title="优惠劵" icon="circle" />
                    </van-col>
                  </van-row> 
      
            </div>
            
          </van-col>
          <van-col span="6">

          </van-col>
          <van-col span="6">

          </van-col>
        </van-row>
      </section>

  </div>
</template>

<script>
export default {
  name:'Mine',
  data() {
    return {
      title:'我的',
       checked: false,
        margin:'10px'
    }
  },
  methods: {
    onClickLeft(){

    },
    onClickRight(){

    }
  },
  mounted() {
    this.$emit('totitle',this.title)
  },

}
</script>

<style scoped>
  .mine{
    width:100%;
    height: 175px;
    background: #E8E7E7;
    border-radius: 0px 0px 200px 200px;
  }
  .mine figure{
     display: flex;
     padding:10px 0px;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     color: #646464;
  }
  .mine figure span{
    width:90px;
    height: 90px;
    border-radius: 50%;
    background: #ffffff;
  }
  .mine figcaption{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mine figcaption p:nth-of-type(1){
    font-size: 14px;
    height: 20px;
    line-height: 20px;  
  }
  .mine figcaption p:nth-of-type(2){
    font-size: 10px;
    height: 20px;
    line-height: 15px;  
  }
  section{
    margin: 0px 2vh;
     color: #646464;
  }
   #title{
    widows: 33.7vw;
    margin-top: 1vh;
    height: 9vh;
    background: #F2F2F2;
    border-radius: 8px;
  }
  #title div p:nth-of-type(1){
    font-size: 12px;
    height: 6vh;
    line-height: 6vh;
  }
 #title div p:nth-of-type(2){
    font-size: 14px;
    height: 2vh;
    line-height:2vh;
  }

 .check van-cell{
    font-size: 14px;
    color: #646464; 
  }
</style>
