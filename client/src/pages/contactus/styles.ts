import styled from 'styled-components';
import Logos from "../../assets";

export const ContactUsContainer = styled.div`
    height: 800px;
    background-image: url(${Logos.BackJeans});
    display: flex;
    flex-direction: column;

`;


export const InputContainer = styled.input`
    height: ${props => props.height || "93px;"};
    font-size: 30px;
    border-radius: 10px;
    border:none;
    text-indent: 20px;
    
    ::placeholder {
        font-size: 30px;
    }

`;

export const AddresEmail = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 25px;

    img {
        border-radius: 10px;
        background: none;
    }

    button {
        background: none;
        border: none;
    }

    button:active {
        transform: scale(0.9);
    }

`;

export const Title = styled.div `
    h1 {
        display:flex;
        justify-content: center;
        margin-bottom: 15px;
        font-size: 3.5rem;
    }
    margin-top: 4%;
    margin-bottom: 2%;

`;

export const ContentContainer = styled.textarea`

    cols: 33;
    font-size: 30px;
    border-radius: 10px;
    border:none;
    width: 1030px;
    margin-left: 250px;
    padding: 20px;

`;
