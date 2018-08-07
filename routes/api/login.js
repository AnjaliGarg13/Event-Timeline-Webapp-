const express=require('express')
const path=require('path')
const route=require('express').Router()
const passport=require('../../passport')
// route.post('/',(req,res)=>{
//     console.log("wsedrftgvbhnj")
//     if(req.body.username=="admin"&&req.body.password=="ADMIN"){
//         return res.redirect('../../public/add_event')
//     // }else if(req.body.username=="admin") {
//     //     return res.status(501).send({
//     //         error:"wrong password"
//     //     })
//     }else{
//         return res.redirect('../../public/login')
//     }
//
//
// }
// )

route.post('/',passport.authenticate('local',
    {
        successRedirect:'/add-event',
        failureRedirect:'/login',
    }
))

// route.use('/add-event',express.static(path.join(__dirname,'add-e')))

// route.get('/add_event',)

exports=module.exports=route