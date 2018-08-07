const route=require('express').Router();
const event=require('../../db').event
// const admin=require('../../db').admin
// const passport=require('../../passport')


route.get('/',(req,res)=>{
    event.findAll(
    //     {
    //     order:[
    //         ['startdate',ASC],
    //         ['starttime',ASC]
    //     ]
    // }
    )
        .then((events)=>{
            res.status(200).send(events)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"Could not retrieve events"
            })
        })
})


route.post('/',(req,res)=>{
    event.create({
        name:req.body.eventname,
        orgSociety:req.body.organiser,
        startdate:req.body.Startdate,
        enddate:req.body.enddate,
        starttime:req.body.starttime,
        endtime:req.body.endtime,
        details:req.body.eventdetails,
        location:req.body.location,
        link:req.body.link
    }).then((event)=>{
        res.status(201).send(event)
    }).catch((err)=>{
        res.status(501).send({
            error:"Error adding product   Try again"
        })
    })
})

// route.post('/login',passport.authenticate('local',{
//     failureRedirect:'../../public/login',
//     successRedirect:'../../public/add_event'
// }))
//
// route.post('/login',(req,res)=>{
//     if (req.body.username=='admin'&&req.body.password=='ADMIN'){
//         return res.redirect('../../public/add_event')
//     }else if(req.body.username=='admin'){
//         return res.send("wrong password")
//     }else{
//         return res.redirect('../../public/login')
//     }

    // Users.findOne({
    //     where: {
    //         username: req.body.username
    //     }
    // }).then((user) => {
    //     if (!user) {
    //         return res.send("No such user")
    //     }
    //     if (user.password !== req.body.password) {
    //         return res.send("Wrong password")
    //     }
    //     return res.redirect('../../public/add_event')
//     // })
// })

exports=module.exports=route