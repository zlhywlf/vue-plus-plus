import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'

const app = createApp(App)
router.setup(app)
store.setup(app)
app.mount('#app')
