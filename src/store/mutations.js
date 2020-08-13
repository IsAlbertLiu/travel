export default {
  changeCity (state, city) {
    // 改变 state 里面的 city
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {}
  }
}
