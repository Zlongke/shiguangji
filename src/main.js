// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store';
import VueAMap from 'vue-amap';


import {
  ImagePreview
} from 'vant';



import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css';
Vue.use(Share)



Vue.use(Vant);


Vue.use(Vant);
Vue.use(ImagePreview);
Vue.config.productionTip = false;

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '15998df39bf1d8cbabebe10e9elec6c169',
  plugin: ['AMap.Geolocation'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: {
    App
  },
  template: '<App/>'
})


