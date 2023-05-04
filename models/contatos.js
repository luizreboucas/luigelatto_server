import mongoose from 'mongoose'

const contatosSchema = mongoose.Schema({
	nome: {
		type: String,
		required:true
	},
	telefone: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	mensagem: {
		type: String
	}

})

const contatos = mongoose.model('contatos', contatosSchema)
export default contatos