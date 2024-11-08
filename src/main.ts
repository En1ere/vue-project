import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/reset.scss'
import './assets/style/main.scss'
import './assets/style/games/snake.scss'
import { router } from '~/service/router/index'

const app = createApp(App);

app
    .use(router)
    .mount('#app')
