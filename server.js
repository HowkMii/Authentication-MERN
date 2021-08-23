const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')


//Config env
require('dotenv').config({
    path:'./config/config.env'
})
const app = express()

//config Dv
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log('app listening on port 5000');
});
