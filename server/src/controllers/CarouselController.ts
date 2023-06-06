import { Request, Response } from 'express';
import { Carousel } from '@models/Carousel';
import { Citi, Crud } from '../global'

export default class CarouselController implements Crud {

    async create(request: Request, response: Response){
        const {text, image} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(text, image);
        if(isAnyUndefined) return response.status(400).send();

        const newCarousel = { text, image };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Carousel, newCarousel);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Carousel);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {message, value: carouselFound } = await Citi.findByID(Carousel, id); 
           
        if(!carouselFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Carousel, carouselFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    
}