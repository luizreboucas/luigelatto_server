import {v4} from 'uuid'
import contatos from '../models/contatos.js'

export default class contatoController{

	static getContatos = async(req,res)=>{
		try {
			const contatosGeral = await contatos.find()
			res.status(200).json(contatosGeral)
            
		} catch (error) {
			console.log(error)
		}
	}

	static postContato = async(req,res)=>{

		try {
			const id = v4()
			const {nome,email,telefone,mensagem} = req.body
			const contato = {id, nome, telefone,email,mensagem}
			await contatos.create(contato)
			res.status(201).json({message: 'contato adicionado'})
            
		} catch (error) {
			console.log(error)
		}

       

	}
}