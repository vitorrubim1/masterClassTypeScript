import { Router } from "express";

//CONTROLLER
import UserControler from './controllers/UserController';

//INSTANCIANDO A ROTA
const routes = Router();


routes.get('/users', UserControler.index)
routes.post('/users', UserControler.create)

export default routes;