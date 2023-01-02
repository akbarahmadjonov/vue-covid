import Vue from 'vue'
import VueRouter from 'vue-router'

import Header from '@/components/Header'
import aboutUs from '@/components/aboutUs'

Vue.use(VueRouter)


const routes = [
	{ path: '/Header', name: 'Header', component: Header},
	{ path: '/aboutUs', name: 'aboutUs', component: aboutUs}
]


const router = new VueRouter({ routes })

export default router

// We'll use this component later, when we need Vue-router =>