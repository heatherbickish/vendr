import { AppState } from "../AppState.js"

export class SnackController {
  constructor() {
    console.log('Snack Controller is loaded')
  }


  drawSnacks() {
    const snacks = AppState.snacks
    let snackImg = ''
    snacks.forEach(snack => snackImg += snack.imgUrl)
    const snackCatalogElm = document.getElementById('snack-catalog')
    snackCatalogElm.innerHTML = snackCatalogElm.toString()
  }


}