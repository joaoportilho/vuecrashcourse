import './assets/main.css'

import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import 'primeicons/primeicons.css';
var http = "http://localhost:5000";
const app = createApp(App)

app.use(router);
app.use(Toast);
app.use(http);

app.mount('#app')
