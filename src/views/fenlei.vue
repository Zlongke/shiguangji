<template>
  <div class="flq">
    <ul class="f1">
      <h3>孕期</h3>
      <li>
        <p></p>
        <span>孕早期</span>
      </li>
      <li>
        <p></p>
        <span>孕中期</span>
      </li>
      <li>
        <p></p>
        <span>孕晚期</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<script>
export default {};
</script>
<style scoped>
.flq {
  width: 100%;
  height: 100%;
  background: yellow;
  float: right;
}
.biaoti {
  height: 500px;
  width: 110px;
  background: turquoise;
  float: right;
}
.f1 {
  width: 300px;
  height: 170px;
  border-bottom: 1px solid #000;
  float: right;
}
.f1 li {
  display: flex;
  flex-direction: column;
  float: left;
}
.f1 li p {
  width: 80px;
  height: 80px;
  background: tomato;
  margin-left: 10px;
  float: right;
}
.f1 li span {
  width: 80px;
  height: 14px;
  margin-left: 10px;
  text-align: center;
  display: block;
  background: chartreuse;
}
</style>
