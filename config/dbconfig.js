import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
// eslint-disable-next-line no-undef
const connectionString = process.env.dbConnection

mongoose.connect(connectionString)

const db = mongoose.connection

export default db