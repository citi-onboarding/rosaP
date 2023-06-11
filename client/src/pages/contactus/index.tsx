import React, { useState } from 'react'
import {
  ContactUsContainer,
  InputContainer,
  AddresEmail,
  Title,
  ContentContainer,
  TextContainer,
  NodemailerContainer,
  ButtonContainer,
} from './styles'
import Logos from '../../assets'
import axios from 'axios'

export const ContactUs: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const Url = 'http://localhost:3001/email'

  function sendMail() {
    if (name && email && message) {
      axios
        .post(Url, { name, email, message })
        .then(() => {
          alert('Mensagem Enviada com sucesso')
          setName('')
          setEmail('')
          setMessage('')
        })
        .catch(() => alert('Seu email não foi enviado'))
    } else {
      alert('Preencha todos os campos para continuar')
    }
  }

  return (
    <ContactUsContainer id="contact">
      <Title>
        <h1>Curtiu?</h1>
        <h1>Entre em contato</h1>
      </Title>
      <NodemailerContainer>
        <ContentContainer>
          <AddresEmail>
            <InputContainer
              placeholder="Seu nome"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            ></InputContainer>
            <InputContainer
              placeholder="Seu Melhor email"
              type="email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
            ></InputContainer>
          </AddresEmail>
          <TextContainer
            placeholder="Fale um pouco mais..."
            value={message}
            required
            onChange={e => setMessage(e.target.value)}
          ></TextContainer>
        </ContentContainer>
        <ButtonContainer>
          <button onClick={() => sendMail()}>
            <img src={Logos.Enviar} alt=""></img>
          </button>
        </ButtonContainer>
      </NodemailerContainer>
    </ContactUsContainer>
  )
}
