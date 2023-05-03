import {v4} from "uuid"

export default class contatoController{

    static getContatos = async(req,res)=>{
        try {
            req.json({message: "contatos enviados"})
            
        } catch (error) {
            console.log(error)
        }
    }

    static postContato = async(req,res)=>{

        try {
            const id = v4()
            const {nome,email,telefone,mensagem} = req.body
            const contato = {id, nome, telefone,mensagem}
            res.json(contato)
            
        } catch (error) {
            console.log(error)
        }

       

    }
}