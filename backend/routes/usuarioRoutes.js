import express from "express";
const router = express.Router();

import {registrar} from "../controllers/usuarioController.js"

//Autenticación, Registro y Confirmación de Usuarios
router.post("/",registrar); //Crea un nuevo usuario

export default router