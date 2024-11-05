


export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }



  get snackCard() {
    return (`
      <div roll="button" class="col-md-3">
        <div class="img border border-1 border-dark bg-danger rounded-3 mt-3 p-5">
          <div class="mx-5 text-white fs-4 fw-bold">
            <span>Popcorn</span>
            <span>1.25</span>
            <span>Buy!</span>
          </div>
        </div>
      </div>
    `)





  }












}