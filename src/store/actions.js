import router from "@/router";
import axios from 'axios';

var actions = {
  login({
    commit
  }, {
    username,
    password
  }) {
    console.log(username, password)
    axios({
      method: "get",
      url: '/ssm-1.0/user/login.do',
      params: {
        name: username,
        password: password
      }
    }).then(function (data) {
      console.log(data.data);
      commit('login', username);
      //router.push('/home');
    })
  }
}

export default actions;
