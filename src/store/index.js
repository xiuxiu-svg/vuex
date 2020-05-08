import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 新建一个vuex实例 用来管理组件共享数据状态
const store = new Vuex.Store({
  state: {
    count: 100
  },

  mutations: {
    increment (state) {
      state.count++
    },
    // increment (state, data) {
    //   state.count += data.count
    // },
    // increment (state, data) {
    //   state.count += data
    // },
    reduce (state) {
      state.count--
    }
    // hello () {
    //   console.log('1')
    // }
  },

  actions: {
    asyncIncrement (context) {
      setTimeout(() => {
        // return context.state.count 错误
        context.commit({
          type:'increment'
        })
        console.log(1)
      },1000)
    }
  }
})
// 不要忘记导出实例
export default store