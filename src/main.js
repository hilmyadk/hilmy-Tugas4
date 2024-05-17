import { createApp } from 'vue';
import App from './App.vue';
import MacOS from './components/MacOS.vue';
import Windows from './components/Windows.vue';
import Linux from './components/Linux.vue';

const app = createApp(App);

app.component('MacOS', MacOS);
app.component('Windows', Windows);
app.component('Linux', Linux);

app.mount('#app');

