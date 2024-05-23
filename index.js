require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const router = require('./routers/index.routes.js')
const appErrorHandler = require('./middleware/appErrorHandler.js')

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use('', router)
app.use(appErrorHandler)

// prettier-ignore
const start = () => {
    app.listen(PORT, (err) => {
        err ? console.log(err) : console.log(`Serever started on port ${PORT}`)
    })
    mongoose.connect(process.env.MONGO_DB_URL)
        .then(() => console.log('Successfull conection to MongoDB'))
        .catch((err) => console.log('DB connection error: ', err))
}
start()
