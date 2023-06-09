import styled from 'styled-components';
import BackgroundWhoWeAre from '../../assets/Group1.png'

export const WhoWeAreContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${BackgroundWhoWeAre});
    background-position: center;
    background-size: cover;
    position: relative;
    background-repeat: no-repeat;
    height: 1300px;
    margin-bottom: -315px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 8%;
    margin-bottom: 4%;


    span {
        margin-right: 3rem;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 6%;


    p {
        margin-top: 2em;
        text-align: right;
        font-size: 2.2em;
        text-indent: 10px;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    position: relative;

    h2 {
        align-self: flex-end;
        font-size: 36px;
        margin-top: 100px;
        margin-right: 7rem;
    }

    h1 {
        font-size: 50px;
        margin-right: 7rem;
        zIndex: 1;
        margin-left: 40px;
        margin-top: 100px;
        font-size: 4rem;
    }

    span {
        justify-content: flex-end;
        position: absolute;
        margin-top: 120px;
    }


`;