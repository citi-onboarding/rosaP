import express from 'express';
import UserController from '@controllers/UserController'
import { SendMail } from '@controllers/MailController';
import CarouselController from '@controllers/CarouselController';

const routes = express.Router();
const userController = new UserController();
const carouselController = new CarouselController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);

routes.post('/email', SendMail)

routes.post('/carousel', carouselController.create);
routes.get('/carousel', carouselController.get);
routes.delete('/carousel/:id', carouselController.delete);



export default routes;