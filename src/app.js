import express from "express";
import dotenv from  "dotenv"

dotenv.config();

const PORT = process.env.PORT ||  5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.listen(PORT, ()=>{
    console.log(`Hola mundo desde node js. http://localhost:${PORT}`)
})
app.get('/', (req,res)=>{
    res.json({
        pais:"Honduras",
        name:"David Maldonado",
        phone:"50433158947"
    })
})
