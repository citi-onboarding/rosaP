import styled, { css } from 'styled-components'
import Logos from '../../assets'

export const CarouselContainer = styled.div`
  /* width: 100%; */
  height: auto;
  background-color: #e5e8ed;
  padding-top: 90vh;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  position: relative;
  z-index: 0;
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
  .slick-arrow.slick-prev.slick-disabled,
  .slick-arrow.slick-next.slick-disabled {
    opacity: 0.4;
  }
`

export const CarouselSection = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 2em;
  .slick-slider {
    margin: 30px auto 50px;
    width: auto;
  }
  @media screen and (max-width: 1040px) {
    width: 800px;
  }
  @media screen and (max-width: 950px) {
    width: 500px;
  }
  @media screen and (max-width: 600px) {
    width: 250px;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
`

export const Title = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 69px;
  color: #000000;
  text-decoration-line: underline;
  text-decoration-color: #000000;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  margin-left: 3em;
  @media screen and (max-width: 1040px) {
    font-size: 40px;
    line-height: 50px;
  }
`

export const Paragraph = styled.p``

export const Text = styled.div`
  color: #000000;
  height: 215px;
  margin-bottom: 233px;
  display: flex;
  flex-direction: column;
  width: 780px;
  /* margin-left: 300px; */
  /* margin-top: -10px; */
  @media screen and (max-width: 950px) {
    width: 500px;
  }
  @media screen and (max-width: 600px) {
    width: 200px;
    height: 500px;
  }
`
export const TextTitle = styled.div`
  font-size: 53px;
  font-weight: 700;
  /* width: 500px; */
  line-height: 60px;
  margin-bottom: 97px;
  text-align: right;
  /* margin-left: 347px; */
  @media screen and (max-width: 1040px) {
    font-size: 40px;
  }
  @media screen and (max-width: 950px) {
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    line-height: 20px;
    margin-bottom: 40px;
  }
`

export const TextParagraph = styled.p`
  font-size: 40px;
  font-weight: 700;
  /* width: 500px; */
  line-height: 43px;
  padding: 0%;
  text-align: right;
  @media screen and (max-width: 950px) {
    font-size: 26px;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 50px;
  }
`

export const TextParagraphBottom = styled.div`
  font-size: 40px;
  font-weight: 700;
  /* width: 500px; */
  line-height: 43px;
  text-align: right;
  margin-top: 30px;
  margin-left: 300px;
  @media screen and (max-width: 950px) {
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 0px;
    margin-left: 0px;
    line-height: 40px;
  }
`

export const TextParagraphUp = styled.div`
  font-size: 40px;
  font-weight: 700;
  /* width: 590px; */
  line-height: 43px;
  padding: 0%;
  text-align: right;
  margin-bottom: 40px;
`

export const Image = styled.div`
  height: 100px;
  img {
    display: flex;
    float: right;
    width: 398px;
    margin-top: -385px;
    /* margin-right: 50px; */
  }
  @media screen and (max-width: 1040px) {
    display: none;
  }
`

export const RightArrow = styled.button`
  background-image: url(${Logos.SetaDireita});
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  width: 40px;
`

export const LeftArrow = styled.button`
  background-image: url(${Logos.SetaEsquerda});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  height: 40px;
  width: 40px;
`
