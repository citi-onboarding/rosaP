import React from 'react'
import {
  CarouselContainer,
  Title,
  Section,
  Text,
  Image,
  Paragraph,
  TextParagraphBottom,
  CarouselSection,
  TextTitle,
  TextParagraph,
  RightArrow,
  LeftArrow,
} from './styles'
import Slider from 'react-slick'
import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Logos from '../../assets'

function SampleNextArrow(props: any) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <RightArrow />
    </div>
  )
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <LeftArrow />
    </div>
  )
}

export const CarouselComponent: React.FC = () => {
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: false, // não é um ciclo de imagens
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const contents = [
    {
      title: 'Conteúdo',
      paragraph:
        'Sustentabilidade e responsabilidade social como temática transversal',
      info: 'Jornada do conhecimento - 120H',
      image: `${Logos.Carousel1}`,
    },
    {
      title: 'Módulo 1',
      paragraph: 'COSTURANDO SABERES',
      info: 'Moda consciente - 24H Encaixe BBB - 14H Fechamento - 26H',
      image: `${Logos.Carousel2}`,
    },
    {
      title: 'Módulo 2',
      paragraph: 'A LINHA DO FUTURO',
      info: 'Pensando a produção - 12H Criatividade e apresentação - 12H Produzindo - 12H Protótipo - 22H',
      image: `${Logos.Carousel3}`,
    },
    {
      title: 'Impacto',
      paragraph: 'Desenvolvimento de Parcerias para empregabilidade',
      info: '40 profissionais | 2 turmas',
      image: `${Logos.Carousel4}`,
    },
  ]

  return (
    <CarouselContainer>
      <Title id="aboutthecourse">
        <Paragraph>Um pouco</Paragraph>
        <Paragraph>sobre o</Paragraph>
        <Paragraph>curso</Paragraph>
      </Title>
      <CarouselSection>
        <Slider {...settings}>
          {contents?.map(content => (
            <Section>
              <Text>
                <TextTitle>{content.title}</TextTitle>
                <TextParagraph>{content.paragraph}</TextParagraph>
                <TextParagraphBottom>{content.info}</TextParagraphBottom>
              </Text>
              <Image>
                <img src={content.image} alt="" />
              </Image>
            </Section>
          ))}
        </Slider>
      </CarouselSection>
    </CarouselContainer>
  )
}
