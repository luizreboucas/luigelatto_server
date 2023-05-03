import express from "express"
import routes from "./routes/index.js"

import dotenv from "dotenv"
dotenv.config()
const URI = process.env.PORT


const app = express()
routes(app)

app.listen(URI,()=>{
    console.log(`Server running on port ${URI}`)
})



export default app