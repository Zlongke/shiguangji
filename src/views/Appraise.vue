<template>
    <div>
        <header>
            <van-nav-bar  @click-left="onClickLeft" title="评价" left-text="" left-arrow>
            </van-nav-bar>
        </header>
        <section>
            <div class="appra">
                <span>评分</span>
                <van-rate v-model="value" />  
                <span>99.9%好评</span>  
            </div>
            <div class="appras">
                <article>
                <van-button custom-class="app" size="small">全部（9999+）</van-button>
                <van-button size="small">有图（4471）</van-button>
                <van-button size="small">有效实用（134）</van-button>
                </article>
                <article>
                    <van-button size="small">手感好（41）</van-button>
                    <van-button size="small">售后好（1）</van-button>
                    <van-button size="small">追评（4471）</van-button> 
                </article> 
                <article>
                    <van-button size="small">更多</van-button> 
                 </article>     
            </div>
            <div id="pinglun">
                 <article>
                    <div class="apprasd">
                        <span></span>
                        <div> 
                            <p><em>你****说的</em> <em><van-rate size="14" v-model="value" /></em> </p>
                            
                            <p>2018.11.11 11:11</p>
                        </div>
                       
                    </div> 
                    <p>宝贝很好看，手感也好，很柔软，宝宝穿上很舒服</p>
                    <img src="" width="64px" height="64px" >
                   <p>
                       小编回复：感谢您的支持，我们会一如既往的全心问您服务，^-^
                   </p>
                 </article>
            </div>
        </section>
        
    </div>
</template>
<script>
export default {
    name:'Appraise',
    data() {
        return {
            value:2
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scope="">
section{
    margin: 0px 10px;
     color:#646464;
}
    .appra{
        display: flex;
        font-size: 14px;
        color:#646464;
        margin:10px 0px;
    }
    .appras{
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         flex-wrap: wrap;
    }
    .appras article{
       font-size: 14px;
        text-align: center;
        margin:10px 0px;
    }


    .apprasd{
        border-top: 1px solid #D0CFCF;
        padding-top: 20px;
        display: flex;
       font-size: 14px;
    }

    .apprasd em{ font-style: normal;margin-right: 10px;}
    .apprasd span{
        width: 40px;
        height: 40px;
        border: 1px solid #BBBBBB;
        border-radius: 50px;
    }
   .apprasd div p:nth-of-type(1){
       display: flex;
   }
   article p:nth-of-type(1){
       font-size: 12px;
       height: 20px;
       line-height: 20px;
   }
    article p:nth-of-type(2){
       font-size: 14px;
       height: 56px;
       line-height: 20px;
       background: #FFFDFD;
       border: 1px solid #AAAAAA;
   }
</style>