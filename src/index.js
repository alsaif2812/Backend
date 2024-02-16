// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import connect from './db/index.js';
import express from 'express'
const app = express();

dotenv.config({
          path: './env'
});
connect().then(()=> {
          app.listen(process.env.PORT || 8000,()=> {
                    console.log(`Server is running at port : ${process.env.PORT}`)
          })
}).catch((error) => {
          console.log(error)
})