import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        name: "logreg",
        path: "/logreg",
        component: () => import('@/pages/LogReg'),
        children: [
            {   
                name:"register",
                path: "register",
                component: () => import('@/pages/Register')
            },
            {   
                name:"login",
                path: "login",
                component: () => import('@/pages/Login')
            },
        ]
    },

    {
        name: "home",
        path: "/home",
        meta:{auth:true},
        component: ()=>import('@/pages/Home'),
        children: [
            {
                path: "userinfo",
                component:()=>import('@/pages/Userinfo')
            },
     
        ]
    },
    {
        path: "*",
        redirect: "/logreg/login"
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    const token=localStorage.getItem('token');
    if (to.name !== 'login'&&to.name!=='register'&& !token) next({ name: 'login' })
    else next()
  })

export default router
