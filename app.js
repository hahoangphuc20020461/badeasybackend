
// import mongoose from "mongoose";

// const connection = mongoose.createConnection('mongodb+srv://hahoangphuc1357:matkhau@cluster0.sd1yg8z.mongodb.net/newBadeasy').on('open', ()=>{
//     console.log("mongodb connected");
// }).on('error', ()=>{
//     console.log('mongodb connection error');
// });

// export default connection

import express from "express";
import body_parser from 'body-parser'
import { router } from "./router/userrouter.js";
import mongoose from "mongoose";
import { dbrouter } from "./router/dashboardrouter.js"; 

const app = express()

app.use(body_parser.json())
app.use('/', router)

app.use('/',dbrouter)

mongoose.connect('mongodb+srv://hahoangphuc1357:matkhau@cluster0.sd1yg8z.mongodb.net/newBadeasy')
.then( () => {
  app.listen( 3001, () => {
    console.log(`Server is running on http://localhost:3001`);
  })

  console.log('Connected to MongoDb')
})
.catch( (error) => console.log(error))

export default app
