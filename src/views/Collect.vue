<template>
    <div id="container">
        <van-row type="flex" justify="space-around">
             <van-col span="10">
                   <div id="subnav">
                    <img src="" />
                    <p class="name">{{name}}</p>
                    <p class="title">{{time}}</p>
                    <span>
                        <van-rate v-model="value"  icon="like"  void-icon="like-o" :count="1" />
                    </span>
                </div>
             </van-col>
            <van-col span="10">
                <div id="subnav" >
                    <img src="" />
                    <p class="name">{{name}}</p>
                    <p class="title">{{time}}</p>
                     <span>
                        <van-rate v-model="value"  icon="like"  void-icon="like-o" :count="1" />
                    </span>
                </div>
              
            </van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    name:'Collect',
    data() {
        return {
            title:'我的收藏',
            name:'小坚果大能量',
            time:'2018.09.20',
            value:true,
        }
    },
    mounted() {
        this.$emit('toTitle',this.title)
    },

}
</script>
<style scoped>
    #container{
        margin-top: 46px;
    }
    #subnav{
        position: relative;
        margin: 10px 0px;
        width:150px;
        height: 180px;
        background: #E6E6E6;
    }
     #subnav img{
         width:15vw;
         height: 10vh;
         border-bottom: 1px solid #BBBBBB;
     }
     #subnav p{
         font-size: 12px;
         color: #646464;
         height: 30px;

     }
      #subnav p:nth-of-type(2){
         position: absolute;
         bottom: 10px;
        left: 10px;
     }
     #subnav span{
         position: absolute;
         bottom: 10px;
         right: 10px;
     }
</style>
