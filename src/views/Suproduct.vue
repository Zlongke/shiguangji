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
    padding:0 0.1rem;
}
.banner{
    font-size: 0.14rem;
    margin-top: 0.46rem;
    width:3.48rem;
    height: 1.5rem;
    background: #A6A4A4;
    border-radius: 0.12rem;
}
.coupon{
    font-size: 0.12rem;
    width:3.48rem;
    margin: 0.05rem 0;
    height: 0.5rem;
    background: #D9D9D9;
    border-radius: 0.12rem;
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
    height:0.44rem;
    width:0.44rem;
    font-size: 0.15rem;
    border-radius: 0.2rem;
    background: #D9D9D9;
}
#contain #snav figcaption{
    margin: 0.1rem 0px;
    width: 0.65rem;
    height: 0.24rem;
    background: #F8F8F8;
    line-height: 0.24rem;
    text-align: center;
    font-size: 0.12rem;
     color:#A6A4A4;
}
#contain .baby{
    display: flex;
    margin-top:0.3rem;
    justify-content: space-between;
    font-size: 0.14rem;
    color:#777676;
}
article{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
article figure{
    margin:0.1rem 0.05rem;
    height: 1.15rem;
    width:0.88rem;
    display: flex;
    flex-direction: column;

} 
article figure span{
    width:0.86rem;
    height: 0.86rem;
    border:1px solid #BBBBBB;
}
article figcaption{
    font-size: 0.12rem;
    color: #101010;
    line-height: 0.17rem;
    text-align: center;
}
</style>
