<template>
    <div>
        <AttenHead :name="title"/>
        <div class="contianer">
            <router-view @toTitle="tap"></router-view>
        </div>
    </div>
</template>
<script>
import AttenHead from '@/components/AttenHead'
export default {
    name:'lifecommon',
    components:{
        AttenHead,
    },
    data() {
        return {
            title:'社区'
        }
    },
    methods: {
        tap(msg){
            this.title= msg
        }
    },
}
</script>

<style scope="">

</style>