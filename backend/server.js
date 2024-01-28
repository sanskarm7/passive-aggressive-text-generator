const express = require('express')
const router = require('./router')
const authMiddleware = require('./auth')

const PORT = 3000
const app = express()


app.use(authMiddleware);
app.use(router)

app.listen(PORT, () => console.log(`Listening on port ${3000}`))