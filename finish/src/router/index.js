import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/pages/Login"
import Home from "@/pages/Home"
import Register from "@/pages/Register"
import Userinfo from "@/pages/Userinfo"
import LogReg from "@/pages/LogReg"

Vue.use(VueRouter)

const routes = [
    {
        name:"logreg",
        path:"/logreg",
        component:LogReg,
        children:[
            {
                path:"register",
                component:Register
            },
            {
                path:"login",
                component:Login
            },
        ]
    },

    {
        name:"home",
        path:"/home",
        component:Home,
        children:[
            {
                path:"userinfo", 
                component:Userinfo
            }
        ]
    },
 

    {
        path:"*",
        redirect:"/logreg/login"
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
