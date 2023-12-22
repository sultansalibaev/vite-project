import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import components from "./components/ui"

const app = createApp(App);

components.forEach(component => {
    if (component.name) app.component(component.name, component)
});

app.mount('#app');
