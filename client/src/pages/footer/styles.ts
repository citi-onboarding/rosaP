import styled from 'styled-components'; 

export const FooterContainer = styled.div`
    background-color:#E5E8ED;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 400px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-evenly;

`;

export const CreditosContainer = styled.div`
    display: flex;
    flex-directions: row;
    justify-content: space-around;

    p {
        font-size: 20px;
        color: #827D7D;
    }
`;

export const RedesSociaisContainer = styled.div`

    li {
        margin: 0 10px;
    }
`;

export const LogomarcaSpan = styled.span`
    display:flex;
    justify-content: center;
`;

export const Line = styled.hr`
    margin-left: 1%;
    height: 3px;
    background-color: #7D7E7F;
`;

export const Icons = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    align-content: center;
`;