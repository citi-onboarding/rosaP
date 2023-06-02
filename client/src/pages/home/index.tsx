import React from 'react';
import { Sentence, HomeContainer, ButtonCourse, Intro, ElipseImage, Line1 } from './styles'
import Logos from '../../assets';

export const Home: React.FC = () => {
    return ( 
        <HomeContainer>
            <Intro>
                <Sentence>
                    <Line1>Nossa maneira de</Line1>
                    <Line1>PENSAR e FAZER moda</Line1>
                </Sentence>
                <ButtonCourse>
                    ENTENDA O CURSO
                </ButtonCourse>
            </Intro>
            <ElipseImage>
                <img src={Logos.ElipsePic} alt="" />
            </ElipseImage>
        </HomeContainer>
    );
};
