// index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
// 在components中创建Home.vue组件,name为文件名'Home'
// 在此处导入该组件

//按需加载组件： const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
//把JS文件分模块，安需加载，而不是，整个都加载。 
//'@/page/login':   webpac的簡化，表示 src/page/login.

import Home from '../src/components/Home.vue'
import tree from '../views/tree.vue'   
import pop_up from '../views/pop-up.vue'   
import dialog from '../views/dialog.vue'   
import form_validate from '../views/form_validate.vue'   
import options from '../views/options.vue'  
import dialog2 from '../views/dialog/input_dialog.vue'
import menu from '../views/menu_test.vue'
import learn_props from '../views/learning_props.vue'
import debug_test from '../views/debug_test.vue'
// import QRCode from '../src/components/QRCode.vue'
import goods from '../views/goods.vue'
// import sign_page from '../views/sign_page.vue'
// r就是resolve
//(基于webpack的require.ensure技术 实现更加不同的chunkname 合并打包为一个js文件)
// const sign_page = r => require.ensure([], () => r(require('@/views/sign_page')), 'sign_page');


Vue.use(VueRouter)
 
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:"/home",
            component:Home
        },
        {
            path:"/tree",
            component:tree
        },
        {
            path:"/pop_up",
            component:pop_up
        },
        {
            path:"/dialog",
            component:dialog
        },
        {
            path:"/form_vali",
            component:form_validate
        },
        {
            path:"/options",
            component:options
        },
        {
            path:"/dialog2",
            component:dialog2
        },
        {
            path:"/menu",
            component:menu
        },
        {
            path:"/props",
            component:learn_props
        },
        {
            path:"/debug_test",
            component:debug_test
        },
        {
            path:"/goods",
            component:goods
        },
        // 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
        {
            path:"/sign_page",
            // component:sign_page
            component: sign_page => require(['../views/sign_page'], sign_page)
        },
        {
            path:"/manager_login",
            // component:manager_login
            component: manager_login => require(['../views/manager_login'], manager_login)
        },
    ]
})
 
export default router  // 将其暴漏  其他组件就可以导入router