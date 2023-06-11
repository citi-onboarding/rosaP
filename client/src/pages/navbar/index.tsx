import React from 'react'
import { NavbarContainer, NavbarItems, Logo } from './styles'
import Logos from '../../assets'
import { NavLink } from 'react-router-dom'

export const NavBar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>
        <img src={Logos.RosaPnavBar} alt="Logo" />
      </Logo>
      <NavbarItems>
        <a href="/">Home</a>
        <a href="#about">Quem somos</a>
        <a href="#aboutthecourse">O que é?</a>
        <a href="#contact">Fale conosco</a>
      </NavbarItems>
    </NavbarContainer>
  )
}
