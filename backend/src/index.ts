import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express(); //USANDO EXPRESS 

app.use(cors()); //CONFIGURANDO PERMISSÃO DE URL
app.use(routes); //ROTAS

app.listen(3333); //SERVIDOR