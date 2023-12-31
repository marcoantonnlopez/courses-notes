import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from "@tanstack/vue-query";

import './assets/main.css'

// createApp(App)
//   .use(VueQueryPlugin)
//   .use(router)
//   .mount('#app');

const app = createApp(App);

VueQueryPlugin.install(app,{
  queryClientConfig:{
    defaultOptions:{
      queries:{
        cacheTime: 1000 * 120,
        refetchOnReconnect: 'always',
      },
    }
  }
})

app.use(router)
app.mount('#app');
