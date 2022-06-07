import type { App } from 'vue'

export interface IRouter {
  setup(app: App<Element>): void
}
