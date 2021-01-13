import Vue from 'vue';
import vueRouter from 'vue-router';
import createContact from '../components/CreateContact';
// import login from '../components/Login';
import emplist from '../components/EmpList'
import vtable from '../components/Vtable'
import validations from '../components/VueForms/Validations.vue'
import Fileter from '../components/VueForms/Fileter.vue'
import Parent from '../components/PropsEmit/Parent'
import AddInputboxs from '../components/AddInputboxs'
import PagiNation from '../components/VueForms/PagiNation.vue'
import DatePicker from '../components/VueForms/DatePicker.vue'
import DOB from '../components/VueForms/DOB'
//import menubar from '../components/Dashboard/DOB'
Vue.use(vueRouter);
export default new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('../components/Login')
        },
        {
            path: '/menubar',
            name: 'menubar',
            component: () => import('../components/Dashboard/MenuBar'),
            children: [
                {
                    path: '/menubar/create',
                    name: 'CreateContact',
                    component: createContact
                },
                {
                    path: '/menubar/emplist',
                    name: 'EmpList',
                    component: emplist
                },
                {
                    path: '/menubar/vtable',
                    name: 'Vtable',
                    component: vtable
                },
                {
                    path: '/menubar/validations',
                    name: 'validations',
                    component: validations
                },
                {
                    path: '/menubar/Parent',
                    name: 'Parent',
                    component: Parent
                },
                {
                    path: '/menubar/addinputbox',
                    name: 'addinputbox',
                    component: AddInputboxs
                },
                {
                    path: '/menubar/Fileter',
                    name: 'Fileter',
                    component: Fileter
                },
                {
                    path: '/menubar/PagiNation',
                    name: 'PagiNation',
                    component: PagiNation
                }, {
                    path: '/menubar/DatePicker',
                    name: 'DatePicker',
                    component: DatePicker
                },
                {
                    path: '/menubar/DOB',
                    name: 'DOB',
                    component: DOB
                }
            ]

        }


    ]

})