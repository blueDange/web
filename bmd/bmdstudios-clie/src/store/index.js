import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 此处用于存储全局共享的状态数据
    state: {
        user: null, // user用于存储当前登录用户
    },
    // getters用于提供一些方法，方便的获取state中数据的临时计算结果
    // 类似vue中的计算属性：computed
    getters: {},
    // mutations用于提供一些方法，修改state中的状态数据
    mutations: {
        updateUserInfo(state, payload) {
            // 将用户传过来的登录成功的use对象存入state.user
            state.user = payload
        },
    },
    // actions 用于提供一些方法,异步做了一些耗时任务
    // 修改state中的状态数据
    // (不能直接修改state,而是需要调用mutations中的方法,来修改state)
    actions: {
        // 接收参数,发送登录请求,得到结果后更新state
        // 将login方法定义在此处的好处就是,所有组件都可以随时调用
        login(store, payload) {
            // 执行异步任务,发送请求,得到结果
            // store.commit('updateUserInfo',用户对象)
        },
    },
    modules: {},
})
