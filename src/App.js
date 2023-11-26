const express = require("express");
const cors = require("cors");
const UserLogin = require("./Config/function");

const App = express();
const Login = new UserLogin();

App.use(express.json());
App.use(cors());
App.listen(3333);

App.get("/users", async (req,res) => {
    await Login.getUserLogin()
        .then(response => res.json(response))
        .catch(err => res.status(200).json({aviso: "Erro não é possivel visualizar os usuários " + err}))
});

App.post("/user", async (req,res) => {

    const {name, email, passeword } = req.body;
    console.log(name)
    console.log(email)
    console.log(passeword)

    if(typeof name !== "undefined" && typeof email !== "undefined" && typeof passeword !== "undefined" ){
        await Login.NewsUserLogin(name,email,passeword)
        res.status(201).json({aviso: "Usuário cadastrado com sucesso"})
            
    }else{
        res.status(400).json({aviso: "E obrigatorio o envio do body erro 400"});
    }
});

App.delete("/use/", async (req,res) => {

    const { id } = req.query;
    if(typeof id !== "undefined" && Number(id) >=  1){

        await Login.RemoveUserlogin(id)
            .then(response => res.status(204).json({aviso: "Usuário Apagado com sucesso"}))
            .catch(erro => {
                res.status(400);
                res.json({aviso: "não é possivel Apagar usuário " + erro })
            })
    }else if(typeof id === "string"){
        res.status(400).json({aviso: "Não é aceito letras apenas Números de 2 Bytes"});
    }
    else if(Number(id) <= 2.147,999){
        res.status(403).json({aviso: "Numero invalido digite números de 2 bytes"});
    }else{
        res.status(400).json({aviso: "E obrigatorio o envio de id erro 400"});
    }
    
});
