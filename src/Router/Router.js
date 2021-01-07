import Vue from 'vue';
import vueRouter from 'vue-router';
import createContact from '../components/CreateContact';
import login from '../components/Login';
import emplist from '../components/EmpList'
import Vtable from '../components/Vtable'
import validations from '../components/Validations'
import Parent from '../components/PropsEmit/Parent'
Vue.use(vueRouter);
export default new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: login
        },
        {
            path: '/create',
            name: 'CreateContact',
            component: createContact
        },
        {
            path: '/emplist',
            name: 'EmpList',
            component: emplist
        },
        {
            path: '/vtable',
            name: 'Vtable',
            component: Vtable
        },
        {
            path: '/validations',
            name: 'validations',
            component: validations
        },
        {
            path: '/Parent',
            name: 'Parent',
            component: Parent
        },



    ]

})