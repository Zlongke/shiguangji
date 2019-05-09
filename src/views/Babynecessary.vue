<template>
    <div>
        <h2>宝宝必备</h2>
        <article @click="detail()">
            <img src="" width="111px" height="108px">
            <div>
                <p>全球500强选材的纸尿裤</p>
                <p>德国巴斯夫、日本住友吸水高分子</p>
                <p>会员价：￥990</p>
                <p>宝马亲测：真的很好用，不但薄而且吸收量很大，还没有红屁屁...</p>
            </div> 
        </article>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Babynecessary',
    data() {
        return {
            title:'宝宝必备',
        
        }
    },
    methods: {
       detail(){
           this.$router.push('/detail')
       }
    },
    mounted() {
       var  _this = this;
       axios({
           method:"get",
           url:'ssm-1.0/my/head.do',
           params:{u_id:1}
       }).then((data)=>{
           console.log(data.data.data)
       })

    },
}
</script>
<style scope="">
    h2{
        margin-top: 46px;
        width:100%;
        height: 130px;
        background: #EAEAEA 100%;
    }
article{
    border-radius: 12px;
    height: 149px;
    padding: 0 10px;
    margin:0px 10px 10px 10px;
    background: #DFDFDF 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
article div{
    padding-left: 10px
} 
p:nth-of-type(1){
    font-size: 14px;
    color:#777676;
    line-height: 20px;
    height: 24px;
}
p:nth-of-type(2){
    font-size: 12px;
    color:#777676;
    line-height: 17px;
    height: 24px;
}
p:nth-of-type(3){
    font-size: 10px;
    color:#777676;
    line-height: 15px;
    height: 24px;
}
p:nth-of-type(4){
    font-size: 8px;
    color:#A6A6A6;
    line-height: 12px;
    height: 24px;
}
</style>