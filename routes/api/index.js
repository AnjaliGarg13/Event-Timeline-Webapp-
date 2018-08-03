const route=require('express').Router()

route.use('/event',require('./event'))

exports=module.exports={
    route
}