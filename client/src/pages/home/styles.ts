import styled from "styled-components";
import Logos from "../../assets";

export const HomeContainer = styled.div`
    width: 100%;
    height: 850px;
    background-image: url(${Logos.BackJeans});
    display: flex;
    flex-direction: row;
    //flex-direction: column;
`

export const Intro = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Sentence = styled.div`
    @font-face {
        font-family:'d-din' ;
        src: url('D-DIN.otf') format('open-type');
        letter-spacing: 0em;
    }
    font-size: 64px;
    font-weight: 700;
    height: 705px;
    line-height: 69px;
    margin-left: 110px;
    margin-top: 160px;
`

export const Line1 = styled.p`

`

export const ButtonCourse = styled.button`
    width: 364px;
    left: 0%;
    right: 0%;
    background: #1D70B8;
    color: white;
    font-family: 'd-din';
    font-size: 24px;
    font-weight: 700;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    height: 280px;
    margin-left: 230px;
    margin-bottom: 330px;
    @font-face {
        font-family:'d-din' ;
        src: url('D-DIN.otf') format('open-type');
        letter-spacing: 0em;
    }
    &:hover{
        transform: scale(1.12);
    }
;
`

export const ElipseImage = styled.div`
    height: 418px;
    width: 398px;
    margin-right: 98px;
    margin-top: 102px;
    img{
        height: 419px;
    }
`
