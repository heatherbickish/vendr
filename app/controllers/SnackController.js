import { AppState } from "../AppState.js"

export class SnackController {
  constructor() {
    console.log('Snack Controller is loaded')
    this.drawSnacks()
  }


  drawSnacks() {
    const snacks = AppState.snacks
    let menuSnackCards = ''
    snacks.forEach(snack => menuSnackCards += snack.snackCard)
    const snackCatalogElm = document.getElementById('snack-catalog')
    snackCatalogElm.innerHTML = menuSnackCards
  }


}