<template>
    <div>
         <article>
              <figure v-for="(item,index) in clean" :key="index">
                <span class="icon"><img :src="item.picture"/></span>
                <figcaption>
                    <p>{{item.title}}</p>
                    <p>会员价￥{{item.price}}</p>
                </figcaption>
            </figure>
        </article>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'Clean',
    data() {
        return {
            title:'清洁',
            clean:''
        }
    },
    mounted() {
        this.$emit('toTitle',this.title);
        var _this = this;
        axios({
            method:"get",
            url:'/ssm-1.0/qj/selectall.do',
            params:{u_id:1}
        }).then((data)=>{
            console.log(data.data.data)
            _this.clean = data.data.data
        })
    },

}
</script>

<style scope="">
article:nth-of-type(1){
    margin-top: 0.46rem;
}
   article{
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-around;
}
article figure{
    margin:0.1rem 0.5remx;
    height: 1.9rem;
    width:1.52rem;
    display: flex;
    flex-direction: column;

} 
article figure span img{
    width:1.52rem;
    height: 1.52rem;
    border:0.01rem solid #BBBBBB;
}
article figcaption{
    font-size: 0.12rem;
    color: #101010;
    line-height: 0.17rem;
    text-align: center;
}
</style>