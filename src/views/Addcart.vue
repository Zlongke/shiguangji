<template>
  <div>
    <header>
      <van-nav-bar fixed @click-left="onClickLeft" title left-text left-arrow></van-nav-bar>
    </header>
    <section>
      <article>
        <img :src="detail.pimg">
        <div>
          <p>{{detail.pname}}</p>
          <p>￥{{detail.pprice}}</p>
        </div>
      </article>
      <div class="num">
        <span>数量</span>
        <van-stepper input-width="60px" v-model="value"/>
      </div>
      <div class="size" @click="nextStep">
        <span>尺寸</span>
        <van-steps :active="active">
          <van-step>30cm</van-step>
          <van-step>40cm</van-step>
          <van-step>50cm</van-step>
          <van-step>60cm</van-step>
          <van-step>70cm</van-step>
        </van-steps>
      </div>
      <div class="color">
        <span>颜色</span>
        <div>
          <van-checkbox v-model="checked" checked-color="#07c160"></van-checkbox>
          <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
          <van-checkbox v-model="checked" checked-color="blue"></van-checkbox>
          <van-checkbox v-model="checked" checked-color="#07c160"></van-checkbox>
        </div>
      </div>
      <div class="addressed">
        <span>地址</span>
        <p @click="dizhi" style="height:50px">河南省郑州市中原区</p>
        <van-popup class="address" v-model="show">
          <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
          />
        </van-popup>
      </div>
      <van-button @click="add(detail.pid)" type="primary" size="large">确认</van-button>
    </section>
  </div>
</template>

<script>
import areaList from "@/assets/area";
import axios from "axios";
export default {
  name: "Addcart",
  data() {
    return {
      value: "1",
      active: 1,
      checked: true,
      show: false,
      areaList,
      searchResult: [],
      detail: "",
      list: {}
    };
  },
  methods: {
    add(id) {
      console.log(this.value);
      var num = this.value;
      axios({
        method: "get",
        url: "http://jx.xuzhixiang.top/ap/api/add-product.php",
        params: { uid: 5484, pid: id, pnum: num }
      }).then(data => {
        console.log(data.data);
        this.$router.push("/cart");
      });
    },
    nextStep() {
      this.active = ++this.active % 5;
    },
    dizhi() {
      this.show = !this.show;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave(content) {
      this.list = content;
      console.log(this.list);
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
  mounted() {
    var _this = this;
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/detail.php",
      params: { id: _this.$route.query.id }
    }).then(data => {
      console.log(data.data.data);
      _this.detail = data.data.data;
    });
  }
};
</script>
<style scoped>
.address {
  width: 100%;
}

section {
  padding: 0.1rem 0.1rem;
}
article {
  display: flex;
  flex-direction: column;
}
article img {
  height: 3rem;
}
article div {
  display: flex;
  justify-content: space-between;
}
article div p:nth-of-type(1) {
  font-size: 16px;
  color: #646464;
  line-height: 24px;
}
article div p:nth-of-type(2) {
  font-size: 14px;
  color: #646464;
  line-height: 20px;
}
.num {
  margin: 10px 0px;
  display: flex;
}
span {
  width: 56px;
  height: 34px;
  font-size: 14px;
  color: #6a6a6a;
  line-height: 20px;
}
.color div {
  margin-top: 2px;
  display: flex;
  justify-content: space-around;
}
</style>
