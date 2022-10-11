 const express = require('express')
 const app = express()
 const cors = require('cors')
 const mongoose = require('mongoose')
 const dotenv = require('dotenv')
 const connectDB = require('./config/db')
 const User = require('./models/user.model')
 const jwt =require('jsonwebtoken')

 dotenv.config({path: './config/config.env'})
 connectDB()

 app.use(cors())
 app.use(express.json())// @ middleware @desc : tell the express to convert whatever in the body to parse it as json 


 app.post('/api/register',async (req,res) => {
    console.log(req.body)
    try {
        const user = await User.create(req.body)({
            roll: req.body.roll,
            password: req.body.password,
            role: req.body.role

        })
        res.json({ status: 'ok'})
    } catch (err) {
        res.json({ status: 'error',error:'Duplicate email'})
    }
})
    app.post('/api/login',async (req,res) => {
        
        const user = await User.findOne({
            roll: req.body.roll,
            password: req.body.password,

        })
        //res.json({ status: 'ok'})
        if(user)
        {
            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email,
                },
                'secret123'
            )
            console.log(token);
            return res.json({ status:'ok',   user:token})
            
            
        }
        else
        {
            return res.json({ status:'error',   user:false})
        }
        

    
 })
  app.get('/hello',(req,res) => {
    res.send('hello world')
  })
  app.listen(1337,() => {
    console.log('server started on 1337')
  })