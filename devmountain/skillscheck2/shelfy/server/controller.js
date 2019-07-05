

module.exports= {

getProducts(req,res){

    const db = req.app.get('db')
    db.get_products()
    .then(product => res.send(product))
    .catch(err => res.status(500).send(err))
    
},

addProduct(req,res){
    const db = req.app.get('db')
    const{img_url,product_name,price} = req.body
    db.add_product([img_url,product_name,price])
    .then(dbRes => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
    console.log('addproducts success');
},

deleteProduct(req,res) {
    const db = req.app.get('db')
    let {id} = req.params
    db.delete_product([id])
    .then(dbRes => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
}
}








