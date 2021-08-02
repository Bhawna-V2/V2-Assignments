import { createApp } from 'vue'
import App from './App.vue'
import '../src/app.css'
import PulseLoader from './PulseLoader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from "./routes"
import store from './store'




const app = createApp(App)
// app.component('login-component', Login);
// app.component('dashboard-component', Dashboard);
app.component('PulseLoader', PulseLoader);
app.use(router);
app.use(store);
// createApp(App).mount('#app')
app.mount('#app');
