import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { SnackController } from "./controllers/SnackController.js";
import { MoneyController } from "./controllers/MoneyController.js";
const USE_ROUTER = false

class App {

  HomeController = new HomeController()
  SnackController = new SnackController()
  MoneyController = new MoneyController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
