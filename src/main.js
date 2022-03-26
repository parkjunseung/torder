import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import { router } from './router';
import dayjs from 'dayjs';

createApp(App)
	.use(store)
  .use(router)
  .use(dayjs)
  .mount('#app')
