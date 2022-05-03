const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/cardapio').get((request, response) => {
  response.send(PRATOS);
});

app.route('/api/cardapio').post((request, response) => {
  let prato = request.body;

  const firstId = PRATOS ? Math.max.apply(null, PRATOS.map(pratoIterator => pratoIterator.id)) + 1 : 1;
  prato.id = firstId;
  PRATOS.push(prato);


  response.status(201).send(prato);
});

app.route('/api/cardapio/:id').put((request, response) => {
  const pratoId = +request.params['id'];
  const prato = request.body;

  const index = PRATOS.findIndex(pratoIterator => pratoIterator.id === pratoId);
  PRATOS[index] = prato;

  response.status(200).send(prato);
});

app.route('/api/cardapio/:id').get((request, response) => {
  const pratoId = +request.params['id'];

  response.status(200).send(PRATOS.find(pratoIterator => pratoIterator.id === pratoId));
});

app.route('/api/cardapio/:id').delete((request, response) => {
  const pratoId = +request.params['id'];
  PRATOS = PRATOS.filter(pratoIterator => pratoIterator.id !== pratoId);

  response.status(204).send({});
});

var PRATOS = [
  {
    id: 1,
    nome: 'Frango',
    imgUrl: '/assets/images/frango.jpg',
    descricao: 'Frango grelhado',
    preco: 20,
    cod: 'XPS-8796',
    rating: 4.9
  },
  {
    id: 2,
    nome: 'Salada',
    imgUrl: '/assets/images/salada-grega.jpg',
    descricao: 'Mix de folhas',
    preco: 10,
    cod: 'LKL-1094',
    rating: 4.7
  },
  {
    id: 3,
    nome: 'Camarão',
    imgUrl: '/assets/images/camaroada.jpg',
    descricao: 'Camaroada',
    preco: 20,
    cod: 'DWQ-2893',
    rating: 5
  },
  {
    id: 4,
    nome: 'Macarronada',
    imgUrl: '/assets/images/macarronada.jpg',
    descricao: 'Macarrão com molho',
    preco: 15,
    cod: 'PQL-3072',
    rating: 4.5
  }
];