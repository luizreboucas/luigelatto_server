import express from 'express'
import routes from './routes/index.js'
import dotenv from 'dotenv'
dotenv.config()
import db from './config/dbconfig.js'

// eslint-disable-next-line no-undef
const URI = process.env.PORT

db.once('open', ()=>{
	console.log('conectado com o banco de dados')
})


const app = express()
routes(app)

app.listen(URI,()=>{
	console.log(`Server running on port ${URI}`)
})



export default app