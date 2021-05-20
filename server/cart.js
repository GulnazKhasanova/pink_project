let add = (cart, req) => {
  let find = cart.content.find((el) => +el.id === +req.params.id)

  if (find) {
    find.quantity++
    return JSON.stringify(cart, null, 4)
  } else {
    cart.content.push(req.body)
    console.log(req.body);
    return JSON.stringify(cart, null, 4)
  }
}

let dec = (cart, req) => {
  let find = cart.content.find((el) => +el.id === +req.params.id)
  console.log(cart.content);
  if (find && find.quantity > 1) {
    find.quantity--
    return JSON.stringify(cart, null, 4)
  } else if (find.quantity === 1) {
    let i = cart.content.findIndex((el) => el.id == req.params.id)
    cart.content.splice(i, 1)
    return JSON.stringify(cart, null, 4)
  }
}

module.exports = {
  add,
  dec,
}
