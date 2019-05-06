<template>
   <van-nav-bar
        :title="name"
        left-text=""
        right-text=""
         fixed
        left-arrow
        @click-left="onClickLeft"
        />
</template>
<script>
export default {
    name:'MineHead',
    props:['name'],
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped>

</style>
