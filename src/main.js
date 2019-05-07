// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store';
import {
  ImagePreview
} from 'vant';



import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css';
Vue.use(Share)


import './mockinfo/attention'

Vue.use(Vant);


Vue.use(Vant);
Vue.use(ImagePreview);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
