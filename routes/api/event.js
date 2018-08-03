const route=require('express').Router();
const event=require('../../db').event

route.get('/',(req,res)=>{
    event.findAll({
        order:[
            ['startdate',ASC],
            ['starttime',asc]
            ]
    })
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
        name:req.body.name,
        orgSociety:req.body.orgSociety,
        startdate:req.body.startdate,
        enddate:req.body.enddate,
        starttime:req.body.starttime,
        endtime:req.body.endtime,
        details:req.body.details,
        location:req.body.location,
        link:req.body.link
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((err)=>{
        res.status(501).send({
            error:"Error adding product\nTry again"
        })
    })
})

exports=module.exports=route