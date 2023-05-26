import React from "react";
import { HomeContainer } from './styles';
import Logos from '../../assets';


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            {/* <img src={Logos.CITi} alt="" /> */}
            <h1>ReactJS Boilerplate</h1>
            <p>
                Made with
                {' '}
                <strong>&lt; &#x0002F; &gt;</strong>
                {' '}
                and
                {' '}
                <strong>&hearts;</strong>
                {' '}
                by CITi
            </p>
        </HomeContainer>
    );
}