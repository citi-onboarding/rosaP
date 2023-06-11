import styled from 'styled-components'
import Logos from '../../assets'

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  background-image: url(${Logos.BackJeans});
  justify-content: space-between;
  align-items: center;
  padding: 1em 3em 0 3em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px 0;
    justify-content: center;
  }
`

export const Logo = styled.div`
  img {
    max-width: 80%;
  }
`

export const NavbarItems = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  font-style: normal;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    gap: 20px;
    margin-top: 10px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`
