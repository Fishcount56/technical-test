require('dotenv').config()
const express = require('express')
const app = express()
const port = 6500
const cors = require('cors')
const router = require('./src/routes')

app.use(express.json())
app.use(cors())
app.use('/api/v1/', router)

app.listen(port, console.log(`[SERVER] server is running on port ${port}`))