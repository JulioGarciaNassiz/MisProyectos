import axios from 'axios'

exports.getItem = function (req, res) {

    
    console.log('id llamado' + req.params.id)
    axios.all([
        axios.get('https://api.mercadolibre.com/items/'+req.params.id),
        axios.get('https://api.mercadolibre.com/items/'+req.params.id+'/description')
      ])
      .then(axios.spread(function (item, itemDesc) {
       const returnItem=  {  
            "author":{  
               "name":"Julio",
               "lastname":"Garcia"
            },
            "item":{  
               "id": item.data.id,
               "title":item.data.title,
               "price":{  
                  "currency":item.data.currency_id,
                  "amount":item.data.price,
                  "decimals":item.data.price
               },
               "picture":item.data.pictures[0].url,
               "condition":item.data.condition,
               "free_shipping":item.data.shipping.free_shipping,
               "sold_quantity":item.data.sold_quantity,
               "description": itemDesc.data.plain_text
            }
         }
        res.send(returnItem)
      }))
      .catch(error => console.log("llamada a servico"+error));
      
  }