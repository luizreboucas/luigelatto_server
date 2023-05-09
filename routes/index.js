import contatoRoutes from './contatoRoutes.js'
import express from 'express'
import cors from 'cors'


const routes = (app)=>{
	app.get('/',(req,res)=>{
		res.json({message: 'servidor rodando'})
	})
    
	app.use(
		cors(),
		express.json(),  
		contatoRoutes
	)
}

export default routes






