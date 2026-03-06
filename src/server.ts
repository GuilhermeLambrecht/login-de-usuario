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

 app.put('/usuarios/:id', (req,res) => {
   const idRecebido = req.params.id;
   
   const idDoUsuario = parseInt(idRecebido);

   const { nome, email, senha} = req.body;

   const indiceDoUsuario = usuarios.findIndex(usuario => usuario.id === idDoUsuario);

   if(indiceDoUsuario === -1) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado!'});
   }
})

 app.listen(porta, () => {
    console.log(`Servidor rodando com sucesso na porta ${porta}.`);
 });
 
