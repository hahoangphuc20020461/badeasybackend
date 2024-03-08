
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
import { useradminrouter } from "./router/useradminrouter.js";
import cors from "cors";

const app = express()

app.use(cors())

app.use(body_parser.json({ limit: '50mb' }))
app.use(body_parser.urlencoded({ limit: '50mb', extended: true }))
app.use('/', router)

app.use('/',dbrouter)

app.use('/',useradminrouter)

mongoose.connect('mongodb+srv://hahoangphuc1357:matkhau@cluster0.sd1yg8z.mongodb.net/newBadeasy')
.then( () => {
  app.listen( 3001, () => {
    console.log(`Server is running on http://localhost:3001`);
  })

  console.log('Connected to MongoDb')
})
.catch( (error) => console.log(error))

export default app
