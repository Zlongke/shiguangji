<template>
    <div>
        <h1>guowche</h1>
    </div>
</template>
<script>
export default {
    name:'Cart',
    data() {
        return {
            title:'购物车'
        }
    },
    mounted() {
        this.$emit('toTitle',this.title)
    },
}
</script>
<style scoped>

</style>


