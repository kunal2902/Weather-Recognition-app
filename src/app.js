const express=require('express')
const app=express()
const path=require('path')
const port='4451'

app.set("view engine","ejs")
app.set("views",path.join(__dirname,'../templates/views'))
app.use(express.static(path.join(__dirname,'../public')))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.render("about")
})

app.get('/weather',(req,res)=>{
    res.render("weather")
})

app.get('*',(req,res)=>{
    res.render("errorpage")
})

app.listen(port,(port)=>{
    console.log(`server is running on port ${port}`)
})