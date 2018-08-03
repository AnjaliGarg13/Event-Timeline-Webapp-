const Sequelize=require('sequelize')

const db=new Sequelize('nsitTimeline','organiser','MY@1pass',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
})

const event=db.define('events',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    startdate:{
        type:Sequelize.DATE
    },
    enddate:{
        type:Sequelize.DATE,
        allowNull:false
    },
    starttime:{
        type:Sequelize.TIME,
        allowNull:false
    },
    endtime:{
        type:Sequelize.TIME
    },
    orgSociety:{
        type:Sequelize.STRING
    },
    details:{
        type:Sequelize.STRING
    },
    location:{
        type:Sequelize.STRING
    },
    link:{
        type:Sequelize.STRING
    }
})

db.sync()
   .then(()=>console.log("database has been created"))
   .catch(()=>console.log("Error creating database"))

exports=module.exports={
    event
}