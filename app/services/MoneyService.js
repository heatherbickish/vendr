import { AppState } from "../AppState.js";

class moneyService {
  addMoney() {
    AppState.money += .25
  }
}

export const moneysService = new moneyService()