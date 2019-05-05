import router from "@/router";
import axios from 'axios';

var actions = {
  login({
    commit
  }, username, password) {
    axios({
      url: 'http://jx.xuzhixiang.top/ap/api/login.php',
      params: {
        username: username,
        password: password
      }
    }).then(function (data) {
      console.log(data.data);
      commit('login', username);
      router.push('/home');
    })
  }
}

export default actions;
