import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// 引入初始化css
import 'normalize.css'

// 引入样式
import './styles/index.scss'

import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

// 引入所有svg文件和全局注册svg组件
import 'virtual:svg-icons-register'
import svgComponent from './icons'

const app = createApp(App)

app.use(router)
app.use(createPinia())
svgComponent(app)

app.mount('#app')
