import Vue from 'vue'
import vuex from 'vuex'
import nav from './modules/nav'

Vue.use(vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new vuex.Store({
    state:{
        show:false,
        modules: {
        	nav
        }
    }
})