 import express from 'express'

 const app = express();
 const porta = 3000;

 app.use(express.json());

  interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
 }

 const usuarios: Usuario [] = [];

 let proximoId = 1;


 app.get('/usuarios', (req, res) => {
  res.json(usuarios);
 });

 app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;

 const novoUsuario: Usuario = {
    id: proximoId,
    nome: nome,
    email: email,
    senha: senha
 };

 usuarios.push(novoUsuario);

 proximoId++;

 res.status(201).json({
    mensagem: 'Usuario cadastrado com sucesso!',
    usuario: novoUsuario
 });
 });

 app.listen(porta, () => {
    console.log(`Servidor rodando com sucesso na porta ${porta}.`);
 });
 
