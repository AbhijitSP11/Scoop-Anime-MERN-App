const express = require('express')
const cors = require('cors')
const  mongoose  = require('mongoose')
const User = require('./models/user/User')
const app = express()
require('dotenv').config()


const PORT = process.env.PORT || 3300;

app.use(cors())
app.use(express.json())


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
      const userDoc = await User.create({ username, password })
      res.json(userDoc)
    } catch (error) {
      console.error(error)
      res.status(500).send('An error occurred while creating the user.')
    }
  })

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}.` )
})