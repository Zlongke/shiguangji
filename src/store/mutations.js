var mutations = {
  login(state, username) {
    state.username = username;
  },
  upload(state, str) {
    state.img = str;
  },
  adduid(state, u_id) {
    state.u_id = u_id
  }

}

export default mutations;
