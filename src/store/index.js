import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
// vue 里面使用插件都是使用 Vue.use(插件名称)
Vue.use(Vuex)

export default new Vuex.Store({
  // store 里面必须有个 state 内容，在我们的首页里面有个城市的内容，所以我们在 state 里面存放的是 city 内容
  state,
  actions,
  mutations
})
