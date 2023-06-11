import styled from 'styled-components'
import Logos from '../../assets'

export const ContactUsContainer = styled.div`
  height: 840px;
  width: 100%;
  background-image: url(${Logos.BackJeans});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    height: auto;
    padding: 20px;
  }
`

export const InputContainer = styled.input`
  height: ${props => props.height || '93px;'};
  font-size: 30px;
  border-radius: 10px;
  border: none;
  text-indent: 20px;
  width: 495px;

  ::placeholder {
    font-size: 30px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 20px;
    ::placeholder {
      font-size: 22px;
    }
  }
`

export const AddresEmail = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    font-size: 22px;
  }
`

export const Title = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 3.5rem;
  }
  margin-top: 4%;
  margin-bottom: 2%;
  @media screen and (max-width: 1024px) {
    margin-top: 2%;
    margin-bottom: 1%;
    align-content: center;
    justify-content: center;

    h1 {
      font-size: 2rem;
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextContainer = styled.textarea`
  font-size: 30px;
  border-radius: 10px;
  border: none;
  width: 1030px;
  padding: 20px;
  height: 300px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 20px;
    font-size: 22px;
  }
`

export const NodemailerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 2.5%;

  img {
    display: flex;
    border-radius: 10px;
    background: none;
    justify-content: flex-start;
  }

  button {
    display: flex;
    background: none;
    border: none;
    justify-content: flex-start;
    align-items: flex-start;
    height: 93px;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    margin-left: 0;

    img {
      justify-content: center;
    }
  }
`
