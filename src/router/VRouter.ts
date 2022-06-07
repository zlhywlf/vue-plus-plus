import { createRouter, createMemoryHistory } from 'vue-router'
import type { Router, RouteRecordRaw, RouterOptions } from 'vue-router'
import type { App } from 'vue'
import { IRouter } from '/@/router/IRouter'

export class VRouter implements IRouter {
  private readonly router: Router
  private readonly options: RouterOptions

  constructor() {
    const routes: RouteRecordRaw[] = [
      {
        path: '/',
        redirect: '/main'
      },
      {
        path: '/login',
        component: () => import('/@/views/login/VLogin.vue')
      },
      {
        path: '/main',
        component: () => import('/@/views/main/VMain.vue')
      }
    ]
    this.options = {
      routes,
      history: createMemoryHistory()
    }
    this.router = createRouter(this.options)
  }

  setup(app: App<Element>): void {
    app.use(this.router)
  }
}
