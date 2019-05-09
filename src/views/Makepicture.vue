<template>
    <div>
        <van-row type="flex" justify="space-around">
            <van-col span="10">
                <div id="make">
                    <p>{{pic}}</p>
                        
                    <div>
                        <p><span>{{price}}</span><span class="icon"><van-icon name="like-o" /></span></p>
                      
                    </div>
                </div>
            </van-col>
            <van-col span="10">
                <div id="make">
                    <p>宝宝成长相册</p>                
                    <div>
                        <p><span>¥199.9</span><span class="icon"><van-icon name="like-o" /></span></p>            
                    </div>
                </div>
            </van-col>
        </van-row>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'Makepicture',
    data() {
        return {
            title:'制作相册',
            pic:'宝宝成长相册',
            price:'¥199.9'
        }
    },
    mounted() {
        this.$emit('toTitle',this.title);
        var _this = this;
        axios({
            method:"get",
            url:'/ssm-1.0/photolist/addphotolist.do',
            params:{u_id:1}
        }).then((data)=>{
            console.log(data.data.data)
        })
    },

}
</script>
<style scoped>
    #make{
        position: relative;
        padding: 10px;
        margin-top: 50px;
        width:147px;
        height: 180px;
        border-radius: 8px;
        background: #F7F7F7;
    }
    #make p{
        font-size: 14px;
        color: #666666;
    }
    #make div p{
        margin-top: 140px;
       display: flex;
       justify-content: space-between;
    }
</style>
