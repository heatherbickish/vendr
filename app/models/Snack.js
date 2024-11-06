


export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }



  get snackCard() {
    return (`
      <div class="col-md-4">
        <div class="border border-1 border-dark bg-danger rounded-3 mt-3 p-5">
        <div img="src="${this.imgUrl}" alt="${this.name}"
        <div class="mx-5 text-white fs-4 fw-bold">
        <p>${this.name}</p>
        <p>${this.price}</p>
        <button class="btn btn-dark rounded-pill mt-3">Buy!</button>
        </div>
        </div
        </div>
      </div>
    `)





  }












}