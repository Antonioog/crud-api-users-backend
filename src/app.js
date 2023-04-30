const express = require('express')
const cors = require('cors')
require('dotenv').config()

const userRouter = require('./users/users.router')
const postRouter = require('./posts/post.router')
const db = require('./utils/database')
const initModels = require('./models/initModels')

const app = express()

const PORT = process.env.PORT || 3000

//Validar la conexion...
db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Synced!'))
    .catch((err) => console.log(err))

initModels()    

app.use(express.json())
app.use(cors())

//Endpoints...
app.get('/',(req, res) => {
    res.json({
        message: 'Server Ok ...',
        myMessage: process.env.MESSAGE,
        myPort: process.env.PORT
    })
})

app.use('/', userRouter)
app.use('/', postRouter)

app.listen(PORT, () => {
    console.log(`Server startet at port ${PORT}`)
} )