<template>
  <div>
    <Head :name="title"/>
    <div class="container">
      <div class="xiangce">
        <van-uploader class="camera" :after-read="onRead" accept="image/*" multiple>
          <img class="image" :src="img">
        </van-uploader>
      </div>
      <van-cell-group class="message">
        <van-field
          v-model="message"
          type="textarea"
          placeholder="上传宝宝从小到大的样子，每一寸时光都是成长的样子..."
          rows="1"
          autosize
        />
      </van-cell-group>
      <van-button @click="addPhoto" class="daoru" round type="danger">开始导入</van-button>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
import axios from "axios";
import qs from "qs";
import Head from "@/components/Head";
import { mapState } from "vuex";
export default {
  components: {
    Head
  },
  data() {
    return {
      title: "时光记",
      message: "",
      img: ""
    };
  },
  /* computed: {
    ...mapState(["img"])
  }, */
  methods: {
    onRead(file) {
      this.img = file.content;
      //this.$store.commit("upload", file.content);
    },
    addPhoto() {
      var _this = this;
      console.log(_this.img);
      axios({
        url: "/ssm-1.0/photolist/addphotolist.do",
        params: { photo: _this.img, time: _this.message, u_id: 1 }
      }).then(data => {
        console.log(data.data.data);
      });
      /* axios({
        method: "post",
        url: "/ssm-1.0/photolist/addphotolist.do",
        data: qs.stringify({ photo: _this.img, time: _this.message, u_id: 1 })
      }).then(data => {
        console.log(data.data);
      }); */
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 46px;
}
.xiangce {
  height: 70vw;
  width: 70vw;
  background: #ccc;
  margin-left: 15vw;
  margin-top: 10vh;
  border-radius: 5vw;
  text-align: center;
  line-height: 70vw;
  position: relative;
}
.image {
  width: 100%;
  height: 100%;
  border-radius: 5vw;
}
.camera {
  width: 100%;
  height: 100%;
  border: none;
}
.message {
  margin-top: 15vw;
}
.daoru {
  margin-top: 15vw;
  width: 50vw;
  margin-left: 25vw;
}
</style>
