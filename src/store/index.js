import Vue from 'vue'
import Vuex from 'vuex'
import headerModule from './Modules/headerModule'
Vue.use(Vuex)

const store = new Vuex.Store({

    modules: {
        headerModule,
    }
})
export default store;