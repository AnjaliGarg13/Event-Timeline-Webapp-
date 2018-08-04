const express=require('express')
const path=require('path')
const passport=require('./passport')
const session=require('express-session')

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api').route)

app.listen(1234,()=>console.log('server started at http://localhost:1234'))