import { createApp } from 'vue';
import App from './App.vue';
import Appwrite from 'appwrite';

const appwrite = new Appwrite();

appwrite
  .setEndpoint('YOUR_APPWRITE_ENDPOINT')
  .setProject('YOUR_APPWRITE_PROJECT_ID');

const app = createApp(App);

app.config.globalProperties.$appwrite = appwrite;

app.mount('#app');
