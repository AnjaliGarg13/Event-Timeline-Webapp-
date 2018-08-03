const route=require('express').Router()

route.use('/',require('./event'))

exports=module.exports={
    route
}