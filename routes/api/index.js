const route=require('express').Router()

route.use('/event',require('./events'))

exports=module.exports={
    route
}