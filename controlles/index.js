const Product = require('../models/product')

const getProducts = (req,res,next)=>{
    Product.find().exec((err,result) => {
      console.log(result)
        res.status(200).send(result)
      })
}
const getHome = (req,res,next) => {
  res.send('hello')
}

module.exports = {
                  getProducts,
                  getHome
                }