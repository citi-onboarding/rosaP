import React from "react";
import { CarouselContainer, Title, Section, Vector, Text, Image, Paragraph, TextParagraphBottom,
    CarouselSection, TextTitle, TextParagraph, TextParagraphUp } from './styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Logos from '../../assets';


export const CarouselComponent: React.FC = () => {

    const settings = {
        dots: false,    
        infinite: false,  // não é um ciclo de imagens
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1

    };

    return ( 
        <CarouselContainer>
            <CarouselSection>
                <Slider {...settings}>
                    <Section>
                        <Title>
                            <Paragraph>Um pouco</Paragraph>
                            <Paragraph>sobre o</Paragraph>
                            <Paragraph>curso</Paragraph>
                        </Title>
                        <Text>
                            <TextTitle>Conteúdo</TextTitle>
                            <TextParagraph>Sustentabilidade e </TextParagraph>
                            <TextParagraph>responsabilidade social</TextParagraph>
                            <TextParagraph>como temática transversal</TextParagraph>
                            <TextParagraphBottom>Jornada do conhecimento 120H</TextParagraphBottom>
                        </Text>
                        <Image><img src={Logos.Image1Carousel} alt="" /></Image>
                    </Section>
                    <Section>
                        <Title>
                            <Paragraph>Um pouco</Paragraph>
                            <Paragraph>sobre o</Paragraph>
                            <Paragraph>curso</Paragraph>
                        </Title>
                        <Text>
                            <TextTitle>Módulo 1</TextTitle>
                            <TextParagraphUp>COSTURANDO SABERES</TextParagraphUp>
                            <TextParagraph>Moda consciente - 24H</TextParagraph>
                            <TextParagraph>Encaixe BBB - 14H</TextParagraph>
                            <TextParagraph>Fechamento - 26H</TextParagraph>
                        </Text>
                        <Image><img src={Logos.Image2Carousel} alt="" /></Image>
                    </Section>
                    <Section>
                        <Title>
                            <Paragraph>Um pouco</Paragraph>
                            <Paragraph>sobre o</Paragraph>
                            <Paragraph>curso</Paragraph>
                        </Title>
                        <Text>
                            <TextTitle>Módulo 2</TextTitle>
                            <TextParagraphUp>A LINHA DO FUTURO</TextParagraphUp>
                            <TextParagraph>Pensando a produção - 12H</TextParagraph>
                            <TextParagraph>Criatividade e apresentação - 12H</TextParagraph>
                            <TextParagraph>Produzindo - 12H</TextParagraph>
                            <TextParagraph>Protótipo - 22H</TextParagraph>
                        </Text>
                        <Image><img src={Logos.Image3Carousel} alt="" /></Image>
                    </Section>
                    <Section>
                        <Title>
                            <Paragraph>Um pouco</Paragraph>
                            <Paragraph>sobre o</Paragraph>
                            <Paragraph>curso</Paragraph>
                        </Title>
                        <Text>
                            <TextTitle>Impacto</TextTitle>
                            <TextParagraph>Desenvolvimento de</TextParagraph>
                            <TextParagraph>Parcerias para</TextParagraph>
                            <TextParagraph>empregabilidade</TextParagraph>
                            <TextParagraphBottom>
                                40 profissionais | 2 turmas
                            </TextParagraphBottom>
                        </Text>
                        <Image><img src={Logos.Image4Carousel} alt="" /></Image>
                    </Section>
                </Slider>
                <Vector><img src={Logos.ArrowGreyLeft} alt="" /></Vector>
            </CarouselSection>
        </CarouselContainer>
    );
};
