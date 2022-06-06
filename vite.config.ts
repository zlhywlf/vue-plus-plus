// https://vitejs.dev/config/
import type { ConfigEnv, UserConfig } from 'vite'

const autoprefixer = require('autoprefixer')
import vue from '@vitejs/plugin-vue'

export default (configEnv: ConfigEnv): UserConfig => {
  console.log(typeof autoprefixer)
  return {
    base: './',
    plugins: [vue()],
    css: {
      postcss: { plugins: [autoprefixer] },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  }
}
