import { createStore } from 'vuex'
import type { Store } from 'vuex'
import { IStore } from '/@/store/IStore'
import type { App } from 'vue'

export class VVuex implements IStore {
  private readonly store: Store<{ name: string }>

  constructor() {
    this.store = createStore({
      state: () => {
        return {
          name: 'vuex'
        }
      }
    })
  }

  setup(app: App<Element>): void {
    app.use(this.store)
  }
}
