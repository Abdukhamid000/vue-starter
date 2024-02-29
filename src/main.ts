import './style.css'

import Lenis from '@studio-freight/lenis'
import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'

import App from './App.vue'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
