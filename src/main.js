import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConf from './routerConf'
import * as filters from './filters'
import FastClick from 'fastclick'
import VueResource from 'vue-resource'

window.FastClick = FastClick

Vue.use(VueRouter)
Vue.use(VueResource)

Object.keys(filters).forEach(item => Vue.filter(item, filters[item]))

let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
})
routerConf(router)

router.beforeEach(transtion => {
    if(transtion.to.auth) {

    } else {
        transtion.next()
    }
})
router.start(App, "app")
