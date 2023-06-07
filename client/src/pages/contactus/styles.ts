import styled from 'styled-components';
import Logos from "../../assets";

export const ContactUsContainer = styled.div`
    height: 840px;
    background-image: url(${Logos.BackJeans});
    display: flex;
    flex-direction: column;
    margin-bottom:

`;


export const InputContainer = styled.input`
    height: ${props => props.height || "93px;"};
    font-size: 30px;
    border-radius: 10px;
    border:none;
    text-indent: 20px;
    width: 495px;
    
    ::placeholder {
        font-size: 30px;
    }

`;

export const AddresEmail = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 25px;
    justify-content: space-between;

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

export const ContentContainer = styled.div`
    display:flex;
    flex-direction: column;
`;

export const TextContainer = styled.textarea`
    font-size: 30px;
    border-radius: 10px;
    border:none;
    width: 1030px;
    padding: 20px;
    height: 300px;
`;

export const NodemailerContainer = styled.div`
    display:flex;
    flex-direction: row;
    margin-left: 21%;
`;

export const ButtonContainer = styled.div`
display:flex;
justify-content: flex-start;
margin-left: 2.5%;

img {
    display:flex;
    border-radius: 10px;
    background: none;
    justify-content: flex-start;
}

button {
    display:flex;
    background: none;
    border: none;
    justify-content: flex-start;
    align-items: flex-start;
    height: 93px;
}

button:active {
    transform: scale(0.9);
}
`;
