import React from 'react';
import { NavbarContainer, Slogan, Infos, InfoN } from './styles'
import { BackgroundImg, LogoRosa } from '../../assets';

export const NavBar: React.FC = () => {
    return ( 
        <NavbarContainer>
            <Slogan>
                <img src={LogoRosa} alt="" />
            </Slogan>
            <Infos>
                <InfoN>Home</InfoN>
                <InfoN>Quem somos</InfoN>
                <InfoN>O que é</InfoN>
                <InfoN>Fale conosco</InfoN>
            </Infos>
        </NavbarContainer>
    );
};
