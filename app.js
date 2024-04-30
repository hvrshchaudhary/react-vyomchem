require('dotenv').config();
const express = require('express')
const path = require("path")
const app = express();
const port = 8006;
const router = require('./routes/router')
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/dist')))

app.use(router)

app.listen(port ,()=>{
    console.log(`server start at port no : ${port}`)
})