<template>
    <div>
        <MineHead :name="title"/>
        <router-view @toTitle="tap"></router-view>
    </div>
</template>
<script>
import MineHead from '@/components/MineHead'
export default {
    name:'Minepublic',
    components:{
        MineHead
    },
    data() {
        return {
            title:'会员中心',
        }
    },
    methods: {
        tap(msg){
            this.title = msg
        }
    },  
}
</script>

<style scoped>

</style>
