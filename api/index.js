const express = require('express')
const cors = require('cors')
const  mongoose  = require('mongoose')
const User = require('./models/user/User')
const Post = require('./models/post/Post')
const app = express()
require('dotenv').config()
const bcrypt = require('bcryptjs')
const  jwt  = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const fs = require('fs')
const uploadMiddleware = multer({dest: 'uploads/'})



const PORT = process.env.PORT || 3300;

const salt= bcrypt.genSaltSync(10);
const secret = 'randomSecret'

app.use(cors({credentials: true, origin:['http://localhost:5173', 'http://localhost:3300']}))
app.use(express.json())
app.use(cookieParser())


mongoose.connect(process.env.MONGOOSE_URL)
.then(() => {
    console.log('Connected to MongoDB Atlas!')
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!')
    console.error(error)
  })

  app.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body
      const userDoc = await User.create({ username, password: bcrypt.hashSync(password, salt) })
      res.json(userDoc)
    } catch (error) {
      console.error(error)
      res.status(500).send('An error occurred while creating the user.')
    }
  })

  app.post('/login', async (req, res) => {
      const { username, password } = req.body
      const userDoc = await User.findOne({ username })
      const passOk = bcrypt.compareSync(password, userDoc?.password)
      if(passOk){
        //logged in 
        jwt.sign({username, id: userDoc._id},secret, {}, (err, token)=>{
          if(err) throw err;           
          res.cookie('token', token, { 
            sameSite: 'none', 
            secure: true,
            expires: new Date(Date.now() + 3600000), // Expires in 1 hour
          }).json({
            id: userDoc._id,
            username,
          });
          
          // console.log(token)
        } )
      }else{
      res.status(500).json('An error occurred while creating the user.')
      }
    })

// app.get('/profile', (req, res)=>{
//   const {token} = req.cookies  //JWT Token with username and id tha we can read only if we have the secret  
//   jwt.verify(token, secret, {}, (err, info)=>{
//     if(err) throw err;
//     res.json(info)
//   })
//   console.log(req.cookies, 'profile cookie')
// })

app.get('/profile', (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: 'JWT token is missing.' });
  }
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid JWT token.' });
    }
    res.json(info);
  });
});

app.post('/post', uploadMiddleware.single('file') , async (req, res)=>{
  const {originalname, path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length-1]
  const newPath= path+'.'+ext;
  fs.renameSync(path, newPath)

  const {title, summary, content} = req.body;
  const postDoc = await Post.create({ title, summary, content, cover: newPath })

  res.json(postDoc)


})  


app.post('/logout', (req, res)=>{
  res.cookie('token', '', { sameSite: 'none', secure: true }).json('ok')
})


app.get('/test', (req, res)=>{
  res.send('hello from server')
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}.` )
})