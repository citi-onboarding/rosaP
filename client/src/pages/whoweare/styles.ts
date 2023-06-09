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
    height: 1500px;
    margin-top: -280px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 8%;
    margin-bottom: 4%;
    margin-top: 2.3%;


    span {
        margin-right: 5rem;
        transform: scale(1.2);
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 6%;


    p {
        margin-top: 1em;
        text-align: right;
        font-size: 2.6em;
        text-indent: 10px;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    position: relative;
    margin-top: 160px;

    h2 {
        align-self: flex-end;
        font-size: 40px;
        margin-top: 80px;
        margin-right: 7rem;
    }

    h1 {
        margin-right: 7rem;
        zIndex: 1;
        margin-left: 40px;
        margin-top: 100px;
        font-size: 4.3rem;
    }

    span {
        justify-content: flex-end;
        position: absolute;
        margin-top: 130px;
    }


`;