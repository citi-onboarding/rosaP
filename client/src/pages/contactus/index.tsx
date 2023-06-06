import React from "react";
import { ContactUsContainer, InputContainer, AddresEmail, Title, ContentContainer } from './styles';
import Logos from "../../assets";

export const ContactUs: React.FC = () => {   
    return(
        <ContactUsContainer>
            <Title>
                <h1>Curtiu?</h1>
                <h1>Entre em contato</h1>
            </Title>
            <AddresEmail>
                <InputContainer placeholder="Seu nome"></InputContainer>
                <InputContainer placeholder="Seu Melhor email" type="email"></InputContainer>
                <button><img src={Logos.Enviar} alt=""></img></button>
            </AddresEmail>
            <ContentContainer placeholder="Fale um pouco mais..."></ContentContainer>
        </ContactUsContainer>
    );
};