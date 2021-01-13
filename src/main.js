import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BaseInput from './components/UI/BaseInput.vue'
import BaseWrapper from './components/UI/BaseWrapper.vue'
import ConfirmButton from './components/UI/ConfirmButton.vue'
import BaseSelection from './components/UI/BaseSelection.vue';
import RecipeDisplay from './components/display/RecipeDisplay.vue';

const app = createApp(App);

app.component("base-input", BaseInput);
app.component("base-wrapper", BaseWrapper);
app.component("confirm-button", ConfirmButton);
app.component("base-selection", BaseSelection);
app.component("recipe-display", RecipeDisplay);

app.use(router)

app.mount('#app')
