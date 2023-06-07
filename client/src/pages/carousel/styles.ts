import { Component } from "react";
import styled from "styled-components";

export const CarouselContainer = styled.div`
    width: 100%;
    height: 976px;
    background-color: white;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    text-decoration: black;
    
;
`

export const Text = styled.div`
    
`

export const CarouselSection = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    
`

export const Section = styled.div`
    background: #E5E8ED;
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
    width: 269px;
    border-radius: nullpx;
    line-height: 69px;
    color: black;
    
;

`

export const Image = styled.div`
    img{
        height: 418px;
    }

`

export const Vector = styled.div`
    
`
