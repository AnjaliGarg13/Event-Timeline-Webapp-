const Sequelize=require('sequelize')

const db=new Sequelize('sql12260087','sql12260087','G5iaSVauL1',{
    host:'sql12.freemysqlhosting.net',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
})


const admin=db.define('admin',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allownull:true
    }
})

const event=db.define('event',{
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

const seed=async()=>{
    try {
        db.sync({alter:true})
        await admin.bulkCreate([
            {id:1,username:'user1',password:'User1Pass'},
            {id:1,username:'user2',password:'User2Pass'},
            {id:1,username:'user3',password:'User3Pass'},
            {id:1,username:'user4',password:'User4Pass'}
        ],{
            ignoreDuplicates:true
        })
    }catch (e) {
        console.log(e)
    }
}
seed()
//
// db.sync()
//    .then(()=>console.log("database has been created"))
//    .catch(()=>console.log("Error creating database"))

exports=module.exports={
    event,
    admin
}