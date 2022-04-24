const express = require('express')
const app = express()
require('dotenv').config()
require('./database/db')
const port = process.env.port || 3000
const studentRouter = require('./routers/student')

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('welcome to student management website')
})

app.use('/students', studentRouter)


app.listen(port, () => {
    console.log(`server is running on ${port} port`);
})