import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import highlight from './plugins/highlight';
import 'highlight.js/styles/qtcreator-light.css';
createApp(App).use(highlight).mount('#app')
