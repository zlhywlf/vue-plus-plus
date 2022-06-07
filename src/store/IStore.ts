import type { App } from 'vue'

export interface IStore {
  setup(app: App<Element>): void
}
