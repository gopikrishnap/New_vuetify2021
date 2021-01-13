import Vue from 'vue';
import vueRouter from 'vue-router';
import createContact from '../components/CreateContact';
import login from '../components/Login';
import emplist from '../components/EmpList'
import vtable from '../components/Vtable'
import validations from '../components/VueForms/Validations.vue'
import Fileter from '../components/VueForms/Fileter.vue'
import Parent from '../components/PropsEmit/Parent'
import AddInputboxs from '../components/AddInputboxs'

import menubar from '../components/VueForms/MenuBar'
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
            component: vtable
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
        {
            path: '/addinputbox',
            name: 'addinputbox',
            component: AddInputboxs
        },
        {
            path: '/Fileter',
            name: 'Fileter',
            component: Fileter
        },
        {
            path: '/menubar',
            name: 'menubar',
            component: menubar

        }


    ]

})