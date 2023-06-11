import React from 'react'
import {
  HomeSection,
  TextContainer,
  Title,
  Button,
  ImageContainer,
  Image,
} from './styles'
import Logos from '../../assets'
import { Link } from 'react-scroll'

export const Home: React.FC = () => {
  return (
    <HomeSection id="home">
      <TextContainer>
        <Title>Nossa maneira de PENSAR e FAZER moda</Title>
        <Link to="aboutthecourse" smooth={true} duration={500}>
          <Button>ENTENDA O CURSO</Button>
        </Link>
      </TextContainer>
      <ImageContainer>
        <Image src={Logos.ElipsePic} alt="People working at a table" />
      </ImageContainer>
    </HomeSection>
  )
}
