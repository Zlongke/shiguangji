<template>
    <div>
        <h1>优惠劵</h1>
    </div>
</template>
<script>
export default {
    name:'Coupon',
    data() {
        return {
            title:'优惠劵'
        }
    },
    mounted() {
        this.$emit('toTitle',this.title)
    },

}
</script>
<style scoped>

</style>
