import React from 'react'
import {
  AboutSection,
  ImageContainer,
  Image,
  Title,
  SubTitle,
  Description,
  TextContainer,
} from './styles'
import Logos from '../../assets'

export const WhoWeAre: React.FC = () => {
  return (
    <AboutSection id="about">
      <ImageContainer>
        <Image src={Logos.PicWhoWeAre} alt="Picture of company owner" />
      </ImageContainer>
      <TextContainer>
        <Title>Quem somos</Title>
        <SubTitle>ROSA P </SubTitle>
        <Description>
          Em homenagem a ativista norte americana, a costureira negra Rosa Parks
          que se recusou a levantar do banco de ônibus para ceder seu lugar à
          pessoa branca e que iniciou, com sua atitude, mudanças sobre os
          direitos civis da população negra. A RosaP nasce com o desejo de
          promover uma transformação na triste realidade presente na cadeia da
          produção da moda, atuando de modo a intermediar de maneira justa as
          relações entre marcas e produtores da moda priorizando a inovação,
          qualidade e sustentabilidade social.
        </Description>
      </TextContainer>
    </AboutSection>
  )
}
