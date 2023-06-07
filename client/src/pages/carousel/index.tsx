import React from "react";
import { useState } from "react";
import Carousel from 'react-elastic-carousel';
import { CarouselContainer, Title, Section, Vector, CarouselSection, Text, Image } from './styles';
import Logos from '../../assets';


export const CarouselComponent: React.FC = () => {

    /*const settings = {
        dots: false,    
        infinite: false,  // não é um ciclo de imagens
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1

    };*/

    return ( 
        <CarouselContainer>
            <Title>
                Um pouco sobre o curso
            </Title>
            <CarouselSection>
                <Section>
                    <Text>

                    </Text>
                    <Image><img src={Logos.Image1Carousel} alt="" /></Image>
                </Section>
                <Section>
                    <Text>

                    </Text>
                    <Image><img src={Logos.Image2Carousel} alt="" /></Image>
                </Section>
                <Section>
                    <Text>

                    </Text>
                    <Image><img src={Logos.Image3Carousel} alt="" /></Image>
                </Section>
                <Section>
                    <Text>

                    </Text>
                    <Image><img src={Logos.Image4Carousel} alt="" /></Image>
                </Section>
                <Vector><img src={Logos.ArrowGreyLeft} alt="" /></Vector>
            </CarouselSection>
        </CarouselContainer>
    );
};
