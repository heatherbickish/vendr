import { AppState } from "../AppState.js"
import { moneysService } from "../services/MoneyService.js"


export class MoneyController {
  constructor() {
    console.log('Money controller is loaded')
    moneysService.addMoney()
  }


  addMoney() {
    moneysService.addMoney
    // this.drawMoney()
  }

  drawMoney() {
    const moneyElem = document.getElementById('money-add')
    moneyElem.innerHTML = AppState.money.toString()
  }

}