import styled from 'styled-components'
import Logos from '../../assets'

export const HomeSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5em 3em 0 3em;
  width: 100%;
  height: 95vh;
  background-image: url(${Logos.BackJeans});

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: 600px;
    padding: 2em;
  }
`

export const TextContainer = styled.div`
  flex: 1;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 50px;
  gap: 50px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    max-width: none;
    /* order: 1; */
  }
`

export const Title = styled.h2`
  font-size: 64px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`

export const Button = styled.button`
  padding: 10px 20px;
  width: 350px;
  height: 80px;
  border: none;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  background: #1d70b8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #245a8a;
    transition: 0.2s;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    justify-content: center;
    display: none;
  }
`

export const Image = styled.img`
  max-width: 400px;
  height: 400px;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
  }
`
