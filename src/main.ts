/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

//Routes
import router from './routes'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(router)

app.mount('#app')
