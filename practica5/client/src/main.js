import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import App from './App.vue'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


const  app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
app.use(Toast);