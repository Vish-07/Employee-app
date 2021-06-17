import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'

import Form from './components/Form.vue'


const app = createApp(App)
app.component('Form',Form)
app
  .use(store)
  .use(router)

  .mount("#app");
