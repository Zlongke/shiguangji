<template>
    <div id="contain"> 
        <aside class="banner" @click="detail()">
             <h2>优品</h2>
        </aside>
       
        <div class="coupon">
            <P>优惠劵</P>
        </div>
        <div id="snav">
            <figure @click="clean()">
                <span class="icon"></span>
                <figcaption>清洁</figcaption>
            </figure>
             <figure>
                <span class="icon"></span>
                <figcaption>喂养</figcaption>
            </figure>
             <figure>
                <span class="icon"></span>
                <figcaption>童装</figcaption>
            </figure>
             <figure>
                <span class="icon"></span>
                <figcaption>更多</figcaption>
            </figure>
        </div>
         <div class="baby">
            <p>宝宝必备</p>
            <p>all</p>
        </div>
        <article>
              <figure>
                <span class="icon"></span>
                <figcaption>
                    <p>一片吸干八次尿</p>
                    <p>会员价￥999</p>
                </figcaption>
            </figure>
            <figure>
                <span class="icon"></span>
                <figcaption>
                    <p>一片吸干八次尿</p>
                    <p>会员价￥999</p>
                </figcaption>
            </figure>
            <figure>
                <span class="icon"></span>
                <figcaption>
                    <p>一片吸干八次尿</p>
                    <p>会员价￥999</p>
                </figcaption>
            </figure>
            <figure>
                <span class="icon"></span>
                <figcaption>
                    <p>一片吸干八次尿</p>
                    <p>会员价￥999</p>
                </figcaption>
            </figure>
        </article>
    </div>
</template>
  
<script>
export default {
    name:'Suproduct',
   data() {
       return {
           title:'优品'
       }
   },
   methods: {
       detail(){
           this.$router.push('/detail')
       },
       clean(){
           this.$router.push('/clean')
       }
   },
   mounted() {
       this.$emit('toTitle',this.title)
   },
}
</script>

<style scope="">

#contain{
    display: flex;
    flex: 1;
    flex-direction: column;
    /* width:348px; */
    margin:0 auto;
    padding:0px 10px;
}
.banner{
    margin-top: 46px;
    width:348px;
    height: 150px;
    background: #A6A4A4 100%;
    border: 1px solid #FFFFFF 0%;
    border-radius: 12px;
}
.coupon{
    width:348px;
    margin: 5px 0;
    height: 50px;
    background: #D9D9D9 100%;
    border-radius: 12px;
}

#contain #snav{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#contain #snav figure{
	display: flex;
	flex-direction: column;
    align-items:center;
    justify-content: space-around;  
}
#contain #snav figure .icon{
    height:44px;
    width:44px;
    font-size: 15px;
    border-radius: 20px;
    background: #D9D9D9;
}
#contain #snav figcaption{
    margin: 10px 0px;
    width: 65px;
    height: 24px;
    background: #F8F8F8;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
     color:#A6A4A4;
}
#contain .baby{
    display: flex;
    margin-top:30px;
    justify-content: space-between;
    font-size: 14px;
    color:#777676;
}
article{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
article figure{
    margin:10px 5px;
    height: 115px;
    width:88px;
    display: flex;
    flex-direction: column;

} 
article figure span{
    width:86px;
    height: 86px;
    border:1px solid #BBBBBB;
}
article figcaption{
    font-size: 12px;
    color: #101010;
    line-height: 17px;
    text-align: center;
}
</style>
