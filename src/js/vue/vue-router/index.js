import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import OrdersPage from '../vue-components/account/orders-page.vue'
import PayersPage from '../vue-components/account/payers-page.vue'
import PersonaDataPage from '../vue-components/account/personal_data-page.vue'
import SharesPage from '../vue-components/account/shares-page.vue'
import ContactUsPage from '../vue-components/account/contact_us-page.vue'
import SubscriptionsPage from '../vue-components/account/subscriptions-page.vue'

//middleware


export default new VueRouter({
    routes: [
        {
            path: '/account',
            redirect: '/orders',
            name: 'account',
        },
        {
            path: '/orders',
            component: OrdersPage,
            name: 'account-order'
        },
        {
            path: '/payers',
            component: PayersPage,
            name: 'account-payers'
        },
        {
            path: '/personal-data',
            component: PersonaDataPage,
            name: 'account-data'
        },
        {
            path: '/contact-us',
            component: ContactUsPage,
            name: 'account-contact'
        },
        {
            path: '/carts-block',
            component: SharesPage,
            name: 'account-carts-block'
        },
        {
            path: '/subscriptions',
            component: SubscriptionsPage,
            name: 'account-subscriptions'
        },
    ],
});