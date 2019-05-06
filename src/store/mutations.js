var mutations = {
  login(state, username) {
    state.username = username;
  },
  upload(state, str) {
    state.img = str;
  }
}

export default mutations;
