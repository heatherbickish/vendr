import { Snack } from "./models/Snack.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  money = 0

  snacks = [

    new Snack({
      name: 'popcorn',
      price: 1.25,
      imgUrl: 'https://images.unsplash.com/photo-1512149074996-e923ac45be6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNuYWNrc3xlbnwwfHwwfHx8MA%3D%3D '
    }),

    new Snack({
      name: 'burrito',
      price: 3,
      imgUrl: 'https://images.unsplash.com/photo-1662116765994-1e4200c43589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVycml0b3xlbnwwfHwwfHx8MA%3D%3D'
    }),

    new Snack({
      name: 'fish-sticks',
      price: 2.75,
      imgUrl: 'https://plus.unsplash.com/premium_photo-1712932551568-91205970a69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpc2glMjBzdGlja3N8ZW58MHx8MHx8fDA%3D'
    }),
  ]

















  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())