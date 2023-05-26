import React from "react";
import { FooterContainer } from './styles';
import Logos from '../../assets';

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <span className="logomarca"><img src={Logos.RosaP} alt="" /></span>
            <div className="Sociais">
                <ul>
                    <li><a href="#" target="_blank"><img src={Logos.Facebook} alt=""></img></a></li>
                    <li><a href="#" target="_blank"><img src={Logos.Instagram} alt=""></img></a></li>
                    <li><a href="#" target="_blank"><img src={Logos.Spotify} alt=""></img></a></li>
                    <li><a href="#" target="_blank"><img src={Logos.Youtube} alt=""></img></a></li>
                    <li><a href="#" target="_blank"><img src={Logos.Linkedin} alt=""></img></a></li>
                    <li><a href="#" target="_blank"><img src={Logos.Mail} alt=""></img></a></li>
                </ul>
            </div>

            <hr className="line"></hr>

            <div className="creditos">
                <p>Copyright Rosa P &copy; | Todos os direitos reservados </p>
                <p>
                    Made with
                    {' '}
                    <strong>&lt; &#x0002F; &gt;</strong>
                    {' '}
                    and
                    {' '}
                    <img src={Logos.Heart}></img>
                    {' '}
                    by <img src={Logos.Citi}></img>
                </p>
            </div>
        </FooterContainer>
    );
}