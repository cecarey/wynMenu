let root = document.getElementById('root')

const drawElement = menuItem => {
  let div = document.createElement('div')
  let card =
      `<div class="card border-info mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="http://placehold.it/280x170" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${menuItem.name}</h5>
          <p class="card-text">
            ${menuItem.formattedPrice}
        </div>
      </div>
    </div>
  </div>



  `


  let template =
  `
  <header>
    <h1> ${menuItem.name} </h1>
  <header>
  <img src="http://placehold.it/280x170" alt="item image">
    <h2> ${menuItem.formattedPrice} </h2>
    <ul>
      <li> Ingredient 1 </li>
      <li> Ingredient 2 </li>
    </ul>
  `
  div.innerHTML = card
  root.appendChild ( div )
}
// loop throuhgh data
menuItems.forEach( drawElement )
