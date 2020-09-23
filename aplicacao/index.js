const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

// criando um bloco assincrono e já executando esse bloco e tudo ttá dentro 
(async () => {

const connectionString = 'mongodb+srv://admin:20Mavibifa@cluster0.mpcr5.mongodb.net/admin?retryWrites=true&w=majority';

//async/await ação que começa e espera um tempo para acontecer
console.info('Conectando ao banco de dados MongoDB!')
const client = mongodb.MongoClient.connect(connectionString, {
    useUnifiedTopology: true 
});

console.info('Banco de dados conectado com sucesso')
const app = express();
const port = process.env.PORT || 3000;

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get('/', (req, res) => {
    res.send('Hello world com MongoDB!');
});

// Endpoints de envio de mensagens
// CRUD -> Create, Read (Read All e Read Single), Update and Delete
// CRUD -> Criar, Ler (Ler tudo e ler individualmente), atualizar e remover

const db = await (await client).db('ocean_mongodb');

const mensagens = await db.collection('mensagens');

// Read All
app.get('/mensagens', async (req, res) => {
    const findResult = await mensagens.find({}).toArray();

    res.json(findResult);
});

// Create
app.post('/mensagens', (req, res) => {
});

// Read Single
app.get('/mensagens/:id', (req, res) => {
});

// Update
app.put('/mensagens/:id', (req, res) => {
});

// Delete
app.delete('/mensagens/:id', (req, res) => {
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
});

//fecho o bloco assincrono e executo
})();
