export default {
  changeCity (ctx, city) {
    // 第一个参数之所以是 ctx 是因为可以获取 commit
    ctx.commit('changeCity', city)
  }
}
