import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BaseInput from './components/UI/BaseInput.vue'

const app = createApp(App);

app.component("base-input", BaseInput);

app.use(router)

app.mount('#app')
