var mutations = {
  login(state, {
    username,
    password
  }) {
    state.username = username;
    state.password = password;
  },
  upload(state, str) {
    state.img = str;
  }
}

export default mutations;
