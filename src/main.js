import { createApp } from 'vue';
import router from './router';
import store from './store';
import vesselize from './vesselize';
import App from './App.vue';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(vesselize);

app.mount('#app');
