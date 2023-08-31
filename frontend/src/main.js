import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { socketio_port } from '../../../../sites/common_site_config.json'



import 'primevue/resources/themes/lara-light-indigo/theme.css'
import '../node_modules/primeflex/primeflex.css'

import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Message from 'primevue/message';
import Toast from 'primevue/toast';

import ToastService from 'primevue/toastservice';

import { setConfig, frappeRequest, resourcesPlugin, initSocket } from 'frappe-ui'

let app = createApp(App)
app.use(PrimeVue)

// setConfig('resourceFetcher', (options) => {
//     return frappeRequest({
//         ...options,
//         onError(err) {
//             if (err.messages && err.messages[0]) {
//                 console.log({
//                     title: 'Error',
//                     variant: 'error',
//                     message: err.messages[0],
//                 })
//             }
//         },
//     })
// })
setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(resourcesPlugin)
app.use(ToastService);

// app.provide(
//     '$socket',
//     initSocket({
//         port: socketio_port,
//     })
// )

app.component('Card', Card)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Button', Button)
app.component('Message', Message)
app.component('Toast', Toast)
app.mount('#app')
