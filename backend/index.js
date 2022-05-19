import express from "express";
import dotenv from 'dotenv'
import conectarDB from './config/db.js'

const app = express();

dotenv.config();
conectarDB();

//Routing
app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})