import { Snack } from "./models/Snack.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  money = 0

  snacks = [

    new Snack({
      name: 'Popcorn',
      price: 1.25
    }),

    new Snack({
      name: 'Burrito',
      price: 3
    }),

    new Snack({
      name: 'Fish Sticks',
      price: 2.75
    }),
  ]

















  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())