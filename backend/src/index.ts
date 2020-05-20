import express from 'express';
import routes from './routes';

const app = express(); //USANDO EXPRESS 

app.use(routes); //ROTAS

app.listen(3333); //SERVIDOR