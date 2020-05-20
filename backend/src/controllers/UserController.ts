import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

//lista 
const users = [
    { name: 'Vitor', email: 'Vitorrubim1@hotmail.com' },
]

//LISTAGEM
export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    //CRATE
    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({ //OBJETO PARA ENVIAR PRO EMAIL SERVICES OS CONTEUDOS DA MENSAGEM 
            to: {
                name: 'Elzo',
                email: 'elzo@hotmail.com'
            },
            message: {
                subject: 'Bem vindo ao sistema',
                body: 'Seja bem vindo'
            },
        });
        return res.send();
    }
};