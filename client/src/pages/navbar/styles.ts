import styled from "styled-components";
import Logos from '../../assets';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 190px;
    display: flex;
    flex-direction: row;
    background-image: url(${Logos.BackJeans});
    justify-content: space-between;
`

export const Slogan = styled.div`
    img {
    
    }
`
export const Infos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding: 20px;
    margin: 10px;
    padding-left: 270px;
    padding-top: 70px;

`

export const InfoN = styled.div`
    @font-face {
        font-family:'d-din' ;
        src: url('D-DIN.otf') format('open-type');
        letter-spacing: 0em;
        font-style: normal;
    }
    font-family: 'd-din';
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0em;
    color: #FFFFFF;
    padding: 20px;
    margin: 10px;
    position: relative;
    top: 0px;
    margin-top: 0px;
;


`

