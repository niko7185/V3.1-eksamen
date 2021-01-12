import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BaseInput from './components/UI/BaseInput.vue'
import BaseWrapper from './components/UI/BaseWrapper.vue'
import ConfirmButton from './components/UI/ConfirmButton.vue'

const app = createApp(App);

app.component("base-input", BaseInput);
app.component("base-wrapper", BaseWrapper);
app.component("confirm-button", ConfirmButton);

app.use(router)

app.mount('#app')
