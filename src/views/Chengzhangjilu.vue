<template>
  <div>
    <Head :name="title"/>
    <div class="container">
      <van-tabs v-model="active" color="#cecece" line-height="2">
        <van-tab title="记录列表">
          <div class="list">
            <p>
              2018.11.11
              <span>30天</span>
            </p>
            <p>体重偏胖，头围偏大，注意饮食</p>
            <p>
              身高50cm
              <span>头围30CM</span>
            </p>
            <p>体重5KG</p>
          </div>
        </van-tab>
        <van-tab title="身高曲线">身高曲线</van-tab>
        <van-tab title="体重曲线">体重曲线</van-tab>
        <van-tab title="头围曲线">头围曲线</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head";
export default {
  components: {
    Head
  },
  data() {
    return {
      title: "成长记录",
      active: 0
    };
  }
};
</script>

<style scoped>
.container {
  margin-top: 46px;
}
.list {
  margin-top: 20px;
  height: 110px;
  width: 98vw;
  margin-left: 1vw;
  background: #e3e3e3;
  border-radius: 12px;
  position: relative;
}
</style>
