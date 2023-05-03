import express from "express"
import contatoController from "../controllers/contatoController.js"
const Router = express.Router()


Router
    .post("/contato",contatoController.postContato)
    .get("/contato",contatoController.getContatos)

export default Router