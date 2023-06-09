import { Component } from "react";
import styled from "styled-components";

export const CarouselContainer = styled.div`
    width: 100%;
    height: 976px;
    background-color: #E5E8ED;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
;
`
    //scroll-behavior: smooth;

export const CarouselSection = styled.div`
    width: 100%;
    margin-top: 210px;
`

export const Section = styled.div`
    background: #E5E8ED;
    display: flex;
    flex-direction: row;
    float: right;
    width: 100%;

`

export const Title = styled.h2`
    height: 210px;
    @font-face {
        font-family:'d-din' ;
        src: url('D-DIN.otf') format('open-type');
        letter-spacing: 0em;
    
    };
    font-size: 64px;
    font-weight: 700;
    height: 210px;
    width: 320px;
    border-radius: nullpx;
    line-height: 69px;
    color: #000000;
    text-decoration-line: underline;
    text-decoration-color: #000000;
    margin-left: 122px;
    margin-top: 20px;
    margin-bottom: -60px;
    
;
`

export const Paragraph = styled.p`

`

export const Text = styled.div`
    color: black;
    height: 215px;
    margin-bottom: 233px;
    margin-left: 300px;
    margin-top: -10px;
    //justify-content: right;    não mudou nada
`
export const TextTitle = styled.div`
    @font-face {
        font-family:'d-din' ;
        src: url('D-DIN.otf') format('open-type');
        letter-spacing: 0em;
    
    };
    font-size: 53px;
    font-weight: 700;
    height: 61px;
    width: 240px;
    border-radius: nullpx;
    line-height: 60px;
    margin-bottom: 97px;
    text-align: right;
    margin-left: 347px;

`

export const TextParagraph = styled.p`
    @font-face {
        font-family:'d-din' ;
        src: url('D-DIN.otf') format('open-type');
        letter-spacing: 0em;
    
    };
    font-size: 40px;
    font-weight: 700;
    width: 590px;
    border-radius: nullpx;
    line-height: 43px;
    padding: 0%;
    text-align: right;
    //justify-content: right;

`

export const TextParagraphBottom = styled.div`
    @font-face {
        font-family:'d-din' ;
        src: url('D-DIN.otf') format('open-type');
        letter-spacing: 0em;
    
    };
    font-size: 40px;
    font-weight: 700;
    width: 605px;
    border-radius: nullpx;
    line-height: 43px;
    padding: 0%;
    text-align: right;
    margin-top: 30px;
    margin-left: -14px;
`

export const TextParagraphUp = styled.div`
    @font-face {
        font-family:'d-din' ;
        src: url('D-DIN.otf') format('open-type');
        letter-spacing: 0em;
    
    };
    font-size: 40px;
    font-weight: 700;
    width: 590px;
    border-radius: nullpx;
    line-height: 43px;
    padding: 0%;
    text-align: right;
    margin-bottom: 40px;
`

export const Image = styled.div`
    height: 418px;
    //width: 398px;
    img{
        display: flex;
        float: right;
        width: 398px;
        margin-top: -385px;
        margin-right: 50px;
    }

`

export const Vector = styled.div`
    
`
