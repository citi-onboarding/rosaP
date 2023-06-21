import styled from 'styled-components'
import BackgroundWhoWeAre from '../../assets/Group1.png'

export const AboutSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 160vh;
  margin-top: -300px;
  background-image: url(${BackgroundWhoWeAre});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  position: absolute;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 80rem;
    /* margin-top: -8em; */
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    padding-top: 100px;
    margin-bottom: 0px;
  }
`

export const Image = styled.img`
  max-width: 400px;
  height: auto;
  @media screen and (max-width: 768px) {
    max-width: 250px;
  }
`

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: right;
  margin-right: 2em;
  @media screen and (max-width: 768px) {
    gap: 0px;
  }
`

export const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Description = styled.p`
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`
