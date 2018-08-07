const route=require('express').Router()


route.use('/event',require('./events'))
route.use('/login',require('./login'))

exports=module.exports={
    route
}