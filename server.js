const express=require('express')
const path=require('path')
const session=require('express-session')
const passport=require('./passport')

const app=express();
// app.set("view engine","hbs")

const SERVER_PORT=process.env.PORT || 3333

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/',express.static(__dirname))
app.use('/login',express.static(path.join(__dirname,'loginpage')))
app.use('/add-event',express.static(path.join(__dirname,'add-e')))
// app.use('/find-event',express.static(__dirname))
app.use('/api',require('./routes/api').route)

app.listen(SERVER_PORT,()=>console.log('server started at http://localhost:3333'))