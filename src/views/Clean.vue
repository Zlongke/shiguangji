<template>
    <div>
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
    name:'Clean',
    data() {
        return {
            title:'清洁'
        }
    },
    mounted() {
        this.$emit('toTitle',this.title)
    },

}
</script>

<style scope="">
article:nth-of-type(1){
    margin-top: 46px;
}
   article{
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-around;
}
article figure{
    margin:10px 5px;
    height: 190px;
    width:152px;
    display: flex;
    flex-direction: column;

} 
article figure span{
    width:152px;
    height: 152px;
    border:1px solid #BBBBBB;
}
article figcaption{
    font-size: 12px;
    color: #101010;
    line-height: 17px;
    text-align: center;
}
</style>