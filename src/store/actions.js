import router from "@/router";
import axios from 'axios';

var actions = {
  login({
    commit
  }, {
    username,
    password
  }) {
    //console.log(username, password)
    axios({
      method: "get",
      url: '/ssm-1.0/user/login.do',
      params: {
        name: username,
        password: password
      }
    }).then(function (data) {
      //console.log(data.data);
      var uid = data.data.data.u_id
      commit('login', username);
      commit('adduid', uid)
      if (data.data.code == 1000) {
        router.push('/home');
      }

    })
  }
}

export default actions;
