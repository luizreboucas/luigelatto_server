/* eslint-disable no-mixed-spaces-and-tabs */
import {v4} from 'uuid'
import contatos from '../models/contatos.js'
import nodemailer from 'nodemailer'

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
			let transport = nodemailer.createTransport({
				host: 'sandbox.smtp.mailtrap.io',
				port: 2525,
				auth: {
				  user: 'faed5f6f8f5abd',
				  pass: 'ab9e085b0aafb0'
				}
			  })
			   await transport.sendMail({
				from: 'noreply@luigelatto.com', // sender address
				to: 'contato@luigelatto.com', // list of receivers
				subject: 'Novo Contato Cadastrado', // Subject line
				text: `Dados do contato:
				Nome: ${contato.nome},
				email: ${contato.email}
				telefone: ${contato.telefone}
				mensagem: ${contato.mensagem}`
			  })

            
		} catch (error) {
			console.log(error)
		}

       

	}
}