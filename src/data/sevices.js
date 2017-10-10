import axios from 'axios'

exports.getItem = function (req, res) {
  axios.all([
    axios.get('https://api.mercadolibre.com/items/' + req.params.id),
    axios.get('https://api.mercadolibre.com/items/' + req.params.id + '/description')
  ])
    .then(axios.spread(function (item, itemDesc) {

      axios.get('https://api.mercadolibre.com/categories/' + item.data.category_id).then(categories => {
        const returnItem = {
          "author": {
            "name": "Julio",
            "lastname": "Garcia"
          },
          "item": {
            "id": item.data.id,
            "title": item.data.title,
            "price": {
              "currency": item.data.currency_id,
              "amount": (item.data.price + '').split('.')[0],
              "decimals": (item.data.price + '').split('.')[1] === undefined ? '00' : (item.data.price + '').split('.')[1]
            },
            "picture": item.data.pictures[0].url,
            "condition": item.data.condition,
            "free_shipping": item.data.shipping.free_shipping,
            "sold_quantity": item.data.sold_quantity,
            "description": itemDesc.data.plain_text,
            "categories": categories.data.path_from_root[0] !== undefined ? categories.data.path_from_root.map(paths => paths.name) : ['home'],
          }
        }
        res.send(returnItem)
      })
    }))
    .catch(error => res.send(res));

}

exports.getItems = function (req, res) {

  axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q).then(items => {

    var resultItems = []

    for (var i = 0; i < 4; i++) {
      if (items.data.results[i] !== undefined) {
        var item = items.data.results[i]
        var jsonItem = {
          "id": item.id,
          "title": item.title,
          "price": {
            "currency": item.currency_id,
            "amount": (item.price + '').split('.')[0],
            "decimals": (item.price + '').split('.')[1] === undefined ? '00' : (item.price + '').split('.')[1]
          },
          "location": item.address.state_name,
          "picture": item.thumbnail,
          "condition": item.condition,
          "free_shipping": item.shipping.free_shipping
        }

        resultItems.push(jsonItem)
      }

    }
    const searchResult = {
      "author": {
        "name": "Julio",
        "lastname": "Garcia"
      },
      "categories": items.data.filters[0] !== undefined ? items.data.filters[0].values[0].path_from_root.map(paths => paths.name) : ['home'],
      "items": resultItems

    }
    res.send(searchResult)
  })
    .catch(error => res.send(res));

}