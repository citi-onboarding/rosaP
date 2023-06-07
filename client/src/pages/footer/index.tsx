import React from "react";
import { FooterContainer, CreditosContainer, RedesSociaisContainer, LogomarcaSpan, Line, Icons } from './styles';
import Logos from '../../assets';

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <LogomarcaSpan><img src={Logos.RosaP} alt="" /></LogomarcaSpan>
            <RedesSociaisContainer>
                <Icons>
                    <li><a href="#" target="_blank"><img src={Logos.Facebook} alt=""></img></a></li>
                    <li><a href="#" target="_blank"><img src={Logos.Instagram} alt=""></img></a></li>
                    <li><a href="#" target="_blank"><img src={Logos.Spotify} alt=""></img></a></li>
                    <li><a href="#" target="_blank"><img src={Logos.Youtube} alt=""></img></a></li>
                    <li><a href="#" target="_blank"><img src={Logos.Linkedin} alt=""></img></a></li>
                    <li><a href="#" target="_blank"><img src={Logos.Mail} alt=""></img></a></li>
                </Icons>
            </RedesSociaisContainer>

            <Line></Line>

            <CreditosContainer>
                <p>Copyright Rosa P &copy; | Todos os direitos reservados </p>
                <p>
                    Made with
                    {' '}
                    <strong>&lt; &#x0002F; &gt;</strong>
                    {' '}
                    and
                    {' '}
                    <img src={Logos.Heart} alt=""></img>
                    {' '}
                    by <img src={Logos.Citi} alt=""></img>
                </p>
            </CreditosContainer>
        </FooterContainer>
    );
}