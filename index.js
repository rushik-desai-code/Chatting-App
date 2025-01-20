require('dotenv').config()
const http=require('http')
const express= require('express')
const path=require('path')
const {Server}=require('socket.io')
const PORT=9000

const app=express()
const server=http.createServer(app)
const io=new Server(server)

io.on('connection',(socket)=>{
    socket.on('user-message',(message)=>{
        io.emit('server-message',message);
    })
})

app.use(express.static(path.resolve('./public')))

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})



server.listen(PORT,()=>console.log(`server started at port ${PORT}`))