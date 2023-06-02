import { MailServer } from "src/services/MailServer";
import dotenv from "dotenv";
import {Request,Response} from "express";
import { request } from "http";

dotenv.config();

const SendMail = async (req: Request, res: Response) => {

    try {
        const {name,email,message} = req.body;

        await MailServer({
            destinationUser: process.env.EMAIL_WILL_RECEIVE,
            subjectText: 'nodemailer funcionando',
            htmlOption: `<p>

                o ${name} de email ${email} enviou:
                 ${message}

            </p>`
        })

        return res.status(200).send({
            answer: "Enviado."
        })

    } catch(error){
        
        return res.status(500).send({
            answer: "Não enviado."
        })

    }
}


export {
    SendMail
}