import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

const appInstance = createApp(App);
appInstance.use(router);
appInstance.mount('#app');
